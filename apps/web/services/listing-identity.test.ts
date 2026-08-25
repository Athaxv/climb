import { describe, expect, it } from "vitest";
import { decideSuccessfulBid, parseProfileUrl, quoteCheckout } from "@climb/ranking";

describe("listing identity", () => {
  it("treats one canonical URL as one listing that can only be raised once live", () => {
    const first = parseProfileUrl("https://github.com/octocat")!;
    const again = parseProfileUrl("https://github.com/octocat/")!;
    expect(first.canonicalUrl).toBe(again.canonicalUrl);

    expect(quoteCheckout({ currentBidCents: 1300, requestedTargetCents: 1300 })).toEqual({
      ok: false,
      error: "bid_too_low",
    });
    expect(quoteCheckout({ currentBidCents: 1300, requestedTargetCents: 1400 })).toEqual({
      ok: true,
      targetBidCents: 1400,
      chargeAmountCents: 100,
    });
    expect(decideSuccessfulBid({ currentBidCents: 1300, targetBidCents: 1400 })).toEqual({
      ok: true,
      newBidCents: 1400,
      kind: "raised",
    });
  });

  it("keeps different profile URLs as independent listings for the same payer", () => {
    const github = parseProfileUrl("https://github.com/octocat")!;
    const linkedin = parseProfileUrl("https://www.linkedin.com/in/octocat")!;
    expect(github.canonicalUrl).not.toBe(linkedin.canonicalUrl);
    expect(github.username).not.toBe(linkedin.username);

    const githubAfterPay = quoteCheckout({ currentBidCents: 500 });
    const linkedinJoin = quoteCheckout({ currentBidCents: 0, requestedTargetCents: 100 });
    expect(githubAfterPay).toEqual({ ok: true, targetBidCents: 600, chargeAmountCents: 100 });
    expect(linkedinJoin).toEqual({ ok: true, targetBidCents: 100, chargeAmountCents: 100 });
  });

  it("reuses an unpaid draft of the same URL instead of quoting a second new seat", () => {
    expect(quoteCheckout({ currentBidCents: 0 })).toEqual({
      ok: true,
      targetBidCents: 100,
      chargeAmountCents: 100,
    });
    expect(quoteCheckout({ currentBidCents: 0, requestedTargetCents: 100 })).toEqual({
      ok: true,
      targetBidCents: 100,
      chargeAmountCents: 100,
    });
  });
});
