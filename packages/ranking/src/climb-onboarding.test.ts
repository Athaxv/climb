import { describe, expect, it } from "vitest";
import {
  completedPaymentActivatesListing,
  decideSuccessfulBid,
  isLiveOnLeaderboard,
  parseProfileUrl,
  quoteCheckout,
} from "./index";

describe("Climb GitHub onboarding → board membership", () => {
  const githubUrls = [
    "https://github.com/octocat",
    "https://github.com/octocat/",
    "http://github.com/octocat",
    "github.com/octocat",
    "https://www.github.com/Octocat",
  ];

  it("canonicalizes GitHub URL variants to one identity", () => {
    const parsed = githubUrls.map((url) => parseProfileUrl(url));
    expect(parsed.every(Boolean)).toBe(true);
    const canonical = new Set(parsed.map((row) => row?.canonicalUrl));
    const usernames = new Set(parsed.map((row) => row?.username));
    expect(canonical).toEqual(new Set(["https://github.com/octocat"]));
    expect(usernames).toEqual(new Set(["github-octocat"]));
  });

  it("does not list a Person until currentBid is activated by payment", () => {
    expect(isLiveOnLeaderboard(0)).toBe(false);
    const decision = decideSuccessfulBid({ currentBidCents: 0, targetBidCents: 100 });
    expect(decision).toEqual({ ok: true, newBidCents: 100, kind: "joined" });
    expect(isLiveOnLeaderboard(decision.ok ? decision.newBidCents : 0)).toBe(true);
  });

  it("requires a completed payment to leave currentBid at the paid target", () => {
    expect(
      completedPaymentActivatesListing({
        bidStatus: "COMPLETED",
        currentBidCents: 100,
        targetBidCents: 100,
      }),
    ).toBe(true);
    expect(
      completedPaymentActivatesListing({
        bidStatus: "COMPLETED",
        currentBidCents: 0,
        targetBidCents: 100,
      }),
    ).toBe(false);
  });

  it("leaves abandoned checkout unlisted", () => {
    expect(
      completedPaymentActivatesListing({
        bidStatus: "PENDING",
        currentBidCents: 0,
        targetBidCents: 100,
      }),
    ).toBe(true);
    expect(isLiveOnLeaderboard(0)).toBe(false);
  });

  it("only allows a higher bid on a live listing", () => {
    expect(quoteCheckout({ currentBidCents: 500, requestedTargetCents: 500 })).toEqual({
      ok: false,
      error: "bid_too_low",
    });
    expect(quoteCheckout({ currentBidCents: 500, requestedTargetCents: 600 })).toEqual({
      ok: true,
      targetBidCents: 600,
      chargeAmountCents: 100,
    });
  });

  it("keeps GitHub and LinkedIn as two listings", () => {
    const github = parseProfileUrl("https://github.com/octocat")!;
    const linkedin = parseProfileUrl("https://linkedin.com/in/octocat")!;
    expect(github.canonicalUrl).toBe("https://github.com/octocat");
    expect(linkedin.canonicalUrl).toBe("https://www.linkedin.com/in/octocat");
    expect(github.username).not.toBe(linkedin.username);
  });
});
