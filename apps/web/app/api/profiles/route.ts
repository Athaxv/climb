import { trackEvent } from "@/lib/analytics";
import { getClientIp, jsonError } from "@/lib/http";
import { rateLimit } from "@/lib/rate-limit";
import { createProfileSchema } from "@/lib/validation/schemas";
import { upsertProfile } from "@/services/profile.service";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limited = await rateLimit({ key: `rl:profiles:${ip}`, limit: 5, windowSeconds: 60 });
    if (!limited.ok) {
      return Response.json({ error: "rate_limited", message: "Too many requests." }, { status: 429 });
    }

    const body = createProfileSchema.parse(await request.json());
    const { person, created } = await upsertProfile(body);
    if (created) await trackEvent("profile_created", { username: person.username });
    return Response.json({
      created,
      person: {
        id: person.id,
        username: person.username,
        fullName: person.fullName,
        headline: person.headline,
        currentBid: person.currentBid,
        category: person.category.slug,
      },
    });
  } catch (error) {
    return jsonError(error);
  }
}
