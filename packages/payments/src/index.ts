import { createDodoPaymentProvider } from "./providers/dodo";
import type { PaymentProvider } from "./types";

export type { BidDecision, BidLifecycleStatus, FulfillmentPlan } from "./fulfillment";
export { amountsMatch, planFulfillment, quantityFromChargeCents } from "./fulfillment";
export { claimThenFulfill, runInMemoryTransaction } from "./idempotency";
export { createDodoClient, createDodoPaymentProvider, resolveDodoEnvironment } from "./providers/dodo";
export { mapDodoWebhookEvent, unwrapDodoWebhook } from "./providers/dodo/webhook";
export type { DodoSdkLike } from "./providers/dodo/types";
export type {
  CheckoutResult,
  CreateCheckoutInput,
  PaymentEvent,
  PaymentEventType,
  PaymentProvider,
  RetrievedCheckout,
  VerifyWebhookInput,
} from "./types";
export { InvalidWebhookSignatureError, PaymentProviderError } from "./types";

let cached: PaymentProvider | null = null;

export function getPaymentProvider(): PaymentProvider {
  if (!cached || !cached.isConfigured()) {
    cached = createDodoPaymentProvider();
  }
  return cached;
}

export function resetPaymentProviderForTests() {
  cached = null;
}
