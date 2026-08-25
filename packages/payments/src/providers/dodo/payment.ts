import type { RetrievedPayment } from "../../types";
import type { DodoPaymentRecord } from "./types";
import { stringRecord } from "./webhook";

function asRecord(value: unknown): Record<string, unknown> | null {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return null;
}

function paymentIdOf(payment: DodoPaymentRecord): string {
  if (typeof payment.payment_id === "string" && payment.payment_id) return payment.payment_id;
  if (typeof payment.id === "string" && payment.id.startsWith("pay_")) return payment.id;
  return "";
}

export function mapDodoPayment(payment: DodoPaymentRecord): RetrievedPayment {
  const rec = asRecord(payment) ?? {};
  const customer = asRecord(rec.customer) ?? {};
  const checkoutId =
    (typeof payment.checkout_session_id === "string" && payment.checkout_session_id) ||
    (typeof payment.checkout_id === "string" && payment.checkout_id) ||
    undefined;
  const amountRaw = payment.total_amount ?? payment.amount;
  return {
    paymentId: paymentIdOf(payment),
    paymentStatus: payment.status ?? "unknown",
    checkoutId,
    customerEmail:
      (typeof payment.customer_email === "string" && payment.customer_email) ||
      (typeof customer.email === "string" ? customer.email : undefined),
    customerName: typeof customer.name === "string" ? customer.name : undefined,
    amountCents: typeof amountRaw === "number" && Number.isFinite(amountRaw) ? amountRaw : undefined,
    metadata: stringRecord(payment.metadata),
  };
}
