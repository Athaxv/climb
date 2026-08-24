export type DodoEnvironment = "test_mode" | "live_mode";

export type DodoCheckoutSessionCreateBody = {
  product_cart: Array<{ product_id: string; quantity: number }>;
  customer?: { email: string; name?: string };
  return_url: string;
  metadata: Record<string, string>;
  billing_currency?: string;
  billing_address?: {
    country: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
  };
  feature_flags?: { allow_currency_selection?: boolean; redirect_immediately?: boolean };
};

export type DodoCheckoutSession = {
  session_id?: string;
  id?: string;
  checkout_url?: string | null;
  payment_status?: string | null;
  payment_id?: string | null;
  customer_email?: string | null;
  customer_name?: string | null;
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
