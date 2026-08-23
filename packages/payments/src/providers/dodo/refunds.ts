import { PaymentProviderError } from "../../types";
import type { DodoSdkLike } from "./types";

export async function refundDodoPayment(client: DodoSdkLike, paymentId: string) {
  try {
    await client.refunds.create({ payment_id: paymentId });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (/already been refunded|already_refunded|refund.*exist/i.test(message)) return;
    throw new PaymentProviderError(message || "Refund failed", "refund_failed");
  }
}
