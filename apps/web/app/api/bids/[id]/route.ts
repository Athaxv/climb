import { getClientIp, jsonError } from "@/lib/http";
import { rateLimit } from "@/lib/rate-limit";
import { getBid } from "@/services/bid.service";

type Context = { params: Promise<{ id: string }> };

export async function GET(request: Request, context: Context) {
  try {
    const ip = getClientIp(request);
    const limited = await rateLimit({ key: `rl:bid:${ip}`, limit: 60, windowSeconds: 60 });
    if (!limited.ok) {
      return Response.json({ error: "rate_limited", message: "Too many requests." }, { status: 429 });
    }
    const { id } = await context.params;
    const bid = await getBid(id);
    if (!bid) {
      return Response.json({ error: "not_found", message: "Bid not found." }, { status: 404 });
    }
    return Response.json({
      id: bid.id,
      status: bid.status,
      targetBidCents: bid.targetBidCents,
      chargeAmountCents: bid.chargeAmountCents,
      username: bid.person.username,
    });
  } catch (error) {
    return jsonError(error);
  }
}
