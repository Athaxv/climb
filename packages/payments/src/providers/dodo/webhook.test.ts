import { describe, expect, it } from "vitest";
import { mapDodoWebhookEvent } from "./webhook";

describe("mapDodoWebhookEvent", () => {
  it("maps payment.succeeded with checkout_session_id and bidId metadata", () => {
    const event = mapDodoWebhookEvent(
      {
        type: "payment.succeeded",
        data: {
          payment_id: "pay_1",
          total_amount: 100,
          checkout_session_id: "cks_1",
          customer: { email: "maya@example.com" },
          metadata: { bidId: "bid_1", personId: "p_1", chargeAmountCents: "100" },
        },
      },
      "evt_1",
    );
    expect(event).toMatchObject({
      type: "payment.succeeded",
      eventId: "evt_1",
      paymentId: "pay_1",
      checkoutId: "cks_1",
      amountCents: 100,
      metadata: { bidId: "bid_1", personId: "p_1", chargeAmountCents: "100" },
    });
  });

  it("treats a bare payment object with succeeded status as payment.succeeded", () => {
    const event = mapDodoWebhookEvent(
      {
        payload_type: "Payment",
        payment_id: "pay_2",
        status: "succeeded",
        checkout_session_id: "cks_2",
        metadata: { bidId: "bid_2" },
      },
      "evt_2",
    );
    expect(event.type).toBe("payment.succeeded");
    expect(event.paymentId).toBe("pay_2");
    expect(event.checkoutId).toBe("cks_2");
    expect(event.metadata.bidId).toBe("bid_2");
  });

  it("reads checkout_id when checkout_session_id is absent", () => {
    const event = mapDodoWebhookEvent(
      {
        type: "payment.succeeded",
        data: { payment_id: "pay_3", checkout_id: "cks_3" },
      },
      "evt_3",
    );
    expect(event.checkoutId).toBe("cks_3");
  });

  it("does not treat unrelated events as successful payments", () => {
    const event = mapDodoWebhookEvent({ type: "refund.succeeded", data: { payment_id: "pay_4" } }, "evt_4");
    expect(event.type).toBe("ignored");
  });
});
