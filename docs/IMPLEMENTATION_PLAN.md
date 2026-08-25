# Climb implementation plan

Turn the existing Climb UI into a real pay-to-rank app. **Do not redesign the UI.** Cream cards, Climb blue `#3B6FF0`, hover claim pills, and `/p/[username]` stay.

## Confirmed product rules

- Checkout email creates/attaches `User`. No Google login wall.
- Handle is the listing key. New handle → new `Person`. Only that listing’s owner may raise it later.
- Postgres is source of truth. Dodo (via `@climb/payments`) confirms payment. Redis is cache/rate limit only.

## Existing stack (reuse)

- `apps/web` — Next.js 16.3.2, React 19, Tailwind v4
- `packages/db` — Prisma 6, Neon Postgres
- `packages/ranking` — pure ranking math + Vitest
- `packages/payments` — `PaymentProvider` + Dodo adapter
- Root scripts: `pnpm db:generate`, `pnpm db:migrate`, `pnpm db:seed`

There were no API routes, auth, payments, Redis, or Zod. Leaderboard already reads Postgres (seeded people). `/create` was a teaser.

## Workstreams

1. **Schema** — Integer cents, `currentBidAt`, nullable `Person.userId`, `ProviderWebhookEvent`, `Activity`, `AnalyticsEvent`. Keep model name `Person`.
2. **Ranking services** — `@climb/ranking` for quote/apply/order; `apps/web/services` for Prisma + `PaymentService`. SQL rank and around-rank; never load the full board for “find my rank”.
3. **API** — Zod-validated App Router handlers listed below. Pages keep calling services/RSC directly (no HTTP-to-self).
4. **Dodo** — Checkout Sessions + idempotent webhook with `SELECT FOR UPDATE` and refund-on-stale. See [PAYMENTS.md](./PAYMENTS.md).
5. **Redis** — Cache + rate limit, fail open.
6. **UI** — Wire `/create` Pay, activity table, find-rank search API, profile views, share, post-pay banner. Same look.
7. **Session + analytics** — `AUTH_SECRET` cookie after paid session; funnel events.
8. **Verify** — typecheck, lint, tests, `prisma validate`, seed, no secrets on the client.

## API surface

- `GET /api/leaderboard?category=&q=`
- `GET /api/profiles/[handle]`
- `GET /api/profiles/[handle]/rank`
- `GET /api/profiles/[handle]/around`
- `POST /api/profiles`
- `POST /api/bids/checkout`
- `GET /api/bids/[id]`
- `GET /api/activity`
- `POST /api/dodo/webhook`

Client may send a requested target bid. The server calculates the real charge. The board does not move until the webhook applies a successful payment.

## Ranking rules

- New spots from `$1`. Beat a seat by `$1`.
- `currentBid DESC`, `currentBidAt ASC`, `id ASC`.
- Unpaid drafts (`currentBid = 0`) are omitted from public boards.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for locking, refunds, and Redis.
