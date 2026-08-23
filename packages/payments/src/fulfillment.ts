import type { PaymentEvent, PaymentEventType } from "./types";

export type BidLifecycleStatus = "PENDING" | "COMPLETED" | "FAILED" | "EXPIRED" | "REFUNDED";

export type BidDecision =
  | { ok: true; newBidCents: number; kind: "joined" | "raised" }
  | { ok: false; reason: "stale" };

export type FulfillmentPlan =
  | { action: "ignore" }
  | { action: "skip_bid" }
  | { action: "fail" }
  | { action: "cancel" }
  | { action: "refund"; reason: "amount_mismatch" | "stale" }
  | { action: "apply"; kind: "joined" | "raised"; newBidCents: number };

export function amountsMatch(storedAmountCents: number, paidAmountCents: number | undefined): boolean {
  return paidAmountCents === storedAmountCents;
}

export function planFulfillment(input: {
  eventType: PaymentEvent["type"] | PaymentEventType;
  bidStatus: BidLifecycleStatus | null;
  storedAmountCents: number;
  paidAmountCents: number | undefined;
  decision: BidDecision | null;
}): FulfillmentPlan {
  if (input.eventType === "ignored") return { action: "ignore" };
  if (!input.bidStatus) return { action: "skip_bid" };
  if (input.bidStatus !== "PENDING") return { action: "skip_bid" };
  if (input.eventType === "payment.failed") return { action: "fail" };
  if (input.eventType === "payment.cancelled") return { action: "cancel" };

  if (!amountsMatch(input.storedAmountCents, input.paidAmountCents)) {
    return { action: "refund", reason: "amount_mismatch" };
  }
  if (!input.decision) return { action: "skip_bid" };
  if (!input.decision.ok) return { action: "refund", reason: "stale" };
  return {
    action: "apply",
    kind: input.decision.kind,
    newBidCents: input.decision.newBidCents,
  };
}

/** Climb charges are whole dollars; Dodo product_cart quantity is dollars of a $1 product. */
export function quantityFromChargeCents(chargeAmountCents: number): number {
  if (!Number.isInteger(chargeAmountCents) || chargeAmountCents <= 0 || chargeAmountCents % 100 !== 0) {
    throw new Error("Charge must be a positive whole-dollar amount in cents");
  }
  return chargeAmountCents / 100;
}
