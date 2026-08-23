import { jsonError, getClientIp } from "@/lib/http";
import { rateLimit } from "@/lib/rate-limit";
import { listActivity } from "@/services/leaderboard.service";

export async function GET(request: Request) {
  try {
    const ip = getClientIp(request);
    const limited = await rateLimit({ key: `rl:activity:${ip}`, limit: 60, windowSeconds: 60 });
    if (!limited.ok) {
      return Response.json({ error: "rate_limited", message: "Too many requests." }, { status: 429 });
    }
    const items = await listActivity(12);
    return Response.json({ items });
  } catch (error) {
    return jsonError(error);
  }
}
