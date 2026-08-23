-- Provider-neutral payment columns and Dodo webhook idempotency.

CREATE TABLE "ProviderWebhookEvent" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "processedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProviderWebhookEvent_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "ProviderWebhookEvent_eventId_key" ON "ProviderWebhookEvent"("eventId");

ALTER TABLE "Bid" ADD COLUMN "providerCheckoutId" TEXT;
CREATE UNIQUE INDEX "Bid_providerCheckoutId_key" ON "Bid"("providerCheckoutId");

DROP INDEX IF EXISTS "Bid_stripeSessionId_key";
DROP INDEX IF EXISTS "Bid_stripePaymentIntentId_key";
ALTER TABLE "Bid" DROP COLUMN IF EXISTS "stripeSessionId";
ALTER TABLE "Bid" DROP COLUMN IF EXISTS "stripePaymentIntentId";

ALTER TABLE "Payment" ADD COLUMN "providerCheckoutId" TEXT;
CREATE UNIQUE INDEX "Payment_providerCheckoutId_key" ON "Payment"("providerCheckoutId");
ALTER TABLE "Payment" ALTER COLUMN "providerPaymentId" DROP NOT NULL;
ALTER TABLE "Payment" DROP COLUMN IF EXISTS "stripePaymentIntentId";

DROP TABLE IF EXISTS "StripeEvent";

CREATE TYPE "PaymentProvider_new" AS ENUM ('MOCK', 'DODO');
ALTER TABLE "Payment" ALTER COLUMN "provider" TYPE "PaymentProvider_new" USING (
  CASE
    WHEN "provider"::text = 'STRIPE' THEN 'DODO'::"PaymentProvider_new"
    WHEN "provider"::text = 'DODO' THEN 'DODO'::"PaymentProvider_new"
    ELSE 'MOCK'::"PaymentProvider_new"
  END
);
DROP TYPE "PaymentProvider";
ALTER TYPE "PaymentProvider_new" RENAME TO "PaymentProvider";
