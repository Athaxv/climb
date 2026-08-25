import { describe, expect, it, vi } from "vitest";
import {
  parseCheckoutReturnQuery,
  returnEventId,
  shouldClaimPaymentEvent,
  waitForSettledPaymentStatus,
} from "./checkout-return";

describe("parseCheckoutReturnQuery", () => {
  it("reads Dodo's documented return_url query without session_id or username", () => {
    expect(
      parseCheckoutReturnQuery({
        payment_id: "pay_abc",
        status: "succeeded",
      }),
    ).toMatchObject({
      paymentId: "pay_abc",
      status: "succeeded",
      sessionId: "",
      username: "",
      bidId: "",
    });
  });

  it("keeps username and bidId when Dodo appends payment_id with &", () => {
    expect(
      parseCheckoutReturnQuery({
        username: "github-octocat",
        bidId: "bid_1",
        payment_id: "pay_abc",
        status: "succeeded",
      }),
    ).toEqual({
      username: "github-octocat",
      bidId: "bid_1",
      sessionId: "",
      paymentId: "pay_abc",
      status: "succeeded",
    });
  });

  it("salvages payment_id when a second ? is concatenated onto username", () => {
    expect(
      parseCheckoutReturnQuery({
        username: "github-octocat?payment_id=pay_abc",
      }),
    ).toMatchObject({
      username: "github-octocat",
      paymentId: "pay_abc",
    });
  });

  it("treats a pay_ token in session_id as a payment id, not a checkout session", () => {
    expect(
      parseCheckoutReturnQuery({
        session_id: "pay_abc",
      }),
    ).toEqual({
      username: "",
      bidId: "",
      sessionId: "",
      paymentId: "pay_abc",
      status: "",
    });
  });

  it("accepts cks_ session ids", () => {
    expect(parseCheckoutReturnQuery({ session_id: "cks_abc" }).sessionId).toBe("cks_abc");
    expect(parseCheckoutReturnQuery({ checkout_session_id: "cks_abc" }).sessionId).toBe("cks_abc");
  });
});

describe("shouldClaimPaymentEvent", () => {
  it("does not claim ignored events so a later mapping can still apply", () => {
    expect(shouldClaimPaymentEvent("ignored")).toBe(false);
    expect(shouldClaimPaymentEvent("payment.succeeded")).toBe(true);
    expect(shouldClaimPaymentEvent("payment.failed")).toBe(true);
  });
});

describe("returnEventId", () => {
  it("prefers the checkout session id", () => {
    expect(returnEventId({ checkoutId: "cks_1", paymentId: "pay_1" })).toBe("return:cks_1");
    expect(returnEventId({ paymentId: "pay_1" })).toBe("return:pay_1");
  });
});

describe("waitForSettledPaymentStatus", () => {
  it("returns immediately when already paid", async () => {
    const read = vi.fn();
    const result = await waitForSettledPaymentStatus({
      initial: { paymentStatus: "succeeded" },
      read,
      sleep: vi.fn(),
    });
    expect(result.paymentStatus).toBe("succeeded");
    expect(read).not.toHaveBeenCalled();
  });

  it("polls while processing then applies succeeded", async () => {
    const read = vi
      .fn()
      .mockResolvedValueOnce({ paymentStatus: "processing" })
      .mockResolvedValueOnce({ paymentStatus: "succeeded" });
    const sleep = vi.fn(async () => undefined);
    const result = await waitForSettledPaymentStatus({
      initial: { paymentStatus: "processing" },
      read,
      attempts: 5,
      sleep,
    });
    expect(result.paymentStatus).toBe("succeeded");
    expect(read).toHaveBeenCalledTimes(2);
  });
});
