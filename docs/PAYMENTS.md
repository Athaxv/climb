# Payments

Climb talks to a provider-neutral `PaymentProvider`. Ranking, Prisma, and `BidService` never import Dodo. Today the factory always returns Dodo; swapping providers later should not require ranking or schema redesign.

## Why the abstraction exists

- **Ranking** (`@climb/ranking`) only quotes and applies integer cents.
- **Prisma** (`@climb/db`) stores provider-neutral ids (`providerCheckoutId`, `providerPaymentId`) and `ProviderWebhookEvent`.
- **Orchestration** (`apps/web/services/payment.service.ts`) creates pending Bid/Payment rows, then calls the provider. Rank moves after a verified webhook, or when the return URL confirms the same payment with Dodo (`getPayment` / `getCheckout`).
- **Adapter** (`@climb/payments`) is the only package that depends on `dodopayments`.

## Dodo setup (test mode)

1. Create a Dodo test account and copy `DODO_PAYMENTS_API_KEY` (`dodo_test_...`).
2. **Developer → Webhooks** — copy the **signing secret** into `DODO_PAYMENTS_WEBHOOK_KEY` (not the `whsec_...` placeholder). The dashboard “Add endpoint” field needs HTTPS; for local rank updates use the CLI listener below instead of pasting `http://localhost`.
3. Create **one** one-time product priced at **$1.00** (`100` cents) with `tax_category: digital_products`. Put its id in `DODO_BID_PRODUCT_ID` (`pdt_...`).
4. Keep `DODO_PAYMENTS_ENVIRONMENT=test_mode` unless you are going live. The SDK defaults to live; Climb always passes `test_mode` unless this env is exactly `live_mode`.

Climb charges are always whole dollars. Checkout builds `product_cart: [{ product_id, quantity: chargeAmountCents / 100 }]`. A $1 new listing is quantity `1`.

## Environment

Server only. Do not prefix these with `NEXT_PUBLIC_`.

```
DODO_PAYMENTS_API_KEY=
DODO_PAYMENTS_WEBHOOK_KEY=
DODO_PAYMENTS_ENVIRONMENT=test_mode
DODO_PAYMENTS_RETURN_URL=http://localhost:3000/api/checkout/complete?username={username}
DODO_BID_PRODUCT_ID=
```

`{username}` is substituted in code. The return URL confirms the Checkout Session with Dodo, applies a still-pending bid if the session is paid, then redirects to `/climb?paid=1`. A bare `?paid=1` query without that confirmation does not move rank.

## Checkout

```
UI  →  POST /api/bids/checkout
    →  BidService (quote by pasted URL)
    →  PaymentService (pending Bid + Payment, no Climb email)
    →  Dodo checkoutSessions.create (hosted page collects payer email)
    →  redirect session.checkout_url
```

Anyone can pay to join or raise any profile URL. Climb does not collect email and does not check listing ownership. Dodo’s hosted checkout collects the payer email. First `payment.succeeded` may set that listing’s `Person.userId` from the email for bookkeeping. The same payer may have many listings; listings are never merged.

## Webhook

```
POST /api/dodo/webhook
  rawBody = request.text()          # never re-serialize JSON
  provider.verifyWebhook → unwrap() # Standard Webhooks
  401 on bad signature
```

```
BEGIN
  INSERT ProviderWebhookEvent(eventId = webhook-id)  -- unique; conflict => duplicate
  SELECT Person FOR UPDATE
  If quoted chargeAmountCents in metadata equals stored Bid.chargeAmountCents, apply even when Dodo total_amount includes tax.
  Else if total_amount ≠ stored charge, or currentBid >= target:
    mark Bid/Payment REFUNDED
  Else on payment.succeeded:
    currentBid = targetBidCents, currentBidAt = now()
    Bid COMPLETED, Payment SUCCEEDED
    Activity + RankSnapshot
COMMIT
If REFUNDED, call provider.refund after commit.
Duplicate webhook-id → 200 and retry refund if the bid is still REFUNDED.
```

`payment.failed` / `payment.cancelled` mark the pending bid failed and do not move rank.

## Local test

Checkout return uses the origin of the tab that started Pay. After pay, Dodo redirects immediately (`redirect_immediately`) to `return_url` with `payment_id` and `status` (not `session_id`). `/api/checkout/complete` retrieves that payment from Dodo, matches the Bid via `metadata.bidId` / `checkout_session_id`, and applies the pending bid if the payment succeeded. That heals a missed webhook. Production should still send `payment.succeeded` to `/api/dodo/webhook`. Rank does not move from a bare `?paid=1` query.

1. Paste a real Test Mode webhook signing secret into `apps/web/.env` as `DODO_PAYMENTS_WEBHOOK_KEY`. Restart Next.
2. In a second terminal, forward events to the port Next actually printed (this repo defaults to 3000):

```
pnpm --filter @climb/web dodo:listen
```

If Next is on another port:

```
npx dodopayments-cli login <test-api-key> test
npx dodopayments-cli wh listen http://localhost:<port>/api/dodo/webhook
```

3. Replay `payment.succeeded` from the Dodo dashboard for an already-paid session, or pay again with listen already running. Opening `/api/checkout/complete?username=...` after a paid session also applies a still-pending bid.

Dodo test cards must match the **billing country** on the hosted form ([testing process](https://docs.dodopayments.com/miscellaneous/testing-process)):

- United States → `4242 4242 4242 4242`, expiry `06/32`, CVV `123`
- India → `4576 2389 1277 1450`, expiry `06/32`, CVV `123`

A US card on an India-billed checkout (or the reverse) is declined. Climb locks the session to **USD**; do not pay with a real card in test mode.

Rank should move after the webhook, or when the return URL confirms the paid Checkout Session. Keep `dodo:listen` pointed at the same port as Next (`pnpm --filter @climb/web dodo:listen` uses 3000).

## Go live

1. Create the $1 product in the **live** catalog; update `DODO_BID_PRODUCT_ID`.
2. Set `DODO_PAYMENTS_API_KEY` to a `dodo_live_...` key.
3. Set `DODO_PAYMENTS_ENVIRONMENT=live_mode`.
4. Point the live webhook at `https://<production>/api/dodo/webhook` and use the live signing secret.
5. Confirm `DODO_PAYMENTS_RETURN_URL` uses your production origin.
6. In Dodo **Settings → Business**, turn on **Adaptive Currency**. Live checkout then omits the fake US address, asks only country (and PIN/ZIP where tax needs it), and lets the payer pick a local currency. Rank still quotes USD; webhooks match `metadata.chargeAmountCents`, not the converted total.
