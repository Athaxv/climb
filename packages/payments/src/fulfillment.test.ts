import { describe, expect, it } from "vitest";
import { planFulfillment, quantityFromChargeCents } from "./fulfillment";

describe("quantityFromChargeCents", () => {
  it("maps whole-dollar charges onto a $1 product cart", () => {
    expect(quantityFromChargeCents(500)).toBe(5);
    expect(quantityFromChargeCents(100)).toBe(1);
  });

  it("rejects fractional-dollar charges", () => {
    expect(() => quantityFromChargeCents(150)).toThrow(/whole-dollar/);
    expect(() => quantityFromChargeCents(0)).toThrow(/whole-dollar/);
  });
});

describe("planFulfillment", () => {
  const pending = {
    bidStatus: "PENDING" as const,
    storedAmountCents: 500,
    paidAmountCents: 500,
    decision: { ok: true as const, newBidCents: 500, kind: "joined" as const },
  };

  it("applies a matching succeeded payment", () => {
    expect(planFulfillment({ eventType: "payment.succeeded", ...pending })).toEqual({
      action: "apply",
      kind: "joined",
      newBidCents: 500,
    });
  });

  it("refunds when webhook amount does not match stored charge", () => {
    expect(
      planFulfillment({
        ...pending,
        eventType: "payment.succeeded",
        paidAmountCents: 400,
      }),
    ).toEqual({ action: "refund", reason: "amount_mismatch" });
  });

  it("refunds a stale concurrent target and does not apply", () => {
    expect(
      planFulfillment({
        ...pending,
        eventType: "payment.succeeded",
        decision: { ok: false, reason: "stale" },
      }),
    ).toEqual({ action: "refund", reason: "stale" });
  });

  it("marks failed and cancelled events without applying rank", () => {
    expect(planFulfillment({ ...pending, eventType: "payment.failed" })).toEqual({ action: "fail" });
    expect(planFulfillment({ ...pending, eventType: "payment.cancelled" })).toEqual({ action: "cancel" });
  });

  it("skips an already-processed bid", () => {
    expect(
      planFulfillment({
        ...pending,
        eventType: "payment.succeeded",
        bidStatus: "COMPLETED",
      }),
    ).toEqual({ action: "skip_bid" });
  });

  it("ignores unrelated webhook types", () => {
    expect(planFulfillment({ ...pending, eventType: "ignored" })).toEqual({ action: "ignore" });
  });
});
