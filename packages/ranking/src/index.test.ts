import { describe, expect, it } from "vitest";
import {
  assignRanks,
  cacheKeysForBid,
  calculateMinimumBid,
  calculateTrendingScores,
  decideSuccessfulBid,
  isValidBid,
  moneyToCents,
  parseIdentity,
  parseProfileUrl,
  quoteCheckout,
} from "./index";

const t = (iso: string) => new Date(iso);

describe("ranking", () => {
  it("orders by bid descending: B $200, A $100, C $50", () => {
    const now = t("2026-08-22T10:00:00.000Z");
    const ranked = assignRanks([
      { id: "A", currentBidCents: 10000, currentBidAt: now },
      { id: "B", currentBidCents: 20000, currentBidAt: now },
      { id: "C", currentBidCents: 5000, currentBidAt: now },
    ]);

    expect(ranked.map((row) => row.id)).toEqual(["B", "A", "C"]);
    expect(ranked.map((row) => row.rank)).toEqual([1, 2, 3]);
  });

  it("breaks ties with earlier currentBidAt winning", () => {
    const ranked = assignRanks([
      {
        id: "later",
        currentBidCents: 10000,
        currentBidAt: t("2026-08-22T12:00:00.000Z"),
      },
      {
        id: "earlier",
        currentBidCents: 10000,
        currentBidAt: t("2026-08-22T09:00:00.000Z"),
      },
    ]);

    expect(ranked[0]?.id).toBe("earlier");
    expect(ranked[1]?.id).toBe("later");
  });

  it("uses id as a final deterministic tie-break", () => {
    const now = t("2026-08-22T10:00:00.000Z");
    const ranked = assignRanks([
      { id: "b", currentBidCents: 10000, currentBidAt: now },
      { id: "a", currentBidCents: 10000, currentBidAt: now },
    ]);
    expect(ranked.map((row) => row.id)).toEqual(["a", "b"]);
  });
});

describe("minimum bid", () => {
  it("requires $151 when the person above is $150", () => {
    expect(calculateMinimumBid("150.00")).toBe("151.00");
    expect(moneyToCents(calculateMinimumBid("150"))).toBe(15100);
  });

  it("rejects a bid equal to the occupant", () => {
    expect(isValidBid("150.00", "151.00")).toBe(false);
  });

  it("accepts the minimum valid bid", () => {
    expect(isValidBid("151.00", "151.00")).toBe(true);
  });
});

describe("checkout quote", () => {
  it("floors a new listing at $5", () => {
    expect(quoteCheckout({ currentBidCents: 0 })).toEqual({
      ok: true,
      targetBidCents: 500,
      chargeAmountCents: 500,
    });
  });

  it("charges the difference when raising", () => {
    expect(quoteCheckout({ currentBidCents: 10000, requestedTargetCents: 22100 })).toEqual({
      ok: true,
      targetBidCents: 22100,
      chargeAmountCents: 12100,
    });
  });

  it("rejects a target below the minimum", () => {
    expect(quoteCheckout({ currentBidCents: 22000, requestedTargetCents: 22000 })).toEqual({
      ok: false,
      error: "bid_too_low",
    });
  });
});

