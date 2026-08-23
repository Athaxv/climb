import { InvalidWebhookSignatureError, getPaymentProvider } from "@climb/payments";
import { jsonError } from "@/lib/http";
import { handlePaymentEvent } from "@/services/payment.service";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const provider = getPaymentProvider();
  if (!provider.isConfigured()) {
    return Response.json({ error: "webhook_not_configured" }, { status: 503 });
  }

  const rawBody = await request.text();
  let event;
  try {
    event = await provider.verifyWebhook({
      rawBody,
      headers: {
        webhookId: request.headers.get("webhook-id") ?? "",
        webhookSignature: request.headers.get("webhook-signature") ?? "",
        webhookTimestamp: request.headers.get("webhook-timestamp") ?? "",
      },
    });
  } catch (error) {
    if (error instanceof InvalidWebhookSignatureError) {
      return Response.json({ error: "invalid_signature" }, { status: 401 });
    }
    throw error;
  }

  try {
    await handlePaymentEvent(event);
    return Response.json({ received: true });
  } catch (error) {
    return jsonError(error);
  }
}
