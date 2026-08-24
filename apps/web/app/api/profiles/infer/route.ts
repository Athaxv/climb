import { getClientIp, jsonError } from "@/lib/http";
import { rateLimit } from "@/lib/rate-limit";
import { inferProfileSchema } from "@/lib/validation/schemas";
import { inferProfile } from "@/services/profile-infer";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limited = await rateLimit({ key: `rl:infer:${ip}`, limit: 20, windowSeconds: 60 });
    if (!limited.ok) {
      return Response.json({ error: "rate_limited", message: "Too many requests." }, { status: 429 });
    }
    const body = inferProfileSchema.parse(await request.json());
    const preview = await inferProfile(body.identity);
    return Response.json(preview);
  } catch (error) {
    return jsonError(error);
  }
}
