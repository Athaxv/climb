import { quantityFromChargeCents } from "../../fulfillment";
import { PaymentProviderError, type CheckoutResult, type CreateCheckoutInput } from "../../types";
import { resolveDodoEnvironment } from "./client";
import type { DodoSdkLike } from "./types";

const TEST_USD_BILLING = {
  country: "US",
  city: "San Francisco",
  state: "CA",
  street: "123 Market St",
  zipcode: "94102",
} as const;

export async function createDodoCheckout(
  client: DodoSdkLike,
  productId: string,
  input: CreateCheckoutInput,
): Promise<CheckoutResult> {
  if (!productId) {
    throw new PaymentProviderError("DODO_BID_PRODUCT_ID is not configured", "not_configured");
  }

  let quantity: number;
  try {
    quantity = quantityFromChargeCents(input.amountCents);
  } catch {
    throw new PaymentProviderError(
      "Charge must be a positive whole-dollar amount in cents",
      "invalid_amount",
    );
  }

  try {
    const email = input.customerEmail?.trim();
    const session = await client.checkoutSessions.create({
      product_cart: [{ product_id: productId, quantity }],
      ...(email
        ? {
            customer: {
              email,
              name: input.customerName,
            },
          }
        : {}),
      return_url: input.returnUrl,
      billing_currency: "USD",
      feature_flags: { allow_currency_selection: false, redirect_immediately: true },
      metadata: {
        ...input.metadata,
        chargeAmountCents: String(input.amountCents),
      },
      ...(resolveDodoEnvironment() === "test_mode"
        ? { billing_address: { ...TEST_USD_BILLING } }
        : {}),
    });

    const checkoutId = session.session_id ?? session.id;
    const checkoutUrl = session.checkout_url;
    if (!checkoutId || !checkoutUrl) {
      throw new PaymentProviderError("Dodo did not return a hosted checkout URL", "checkout_failed");
    }

    return { checkoutId, checkoutUrl };
  } catch (error) {
    if (error instanceof PaymentProviderError) throw error;
    const message = error instanceof Error ? error.message : "Checkout failed";
    throw new PaymentProviderError(message, "checkout_failed");
  }
}

export function checkoutIdFromSession(session: { session_id?: string; id?: string }, fallback: string) {
  return session.session_id ?? session.id ?? fallback;
}
