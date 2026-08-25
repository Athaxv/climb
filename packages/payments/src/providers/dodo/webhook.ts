import { checkoutLooksFailed, checkoutLooksPaid } from "../../checkout-status";
import { InvalidWebhookSignatureError, type PaymentEvent, type VerifyWebhookInput } from "../../types";
import type { DodoSdkLike } from "./types";

function asRecord(value: unknown): Record<string, unknown> | null {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return null;
}

export function stringRecord(value: unknown): Record<string, string> {
  const rec = asRecord(value);
  if (!rec) return {};
  const out: Record<string, string> = {};
  for (const [key, entry] of Object.entries(rec)) {
    if (typeof entry === "string") out[key] = entry;
    else if (typeof entry === "number" || typeof entry === "boolean") out[key] = String(entry);
  }
  return out;
}

function readAmountCents(data: Record<string, unknown>): number | undefined {
  const raw = data.total_amount ?? data.amount;
  if (typeof raw === "number" && Number.isFinite(raw)) return raw;
  if (typeof raw === "string" && /^-?\d+$/.test(raw)) return Number.parseInt(raw, 10);
  return undefined;
}

function looksLikePaymentObject(value: Record<string, unknown>): boolean {
  return (
    typeof value.payment_id === "string" ||
    value.payload_type === "Payment" ||
    (typeof value.id === "string" && value.id.startsWith("pay_"))
  );
}

function readPaymentId(data: Record<string, unknown>): string | undefined {
  if (typeof data.payment_id === "string") return data.payment_id;
  if (typeof data.id === "string" && data.id.startsWith("pay_")) return data.id;
  return undefined;
}

function readCheckoutId(data: Record<string, unknown>, metadata: Record<string, string>): string | undefined {
  if (typeof data.checkout_session_id === "string") return data.checkout_session_id;
  if (typeof data.checkout_id === "string") return data.checkout_id;
  if (typeof data.session_id === "string" && data.session_id.startsWith("cks_")) return data.session_id;
  return metadata.checkoutId || metadata.checkout_session_id || undefined;
}

function mapWebhookType(type: string, data: Record<string, unknown>): PaymentEvent["type"] {
  const normalized = type.toLowerCase();
  if (normalized === "payment.succeeded") return "payment.succeeded";
  if (normalized === "payment.failed") return "payment.failed";
  if (normalized === "payment.cancelled" || normalized === "payment.canceled") return "payment.cancelled";
  if (normalized) return "ignored";

  const status = typeof data.status === "string" ? data.status : "";
  if (!status) return "ignored";
  if (looksLikePaymentObject(data) && checkoutLooksPaid(status) && !checkoutLooksFailed(status)) {
    return "payment.succeeded";
  }
  if (looksLikePaymentObject(data) && checkoutLooksFailed(status)) {
    return status.toLowerCase().includes("cancel") ? "payment.cancelled" : "payment.failed";
  }
  return "ignored";
}

export function mapDodoWebhookEvent(unwrapped: unknown, webhookId: string): PaymentEvent {
  const root = asRecord(unwrapped) ?? {};
  const type = typeof root.type === "string" ? root.type : "";
  const nested = asRecord(root.data);
  const data = nested ?? (looksLikePaymentObject(root) ? root : {});
  const customer = asRecord(data.customer) ?? asRecord(root.customer) ?? {};
  const metadata = {
    ...stringRecord(root.metadata),
    ...stringRecord(data.metadata),
  };

  return {
    type: mapWebhookType(type, data),
    eventId: webhookId,
    paymentId: readPaymentId(data) ?? readPaymentId(root),
    checkoutId: readCheckoutId(data, metadata) ?? readCheckoutId(root, metadata),
    amountCents: readAmountCents(data) ?? readAmountCents(root),
    currency: typeof data.currency === "string" ? data.currency : undefined,
    customerEmail: typeof customer.email === "string" ? customer.email : undefined,
    customerName: typeof customer.name === "string" ? customer.name : undefined,
    metadata,
  };
}

export async function unwrapDodoWebhook(client: DodoSdkLike, input: VerifyWebhookInput): Promise<PaymentEvent> {
  if (!input.headers.webhookId || !input.headers.webhookSignature || !input.headers.webhookTimestamp) {
    throw new InvalidWebhookSignatureError();
  }

  let unwrapped: unknown;
  try {
    unwrapped = await Promise.resolve(
      client.webhooks.unwrap(input.rawBody, {
        headers: {
          "webhook-id": input.headers.webhookId,
          "webhook-signature": input.headers.webhookSignature,
          "webhook-timestamp": input.headers.webhookTimestamp,
        },
      }),
    );
  } catch {
    throw new InvalidWebhookSignatureError();
  }

  return mapDodoWebhookEvent(unwrapped, input.headers.webhookId);
}
