-- CreateEnum
CREATE TYPE "SocialLinkType" AS ENUM ('LINKEDIN', 'GITHUB', 'TWITTER', 'WEBSITE', 'PORTFOLIO', 'OTHER');

-- CreateEnum
CREATE TYPE "BidStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'SUCCEEDED', 'FAILED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "PaymentProvider" AS ENUM ('MOCK', 'STRIPE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "bio" TEXT,
    "imageUrl" TEXT,
    "categoryId" TEXT NOT NULL,
    "location" TEXT,
    "country" TEXT,
    "currentBid" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "totalViews" INTEGER NOT NULL DEFAULT 0,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialLink" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "type" "SocialLinkType" NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bid" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "status" "BidStatus" NOT NULL DEFAULT 'PENDING',
    "stripeSessionId" TEXT,
    "stripePaymentIntentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "provider" "PaymentProvider" NOT NULL,
    "providerPaymentId" TEXT NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileView" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "ipHash" TEXT NOT NULL,
    "userAgentHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProfileView_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RankSnapshot" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "bid" DECIMAL(12,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RankSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkClick" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "socialLinkId" TEXT NOT NULL,
    "ipHash" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LinkClick_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Person_userId_key" ON "Person"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Person_username_key" ON "Person"("username");

-- CreateIndex
CREATE INDEX "Person_currentBid_updatedAt_idx" ON "Person"("currentBid" DESC, "updatedAt" ASC);

-- CreateIndex
CREATE INDEX "Person_categoryId_currentBid_updatedAt_idx" ON "Person"("categoryId", "currentBid" DESC, "updatedAt" ASC);

-- CreateIndex
CREATE INDEX "Person_username_idx" ON "Person"("username");

-- CreateIndex
CREATE INDEX "SocialLink_personId_idx" ON "SocialLink"("personId");

-- CreateIndex
CREATE UNIQUE INDEX "SocialLink_personId_type_key" ON "SocialLink"("personId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "SocialLink_type_url_key" ON "SocialLink"("type", "url");

-- CreateIndex
CREATE UNIQUE INDEX "Bid_stripeSessionId_key" ON "Bid"("stripeSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Bid_stripePaymentIntentId_key" ON "Bid"("stripePaymentIntentId");

-- CreateIndex
CREATE INDEX "Bid_personId_createdAt_idx" ON "Bid"("personId", "createdAt");

-- CreateIndex
CREATE INDEX "Bid_status_createdAt_idx" ON "Bid"("status", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_providerPaymentId_key" ON "Payment"("providerPaymentId");

-- CreateIndex
CREATE INDEX "Payment_personId_createdAt_idx" ON "Payment"("personId", "createdAt");

-- CreateIndex
CREATE INDEX "ProfileView_personId_createdAt_idx" ON "ProfileView"("personId", "createdAt");

-- CreateIndex
CREATE INDEX "ProfileView_personId_ipHash_createdAt_idx" ON "ProfileView"("personId", "ipHash", "createdAt");

-- CreateIndex
CREATE INDEX "RankSnapshot_personId_createdAt_idx" ON "RankSnapshot"("personId", "createdAt");

-- CreateIndex
CREATE INDEX "RankSnapshot_createdAt_idx" ON "RankSnapshot"("createdAt");

-- CreateIndex
CREATE INDEX "LinkClick_personId_createdAt_idx" ON "LinkClick"("personId", "createdAt");

-- CreateIndex
CREATE INDEX "LinkClick_socialLinkId_createdAt_idx" ON "LinkClick"("socialLinkId", "createdAt");

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialLink" ADD CONSTRAINT "SocialLink_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bid" ADD CONSTRAINT "Bid_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bid" ADD CONSTRAINT "Bid_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileView" ADD CONSTRAINT "ProfileView_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RankSnapshot" ADD CONSTRAINT "RankSnapshot_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkClick" ADD CONSTRAINT "LinkClick_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkClick" ADD CONSTRAINT "LinkClick_socialLinkId_fkey" FOREIGN KEY ("socialLinkId") REFERENCES "SocialLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;
