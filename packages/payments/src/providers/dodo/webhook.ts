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

export function mapDodoWebhookEvent(unwrapped: unknown, webhookId: string): PaymentEvent {
  const root = asRecord(unwrapped) ?? {};
  const type = typeof root.type === "string" ? root.type : "unknown";
  const data = asRecord(root.data) ?? {};
  const customer = asRecord(data.customer) ?? asRecord(root.customer) ?? {};
  const metadata = {
    ...stringRecord(root.metadata),
    ...stringRecord(data.metadata),
  };

  const paymentId =
    typeof data.payment_id === "string"
      ? data.payment_id
      : typeof data.id === "string" && data.id.startsWith("pay_")
        ? data.id
        : undefined;

  const checkoutId =
    typeof data.checkout_session_id === "string"
      ? data.checkout_session_id
      : typeof data.session_id === "string"
        ? data.session_id
        : metadata.checkoutId;

  const mappedType =
    type === "payment.succeeded" || type === "payment.failed" || type === "payment.cancelled"
      ? type
      : ("ignored" as const);

  return {
    type: mappedType,
    eventId: webhookId,
    paymentId,
    checkoutId,
    amountCents: readAmountCents(data),
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
