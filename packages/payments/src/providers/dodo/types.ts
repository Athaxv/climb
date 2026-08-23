export type DodoEnvironment = "test_mode" | "live_mode";

export type DodoCheckoutSessionCreateBody = {
  product_cart: Array<{ product_id: string; quantity: number }>;
  customer: { email: string; name?: string };
  return_url: string;
  metadata: Record<string, string>;
};

export type DodoCheckoutSession = {
  session_id?: string;
  id?: string;
  checkout_url?: string | null;
  payment_status?: string;
  customer?: { email?: string; name?: string };
  metadata?: Record<string, unknown>;
};

export type DodoWebhookHeaders = {
  "webhook-id": string;
  "webhook-signature": string;
  "webhook-timestamp": string;
};

export type DodoSdkLike = {
  checkoutSessions: {
    create: (body: DodoCheckoutSessionCreateBody) => Promise<DodoCheckoutSession>;
    retrieve: (id: string) => Promise<DodoCheckoutSession>;
  };
  webhooks: {
    unwrap: (body: string, opts: { headers: DodoWebhookHeaders }) => unknown;
  };
  refunds: {
    create: (body: { payment_id: string }) => Promise<unknown>;
  };
};
