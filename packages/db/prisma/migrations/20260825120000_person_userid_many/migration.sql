-- A payer (User) may have many listings (Person). Listing identity is the
-- canonical SocialLink URL, not User.userId.
DROP INDEX IF EXISTS "Person_userId_key";

CREATE INDEX IF NOT EXISTS "Person_userId_idx" ON "Person"("userId");
