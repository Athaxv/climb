import { checkoutIdFromSession, createDodoCheckout } from "./checkout";
import { createDodoClient, isUsableDodoApiKey, isUsableDodoProductId, isUsableDodoWebhookKey, resolveDodoEnvironment } from "./client";
import { mapDodoPayment } from "./payment";
import { refundDodoPayment } from "./refunds";
import type { DodoSdkLike } from "./types";
import { stringRecord, unwrapDodoWebhook } from "./webhook";
import type {
  CreateCheckoutInput,
  PaymentProvider,
  RetrievedCheckout,
  RetrievedPayment,
  VerifyWebhookInput,
} from "../../types";

export type DodoPaymentProviderOptions = {
  client?: DodoSdkLike;
  productId?: string;
  configured?: boolean;
};

export function createDodoPaymentProvider(options: DodoPaymentProviderOptions = {}): PaymentProvider {
  const productId = options.productId ?? process.env.DODO_BID_PRODUCT_ID ?? "";
  const apiKey = process.env.DODO_PAYMENTS_API_KEY;
  const envReady = isUsableDodoApiKey(apiKey) && isUsableDodoProductId(productId);
  const client = options.client ?? (envReady ? createDodoClient() : null);
  const configured = options.configured ?? Boolean(client && isUsableDodoProductId(productId));

  return {
    name: "dodo",
    isConfigured: () => Boolean(configured && client && productId),
    async createCheckout(input: CreateCheckoutInput) {
      if (!client) {
        throw new Error("Dodo client is not configured");
      }
      return createDodoCheckout(client, productId, input);
    },
    async verifyWebhook(input: VerifyWebhookInput) {
      if (!client) {
        throw new Error("Dodo client is not configured");
      }
      return unwrapDodoWebhook(client, input);
    },
    async getCheckout(checkoutId: string): Promise<RetrievedCheckout> {
      if (!client) {
        throw new Error("Dodo client is not configured");
      }
      const session = await client.checkoutSessions.retrieve(checkoutId);
      return {
        checkoutId: checkoutIdFromSession(session, checkoutId) || session.id || checkoutId,
        paymentStatus: session.payment_status ?? "unknown",
        paymentId: session.payment_id ?? undefined,
        customerEmail: session.customer_email ?? session.customer?.email ?? undefined,
        metadata: stringRecord(session.metadata),
      };
    },
    async getPayment(paymentId: string): Promise<RetrievedPayment> {
      if (!client) {
        throw new Error("Dodo client is not configured");
      }
      return mapDodoPayment(await client.payments.retrieve(paymentId));
    },
    async refund(paymentId: string) {
      if (!client) {
        throw new Error("Dodo client is not configured");
      }
      await refundDodoPayment(client, paymentId);
    },
  };
}

export {
  createDodoClient,
  isUsableDodoApiKey,
  isUsableDodoProductId,
  isUsableDodoWebhookKey,
  resolveDodoEnvironment,
};
