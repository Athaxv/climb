import { quantityFromChargeCents } from "../../fulfillment";
import { PaymentProviderError, type CheckoutResult, type CreateCheckoutInput } from "../../types";
import type { DodoSdkLike } from "./types";

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
    const session = await client.checkoutSessions.create({
      product_cart: [{ product_id: productId, quantity }],
      customer: {
        email: input.customerEmail,
        name: input.customerName,
      },
      return_url: input.returnUrl,
      metadata: {
        ...input.metadata,
        chargeAmountCents: String(input.amountCents),
      },
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