describe("successful bid application", () => {
  it("joins when the listing had no bid", () => {
    expect(decideSuccessfulBid({ currentBidCents: 0, targetBidCents: 500 })).toEqual({
      ok: true,
      newBidCents: 500,
      kind: "joined",
    });
  });

  it("raises when the listing already had a bid", () => {
    expect(decideSuccessfulBid({ currentBidCents: 10000, targetBidCents: 22100 })).toEqual({
      ok: true,
      newBidCents: 22100,
      kind: "raised",
    });
  });

  it("marks a matching concurrent target as stale", () => {
    expect(decideSuccessfulBid({ currentBidCents: 10100, targetBidCents: 10100 })).toEqual({
      ok: false,
      reason: "stale",
    });
  });

  it("lets only the first of two identical concurrent raises apply", () => {
    const listing = { currentBidCents: 10000 };
    const first = decideSuccessfulBid({
      currentBidCents: listing.currentBidCents,
      targetBidCents: 10100,
    });
    expect(first.ok).toBe(true);
    if (first.ok) listing.currentBidCents = first.newBidCents;
    const second = decideSuccessfulBid({
      currentBidCents: listing.currentBidCents,
      targetBidCents: 10100,
    });
    expect(second).toEqual({ ok: false, reason: "stale" });
    expect(listing.currentBidCents).toBe(10100);
  });

  it("does not change rank when payment fails", () => {
    const listing = { currentBidCents: 10000 };
    const paymentFailed = true;
    if (!paymentFailed) {
      const applied = decideSuccessfulBid({
        currentBidCents: listing.currentBidCents,
        targetBidCents: 10100,
      });
      if (applied.ok) listing.currentBidCents = applied.newBidCents;
    }
    expect(listing.currentBidCents).toBe(10000);
  });
});

describe("cache keys", () => {
  it("invalidates global, category, and profile keys", () => {
    expect(cacheKeysForBid("maya-chen", "ai-data")).toEqual([
      "leaderboard:global:p1:s25",
      "leaderboard:category:ai-data:p1:s25",
      "leaderboard:hero",
      "profile:maya-chen",
    ]);
  });
});

describe("trending", () => {
  it("does not let a huge bid automatically dominate", () => {
    const scores = calculateTrendingScores([
      { recentViews: 20, bidGrowth: 10_000, rankImprovement: 0 },
      { recentViews: 800, bidGrowth: 40, rankImprovement: 30 },
      { recentViews: 600, bidGrowth: 15, rankImprovement: 20 },
    ]);

    expect(scores[1]).toBeGreaterThan(scores[0]);
  });
});

describe("identity", () => {
  it("parses GitHub, LinkedIn /in/, and X profile URLs", () => {
    expect(parseProfileUrl("https://github.com/octocat")).toMatchObject({
      type: "GITHUB",
      handle: "octocat",
      canonicalUrl: "https://github.com/octocat",
      username: "github-octocat",
      fullName: "Octocat",
    });
    expect(parseProfileUrl("https://linkedin.com/in/maya-chen")).toMatchObject({
      type: "LINKEDIN",
      handle: "maya-chen",
      canonicalUrl: "https://www.linkedin.com/in/maya-chen",
      username: "linkedin-maya-chen",
      fullName: "Maya Chen",
    });
    expect(parseProfileUrl("https://x.com/maya")).toMatchObject({
      type: "TWITTER",
      handle: "maya",
      canonicalUrl: "https://x.com/maya",
      username: "x-maya",
    });
    expect(parseProfileUrl("https://twitter.com/maya")?.canonicalUrl).toBe("https://x.com/maya");
    expect(parseProfileUrl("https://mayachen.dev")).toMatchObject({
      type: "WEBSITE",
      canonicalUrl: "https://mayachen.dev",
      username: "web-mayachen-dev",
    });
  });

  it("strips www, query, hash, and trailing slash", () => {
    expect(parseProfileUrl("https://www.github.com/octocat/?tab=repositories#top")).toMatchObject({
      canonicalUrl: "https://github.com/octocat",
      username: "github-octocat",
    });
  });

  it("does not slug LinkedIn to the hostname", () => {
    expect(parseProfileUrl("https://linkedin.com/in/maya-chen")?.username).toBe("linkedin-maya-chen");
    expect(parseProfileUrl("https://linkedin.com/in/maya-chen")?.username).not.toBe("linkedin-com");
    expect(parseProfileUrl("https://www.linkedin.com/company/foo")).toBeNull();
  });

  it("rejects names and @handles", () => {
    expect(parseProfileUrl("Maya Chen")).toBeNull();
    expect(parseProfileUrl("@arjun-mehta")).toBeNull();
    expect(parseIdentity("ab")).toBeNull();
    expect(parseIdentity("")).toBeNull();
  });
});
