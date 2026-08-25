import { trackEvent } from "@/lib/analytics";
import { getClientIp, jsonError, originFromRequest } from "@/lib/http";
import { rateLimit } from "@/lib/rate-limit";
import { checkoutSchema } from "@/lib/validation/schemas";
import { createCheckout } from "@/services/bid.service";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limited = await rateLimit({ key: `rl:checkout:${ip}`, limit: 10, windowSeconds: 60 });
    if (!limited.ok) {
      return Response.json({ error: "rate_limited", message: "Too many requests." }, { status: 429 });
    }

    const body = checkoutSchema.parse(await request.json());
    void trackEvent("bid_started", { identity: body.identity });
    const checkout = await createCheckout({
      ...body,
      origin: originFromRequest(request),
    });
    return Response.json(checkout);
  } catch (error) {
    return jsonError(error);
  }
}
