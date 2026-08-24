# Climb architecture

Climb is a public pay-to-rank leaderboard for people. This document records the decisions that affect money and ranking correctness.

## Sources of truth

1. **PostgreSQL** is the source of truth for profiles, bids, ranks, and activity.
2. **Dodo Payments** (behind `PaymentProvider` in `@climb/payments`) is the source of truth for whether money was captured.
3. **Redis** is optional cache and rate limiting. If Redis is down, the app still serves from Postgres and rate limits fail open.
4. The browser never finalizes a bid. Verified `payment.succeeded` webhooks do.

Rank is derived from `Person.currentBid` (integer cents), not stored as a writable field. Display rank is computed:

`currentBid DESC`, then `currentBidAt ASC`, then `id ASC`.

`currentBidAt` is updated only when `currentBid` changes. Editing a headline must not reshuffle ties.

The Prisma model is still named `Person` (not `Profile`). Spec `handle` maps to `Person.username`. Public URLs stay `/p/[username]`.

Ranking and Prisma stay Dodo-free. See [PAYMENTS.md](./PAYMENTS.md) for the adapter, $1 product, and webhook details.

## Money

All persisted amounts are **integer cents**. `$421.00` is `42100`.

Never store money as a float. Never trust `amount`, `rank`, or `currentBid` from the client.

Checkout quote (server):

- New listing (`currentBid === 0`): minimum target is `$5` (`500` cents).
- Raise existing listing: minimum target is `currentBid + $1`.
- Optional client `targetBid` is a **request**. If it is below the minimum, reject `bid_too_low`.
- Charge is `targetBidCents - currentBid`. A new listing pays the full target.

Taking any seat, including #1, is `$1` over the occupant. Climb does not add Outbid’s extra `$5` surcharge for #1.

## Listing identity

Public browsing and checkout are unauthenticated. Climb does not collect email; Dodo’s hosted checkout does.

Same person on the board means the same **canonical profile URL** on `SocialLink` (`@@unique([type, url])`). Supported inputs are LinkedIn `/in/…`, GitHub, X/Twitter, and a personal website.

- Paste a profile URL. `parseProfileUrl` yields platform + canonical URL (www, query, hash, and trailing slash stripped).
- If that `SocialLink` exists, checkout uses that `Person` — anyone may pay to join or raise it.
- Otherwise a `Person` is created (draft at `currentBid = 0` until paid) with public slug `Person.username` = `{platform}-{handle}` from the **first** URL (`github-octocat`, `linkedin-maya-chen`, `x-maya`) plus that `SocialLink`. `Bid.identityInput` stores the raw URL.
- The first successful payment may set `Person.userId` from the Dodo payer email → `User`. That is bookkeeping, not a raise gate.
- Public leaderboards hide `currentBid = 0`.
- Public profile paths stay `/p/[username]`. Seed rows may keep older usernames; new checkouts require a profile URL.

## Discovery

The public board lives at `/climb`. Category boards are `/climb/{slug}` (Engineering, AI & Data, DevOps & Cloud, …). Search is `?q=` and matches name, username, or skills in Postgres. Category is a required checkout field and the only board filter. Skills are metadata, not a filter. Platform (LinkedIn / GitHub / X / website) is display-only.

## Checkout and webhook

1. `POST /api/bids/checkout` quotes cents for the pasted URL, inserts pending `Bid` + `Payment`, then creates a Dodo Checkout Session. The board does not move.
2. Dodo sends `payment.succeeded` (or failed/cancelled), or the payer hits `/api/checkout/complete`, which confirms the session with Dodo and applies the same path if it is paid.
3. `/api/dodo/webhook` verifies the signature on the **raw** body, then:

```
BEGIN
  INSERT ProviderWebhookEvent(eventId)   -- webhook-id; conflict => already processed
  SELECT Person FOR UPDATE
  If total_amount ≠ stored charge, or currentBid >= targetBidCents:
    mark Bid REFUNDED, Payment REFUNDED
  Else:
    set currentBid = targetBidCents, currentBidAt = now()
    Bid COMPLETED, Payment SUCCEEDED
    Activity + RankSnapshot
COMMIT
If the bid was marked REFUNDED, create a Dodo refund after commit.
On a duplicate event, return 200 and retry the refund if it never landed.
```

Two checkouts for the **same** listing to the **same** target: the first `FOR UPDATE` wins; the second is stale and refunded. Two **different** listings both paying `$221` both succeed; earlier `currentBidAt` ranks higher.

Frontend `?paid=1` only shows a banner (and may set a session cookie). Rank is written in `handlePaymentEvent` after a verified webhook, or when `/api/checkout/complete` confirms the Checkout Session with Dodo.

## Redis

Keys (TTL ~20s):

- `leaderboard:global`
- `leaderboard:category:{slug}`
- `profile:{username}`

Invalidate those keys after a successful bid. Cache misses and Redis errors fall through to Postgres.

Rate limits (per IP, fail open):

- `POST /api/bids/checkout` — 10 / minute
- `POST /api/profiles` — 5 / minute
- `GET /api/leaderboard` and `GET /api/profiles/*` — 60 / minute
- Webhook is protected by signature + idempotency, not a tight IP cap (Dodo retries)

## Sessions

`AUTH_SECRET` signs an httpOnly JWT after a verified paid Checkout Session. Used for the success banner. Browsing and bidding do not require it.

## Analytics

`AnalyticsEvent` rows are fire-and-forget funnel markers (`leaderboard_view`, `profile_view`, `checkout_created`, `payment_success`, …). They must not block checkout or ranking.
