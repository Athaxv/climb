const FAILED = new Set(["failed", "cancelled", "canceled", "unpaid", "not_paid"]);
const PENDING = new Set([
  "pending",
  "processing",
  "requires_payment",
  "requires_payment_method",
  "requires_customer_action",
  "requires_merchant_action",
  "requires_confirmation",
  "requires_capture",
  "not_yet_paid",
]);
const PAID = new Set([
  "succeeded",
  "paid",
  "complete",
  "completed",
  "success",
  "processed",
  "partially_captured",
  "partially_captured_and_capturable",
]);

export function checkoutLooksFailed(status: string | undefined): boolean {
  return FAILED.has((status || "").toLowerCase());
}

export function checkoutLooksPaid(status: string | undefined): boolean {
  const normalized = (status || "").toLowerCase();
  if (FAILED.has(normalized) || PENDING.has(normalized)) return false;
  if (PAID.has(normalized)) return true;
  return !normalized || normalized === "unknown";
}
