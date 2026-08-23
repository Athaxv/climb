-- AlterEnum
ALTER TYPE "BidStatus" ADD VALUE 'REFUNDED';

-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('JOINED', 'RAISED');

-- Person: cents, optional owner, profileUrl, currentBidAt
ALTER TABLE "Person" ALTER COLUMN "userId" DROP NOT NULL;
ALTER TABLE "Person" ADD COLUMN "profileUrl" TEXT;
ALTER TABLE "Person" ADD COLUMN "currentBidAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "Person" ALTER COLUMN "currentBid" DROP DEFAULT;
ALTER TABLE "Person" ALTER COLUMN "currentBid" TYPE INTEGER USING ROUND("currentBid" * 100)::INTEGER;
ALTER TABLE "Person" ALTER COLUMN "currentBid" SET DEFAULT 0;

-- Bid: optional user, target/charge cents
ALTER TABLE "Bid" DROP CONSTRAINT "Bid_userId_fkey";
ALTER TABLE "Bid" ALTER COLUMN "userId" DROP NOT NULL;
ALTER TABLE "Bid" ADD COLUMN "targetBidCents" INTEGER;
ALTER TABLE "Bid" ADD COLUMN "chargeAmountCents" INTEGER;
ALTER TABLE "Bid" ADD COLUMN "identityInput" TEXT;
UPDATE "Bid" SET "chargeAmountCents" = ROUND("amount" * 100)::INTEGER, "targetBidCents" = ROUND("amount" * 100)::INTEGER;
ALTER TABLE "Bid" ALTER COLUMN "targetBidCents" SET NOT NULL;
ALTER TABLE "Bid" ALTER COLUMN "chargeAmountCents" SET NOT NULL;
ALTER TABLE "Bid" DROP COLUMN "amount";
ALTER TABLE "Bid" ADD CONSTRAINT "Bid_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Payment
ALTER TABLE "Payment" ADD COLUMN "bidId" TEXT;
ALTER TABLE "Payment" ADD COLUMN "currency" TEXT NOT NULL DEFAULT 'usd';
ALTER TABLE "Payment" ADD COLUMN "stripePaymentIntentId" TEXT;
ALTER TABLE "Payment" ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "Payment" ALTER COLUMN "amount" DROP DEFAULT;
ALTER TABLE "Payment" ALTER COLUMN "amount" TYPE INTEGER USING ROUND("amount" * 100)::INTEGER;

-- RankSnapshot bid to cents
ALTER TABLE "RankSnapshot" ALTER COLUMN "bid" TYPE INTEGER USING ROUND("bid" * 100)::INTEGER;

-- Person.userId on delete set null
ALTER TABLE "Person" DROP CONSTRAINT "Person_userId_fkey";
ALTER TABLE "Person" ADD CONSTRAINT "Person_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Indexes
DROP INDEX IF EXISTS "Person_currentBid_updatedAt_idx";
DROP INDEX IF EXISTS "Person_categoryId_currentBid_updatedAt_idx";
CREATE INDEX "Person_categoryId_currentBid_currentBidAt_idx" ON "Person"("categoryId", "currentBid" DESC, "currentBidAt" ASC);
CREATE INDEX "Person_currentBid_currentBidAt_id_idx" ON "Person"("currentBid" DESC, "currentBidAt" ASC, "id" ASC);
CREATE INDEX "Person_createdAt_idx" ON "Person"("createdAt");
CREATE INDEX "Bid_userId_createdAt_idx" ON "Bid"("userId", "createdAt");

-- StripeEvent
CREATE TABLE "StripeEvent" (
    "id" TEXT NOT NULL,
    "stripeEventId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "processedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StripeEvent_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "StripeEvent_stripeEventId_key" ON "StripeEvent"("stripeEventId");

-- Activity
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "type" "ActivityType" NOT NULL,
    "amount" INTEGER NOT NULL,
    "rank" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "Activity_createdAt_idx" ON "Activity"("createdAt");
CREATE INDEX "Activity_personId_createdAt_idx" ON "Activity"("personId", "createdAt");
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AnalyticsEvent
CREATE TABLE "AnalyticsEvent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "payload" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalyticsEvent_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "AnalyticsEvent_name_createdAt_idx" ON "AnalyticsEvent"("name", "createdAt");
CREATE INDEX "AnalyticsEvent_createdAt_idx" ON "AnalyticsEvent"("createdAt");

-- Payment.bidId unique FK (nullable until backfilled; seed recreates rows)
CREATE UNIQUE INDEX "Payment_bidId_key" ON "Payment"("bidId");
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_bidId_fkey" FOREIGN KEY ("bidId") REFERENCES "Bid"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Payment" ALTER COLUMN "bidId" SET NOT NULL;
