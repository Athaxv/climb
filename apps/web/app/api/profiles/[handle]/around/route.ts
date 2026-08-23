import { getClientIp, jsonError } from "@/lib/http";
import { rateLimit } from "@/lib/rate-limit";
import { profileAround } from "@/services/leaderboard.service";

type Context = { params: Promise<{ handle: string }> };

export async function GET(request: Request, context: Context) {
  try {
    const ip = getClientIp(request);
    const limited = await rateLimit({ key: `rl:around:${ip}`, limit: 60, windowSeconds: 60 });
    if (!limited.ok) {
      return Response.json({ error: "rate_limited", message: "Too many requests." }, { status: 429 });
    }
    const { handle } = await context.params;
    const url = new URL(request.url);
    const radius = Number.parseInt(url.searchParams.get("radius") ?? "2", 10);
    const result = await profileAround(handle, Number.isFinite(radius) ? Math.min(5, Math.max(1, radius)) : 2);
    if (!result) {
      return Response.json({ error: "not_found", message: "Profile not found." }, { status: 404 });
    }
    return Response.json(result);
  } catch (error) {
    return jsonError(error);
  }
}
