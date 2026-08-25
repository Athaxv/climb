import { describe, expect, it, vi } from "vitest";
import { InvalidWebhookSignatureError } from "../../types";
import { createDodoPaymentProvider } from "./index";
import type { DodoSdkLike } from "./types";

function mockClient(overrides: Partial<DodoSdkLike> = {}): DodoSdkLike & {
  checkoutSessions: DodoSdkLike["checkoutSessions"] & { create: ReturnType<typeof vi.fn>; retrieve: ReturnType<typeof vi.fn> };
  payments: DodoSdkLike["payments"] & { retrieve: ReturnType<typeof vi.fn> };
  webhooks: { unwrap: ReturnType<typeof vi.fn> };
  refunds: { create: ReturnType<typeof vi.fn> };
} {
  return {
    checkoutSessions: {
      create: vi.fn(),
      retrieve: vi.fn(),
    },
    payments: {
      retrieve: vi.fn(),
    },
    webhooks: {
      unwrap: vi.fn(),
    },
    refunds: {
      create: vi.fn(),
    },
    ...overrides,
  } as never;
}

describe("DodoPaymentProvider", () => {
  it("creates a hosted checkout with $1 product quantity", async () => {
    const client = mockClient();
    client.checkoutSessions.create.mockResolvedValue({
      session_id: "cks_1",
      checkout_url: "https://checkout.dodopayments.com/session/cks_1",
    });
    const provider = createDodoPaymentProvider({ client, productId: "pdt_bid", configured: true });

    const result = await provider.createCheckout({
      amountCents: 500,
      currency: "usd",
      customerEmail: "maya@example.com",
      customerName: "Maya Chen",
      returnUrl: "http://localhost:3000/api/checkout/complete?username=maya-chen",
      metadata: { bidId: "bid_1", personId: "p_1", targetBidCents: "500" },
    });

    expect(result).toEqual({
      checkoutId: "cks_1",
      checkoutUrl: "https://checkout.dodopayments.com/session/cks_1",
    });
    expect(client.checkoutSessions.create).toHaveBeenCalledWith({
      product_cart: [{ product_id: "pdt_bid", quantity: 5 }],
      customer: { email: "maya@example.com", name: "Maya Chen" },
      return_url: "http://localhost:3000/api/checkout/complete?username=maya-chen",
      billing_currency: "USD",
      billing_address: {
        country: "US",
        city: "San Francisco",
        state: "CA",
        street: "123 Market St",
        zipcode: "94102",
      },
      feature_flags: { allow_currency_selection: false, redirect_immediately: true },
      metadata: {
        bidId: "bid_1",
        personId: "p_1",
        targetBidCents: "500",
        chargeAmountCents: "500",
      },
    });
  });

  it("omits customer when Climb has no email so Dodo can collect it", async () => {
    const client = mockClient();
    client.checkoutSessions.create.mockResolvedValue({
      session_id: "cks_2",
      checkout_url: "https://checkout.dodopayments.com/session/cks_2",
    });
    const provider = createDodoPaymentProvider({ client, productId: "pdt_bid", configured: true });

    await provider.createCheckout({
      amountCents: 500,
      currency: "usd",
      customerName: "Empty Board Probe",
      returnUrl: "http://localhost:3000/api/checkout/complete?username=github-empty-board-probe",
      metadata: { bidId: "bid_2" },
    });

    expect(client.checkoutSessions.create).toHaveBeenCalledWith(
      expect.objectContaining({
        product_cart: [{ product_id: "pdt_bid", quantity: 5 }],
        return_url: "http://localhost:3000/api/checkout/complete?username=github-empty-board-probe",
      }),
    );
    expect(client.checkoutSessions.create.mock.calls[0]?.[0]).not.toHaveProperty("customer");
  });

  it("wraps Dodo API failures", async () => {
    const client = mockClient();
    client.checkoutSessions.create.mockRejectedValue(new Error("upstream down"));
    const provider = createDodoPaymentProvider({ client, productId: "pdt_bid", configured: true });

    await expect(
      provider.createCheckout({
        amountCents: 500,
        currency: "usd",
        customerEmail: "maya@example.com",
        returnUrl: "http://localhost:3000/done",
        metadata: {},
      }),
    ).rejects.toMatchObject({ code: "checkout_failed" });
  });

  it("maps succeeded, failed, and cancelled events from unwrap", async () => {
    const client = mockClient();
    const provider = createDodoPaymentProvider({ client, productId: "pdt_bid", configured: true });
    const headers = {
      webhookId: "evt_abc",
      webhookSignature: "v1,sig",
      webhookTimestamp: "1704067200",
    };

    client.webhooks.unwrap.mockReturnValue({
      type: "payment.succeeded",
      data: {
        payment_id: "pay_1",
        total_amount: 500,
        customer: { email: "maya@example.com" },
        metadata: { bidId: "bid_1" },
      },
    });
    await expect(provider.verifyWebhook({ rawBody: "{}", headers })).resolves.toMatchObject({
      type: "payment.succeeded",
      eventId: "evt_abc",
      paymentId: "pay_1",
      amountCents: 500,
      metadata: { bidId: "bid_1" },
    });

    client.webhooks.unwrap.mockReturnValue({ type: "payment.failed", data: { payment_id: "pay_2" } });
    await expect(provider.verifyWebhook({ rawBody: "{}", headers: { ...headers, webhookId: "evt_fail" } })).resolves.toMatchObject({
      type: "payment.failed",
      eventId: "evt_fail",
    });

    client.webhooks.unwrap.mockReturnValue({ type: "payment.cancelled", data: { payment_id: "pay_3" } });
    await expect(provider.verifyWebhook({ rawBody: "{}", headers: { ...headers, webhookId: "evt_cancel" } })).resolves.toMatchObject({
      type: "payment.cancelled",
    });
  });

  it("rejects invalid signatures", async () => {
    const client = mockClient();
    client.webhooks.unwrap.mockImplementation(() => {
      throw new Error("bad sig");
    });
    const provider = createDodoPaymentProvider({ client, productId: "pdt_bid", configured: true });

    await expect(
      provider.verifyWebhook({
        rawBody: "{}",
        headers: { webhookId: "evt", webhookSignature: "nope", webhookTimestamp: "1" },
      }),
    ).rejects.toBeInstanceOf(InvalidWebhookSignatureError);
  });

  it("issues a refund by payment id", async () => {
    const client = mockClient();
    client.refunds.create.mockResolvedValue({ refund_id: "r_1" });
    const provider = createDodoPaymentProvider({ client, productId: "pdt_bid", configured: true });
    await provider.refund("pay_1");
    expect(client.refunds.create).toHaveBeenCalledWith({ payment_id: "pay_1" });
  });

  it("maps retrieve payment_status and customer_email from the session status payload", async () => {
    const client = mockClient();
    client.checkoutSessions.retrieve.mockResolvedValue({
      id: "cks_1",
      payment_status: "succeeded",
      payment_id: "pay_0Nm6RtD0syTrmvjLRVjcs",
      customer_email: "payer@example.com",
    });
    const provider = createDodoPaymentProvider({ client, productId: "pdt_bid", configured: true });
    await expect(provider.getCheckout("cks_1")).resolves.toEqual({
      checkoutId: "cks_1",
      paymentStatus: "succeeded",
      paymentId: "pay_0Nm6RtD0syTrmvjLRVjcs",
      customerEmail: "payer@example.com",
      metadata: {},
    });
  });

  it("retrieves a payment by pay_ id including checkout session and bid metadata", async () => {
    const client = mockClient();
    client.payments.retrieve.mockResolvedValue({
      payment_id: "pay_abc",
      status: "succeeded",
      total_amount: 100,
      checkout_session_id: "cks_1",
      customer: { email: "payer@example.com" },
      metadata: { bidId: "bid_1", personId: "p_1", chargeAmountCents: "100" },
    });
    const provider = createDodoPaymentProvider({ client, productId: "pdt_bid", configured: true });
    await expect(provider.getPayment("pay_abc")).resolves.toEqual({
      paymentId: "pay_abc",
      paymentStatus: "succeeded",
      checkoutId: "cks_1",
      customerEmail: "payer@example.com",
      customerName: undefined,
      amountCents: 100,
      metadata: { bidId: "bid_1", personId: "p_1", chargeAmountCents: "100" },
    });
  });
});
