-- Live-board reads filter currentBid > 0. Partial indexes keep the hot path small.
CREATE INDEX IF NOT EXISTS "Person_live_bid_idx"
  ON "Person" ("currentBid" DESC, "currentBidAt" ASC, "id" ASC)
  WHERE "currentBid" > 0;

CREATE INDEX IF NOT EXISTS "Person_live_category_bid_idx"
  ON "Person" ("categoryId", "currentBid" DESC, "currentBidAt" ASC)
  WHERE "currentBid" > 0;
