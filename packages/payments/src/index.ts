import { createDodoPaymentProvider } from "./providers/dodo";
import type { PaymentProvider } from "./types";

export type { BidDecision, BidLifecycleStatus, FulfillmentPlan } from "./fulfillment";
export { amountsMatch, planFulfillment, quantityFromChargeCents, quotedChargeCentsFromMetadata } from "./fulfillment";
export { checkoutLooksFailed, checkoutLooksPaid } from "./checkout-status";
export {
  parseCheckoutReturnQuery,
  returnEventId,
  shouldClaimPaymentEvent,
  waitForSettledPaymentStatus,
} from "./checkout-return";
export type { CheckoutReturnQuery } from "./checkout-return";
export { claimThenFulfill, runInMemoryTransaction } from "./idempotency";
export {
  createDodoClient,
  createDodoPaymentProvider,
  isUsableDodoApiKey,
  isUsableDodoProductId,
  isUsableDodoWebhookKey,
  resolveDodoEnvironment,
} from "./providers/dodo";
export { mapDodoWebhookEvent, unwrapDodoWebhook } from "./providers/dodo/webhook";
export type { DodoSdkLike } from "./providers/dodo/types";
export type {
  CheckoutResult,
  CreateCheckoutInput,
  PaymentEvent,
  PaymentEventType,
  PaymentProvider,
  RetrievedCheckout,
  RetrievedPayment,
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
