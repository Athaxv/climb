export type PaymentEventType = "payment.succeeded" | "payment.failed" | "payment.cancelled";

export type CreateCheckoutInput = {
  amountCents: number;
  currency: string;
  customerEmail: string;
  customerName?: string;
  returnUrl: string;
  metadata: Record<string, string>;
};

export type CheckoutResult = {
  checkoutId: string;
  checkoutUrl: string;
};

export type RetrievedCheckout = {
  checkoutId: string;
  paymentStatus: string;
  customerEmail?: string;
  metadata: Record<string, string>;
};

export type VerifyWebhookInput = {
  rawBody: string;
  headers: {
    webhookId: string;
    webhookSignature: string;
    webhookTimestamp: string;
  };
};

export type PaymentEvent = {
  type: PaymentEventType | "ignored";
  eventId: string;
  paymentId?: string;
  checkoutId?: string;
  amountCents?: number;
  currency?: string;
  customerEmail?: string;
  customerName?: string;
  metadata: Record<string, string>;
};

export interface PaymentProvider {
  readonly name: "dodo" | "mock";
  isConfigured(): boolean;
  createCheckout(input: CreateCheckoutInput): Promise<CheckoutResult>;
  verifyWebhook(input: VerifyWebhookInput): Promise<PaymentEvent>;
  getCheckout(checkoutId: string): Promise<RetrievedCheckout>;
  refund(paymentId: string): Promise<void>;
}

export class PaymentProviderError extends Error {
  constructor(
    message: string,
    public readonly code: "not_configured" | "invalid_amount" | "checkout_failed" | "refund_failed",
  ) {
    super(message);
    this.name = "PaymentProviderError";
  }
}

export class InvalidWebhookSignatureError extends Error {
  constructor(message = "Invalid webhook signature") {
    super(message);
    this.name = "InvalidWebhookSignatureError";
  }
}
