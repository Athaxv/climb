import { checkoutLooksFailed, checkoutLooksPaid } from "./checkout-status";
import type { PaymentEvent } from "./types";

export type CheckoutReturnQuery = {
  username: string;
  bidId: string;
  sessionId: string;
  paymentId: string;
  status: string;
};

function firstSegment(value: string): string {
  return value.split("?")[0]?.trim() ?? "";
}

function pickPaymentId(...candidates: Array<string | null | undefined>): string {
  for (const candidate of candidates) {
    const value = candidate?.trim() ?? "";
    if (value.startsWith("pay_")) return value;
    const salvaged = value.match(/payment_id=([A-Za-z0-9_]+)/)?.[1];
    if (salvaged?.startsWith("pay_")) return salvaged;
  }
  return "";
}

function pickCheckoutId(...candidates: Array<string | null | undefined>): string {
  for (const candidate of candidates) {
    const value = firstSegment(candidate?.trim() ?? "");
    if (value.startsWith("cks_")) return value;
  }
  return "";
}

/**
 * Dodo's hosted checkout always appends `payment_id` + `status` to return_url.
 * It does not send `session_id`. If return_url already had `?username=`, some
 * redirects replace the query string entirely.
 */
export function parseCheckoutReturnQuery(input: {
  username?: string | null;
  bidId?: string | null;
  sessionId?: string | null;
  session_id?: string | null;
  checkout_session_id?: string | null;
  paymentId?: string | null;
  payment_id?: string | null;
  status?: string | null;
}): CheckoutReturnQuery {
  const usernameRaw = (input.username ?? "").trim();
  const sessionRaw = (input.sessionId ?? input.session_id ?? input.checkout_session_id ?? "").trim();

  return {
    username: firstSegment(usernameRaw),
    bidId: firstSegment((input.bidId ?? "").trim()),
    sessionId: pickCheckoutId(sessionRaw, input.checkout_session_id),
    paymentId: pickPaymentId(input.paymentId, input.payment_id, sessionRaw, usernameRaw),
    status: (input.status ?? "").trim(),
  };
}

export function shouldClaimPaymentEvent(type: PaymentEvent["type"]): boolean {
  return type !== "ignored";
}

export function returnEventId(input: { checkoutId?: string | null; paymentId?: string | null }): string {
  if (input.checkoutId) return `return:${input.checkoutId}`;
  if (input.paymentId) return `return:${input.paymentId}`;
  return "return:unknown";
}

export async function waitForSettledPaymentStatus<T extends { paymentStatus: string }>(opts: {
  initial: T;
  read: () => Promise<T>;
  attempts?: number;
  delayMs?: number;
  sleep?: (ms: number) => Promise<void>;
}): Promise<T> {
  const attempts = opts.attempts ?? 5;
  const delayMs = opts.delayMs ?? 300;
  const sleep = opts.sleep ?? ((ms: number) => new Promise((resolve) => setTimeout(resolve, ms)));
  let current = opts.initial;
  for (let i = 1; i < attempts; i++) {
    if (checkoutLooksPaid(current.paymentStatus) || checkoutLooksFailed(current.paymentStatus)) {
      return current;
    }
    await sleep(delayMs);
    current = await opts.read();
  }
  return current;
}
