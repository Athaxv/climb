# Payments

Climb talks to a provider-neutral `PaymentProvider`. Ranking, Prisma, and `BidService` never import Dodo. Today the factory always returns Dodo; swapping providers later should not require ranking or schema redesign.

## Why the abstraction exists

- **Ranking** (`@climb/ranking`) only quotes and applies integer cents.
- **Prisma** (`@climb/db`) stores provider-neutral ids (`providerCheckoutId`, `providerPaymentId`) and `ProviderWebhookEvent`.
- **Orchestration** (`apps/web/services/payment.service.ts`) creates pending Bid/Payment rows, then calls the provider. Rank moves only after a verified webhook.
- **Adapter** (`@climb/payments`) is the only package that depends on `dodopayments`.

## Dodo setup (test mode)

1. Create a Dodo test account and copy `DODO_PAYMENTS_API_KEY` (`dodo_test_...`).
2. **Developer → Webhooks** → endpoint `https://<host>/api/dodo/webhook` (local: see below). Copy the signing secret into `DODO_PAYMENTS_WEBHOOK_KEY`.
3. Create **one** one-time product priced at **$1.00** (`100` cents) with `tax_category: digital_products`. Put its id in `DODO_BID_PRODUCT_ID` (`pdt_...`).
4. Keep `DODO_PAYMENTS_ENVIRONMENT=test_mode` unless you are going live. The SDK defaults to live; Climb always passes `test_mode` unless this env is exactly `live_mode`.

Climb charges are always whole dollars. Checkout builds `product_cart: [{ product_id, quantity: chargeAmountCents / 100 }]`. A $5 new listing is quantity `5`.

## Environment

Server only. Do not prefix these with `NEXT_PUBLIC_`.

```
DODO_PAYMENTS_API_KEY=
DODO_PAYMENTS_WEBHOOK_KEY=
DODO_PAYMENTS_ENVIRONMENT=test_mode
DODO_PAYMENTS_RETURN_URL=http://localhost:3000/api/checkout/complete?username={username}
DODO_BID_PRODUCT_ID=
```

`{username}` is substituted in code. The return URL may show a success banner and set a session cookie. It must **not** apply rank.

## Checkout

```
UI  →  POST /api/bids/checkout
    →  BidService (quote + owner check)
    →  PaymentService (pending Bid + Payment)
    →  Dodo checkoutSessions.create
    →  redirect session.checkout_url
```

Ownership:

- New or unowned listing (`Person.userId` empty): checkout allowed. First `payment.succeeded` sets `Person.userId` from the payer’s email → `User`.
- Owned listing: `climb_session` `userId` or email must match the owner. Otherwise `403 listing_taken`. Hover “claim this rank” still means bid on **your** row.

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
  If amount ≠ stored charge, or currentBid >= target:
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

```
dodo wh listen http://localhost:3000/api/dodo/webhook
```

Test card: `4242 4242 4242 4242`. Rank should move only after the webhook, not when the browser hits the return URL.

## Go live

1. Create the $1 product in the **live** catalog; update `DODO_BID_PRODUCT_ID`.
2. Set `DODO_PAYMENTS_API_KEY` to a `dodo_live_...` key.
3. Set `DODO_PAYMENTS_ENVIRONMENT=live_mode`.
4. Point the live webhook at `https://<production>/api/dodo/webhook` and use the live signing secret.
5. Confirm `DODO_PAYMENTS_RETURN_URL` uses your production origin.
