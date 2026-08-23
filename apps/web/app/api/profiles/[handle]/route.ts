import { getClientIp, jsonError } from "@/lib/http";
import { rateLimit } from "@/lib/rate-limit";
import { getCachedProfile } from "@/services/leaderboard.service";

type Context = { params: Promise<{ handle: string }> };

export async function GET(request: Request, context: Context) {
  try {
    const ip = getClientIp(request);
    const limited = await rateLimit({ key: `rl:profile:${ip}`, limit: 60, windowSeconds: 60 });
    if (!limited.ok) {
      return Response.json({ error: "rate_limited", message: "Too many requests." }, { status: 429 });
    }
    const { handle } = await context.params;
    const person = await getCachedProfile(handle);
    if (!person) {
      return Response.json({ error: "not_found", message: "Profile not found." }, { status: 404 });
    }
    return Response.json({ person });
  } catch (error) {
    return jsonError(error);
  }
}
