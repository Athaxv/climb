import { trackEvent } from "@/lib/analytics";
import { sessionFromRequest } from "@/lib/auth/session";
import { getClientIp, jsonError } from "@/lib/http";
import { rateLimit } from "@/lib/rate-limit";
import { createProfileSchema } from "@/lib/validation/schemas";
import { usableOwnerUserId } from "@/services/listing-merge-core";
import { inferProfile } from "@/services/profile-infer";
import { upsertProfile } from "@/services/profile.service";
import { isCategorySlug } from "@climb/db";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limited = await rateLimit({ key: `rl:profiles:${ip}`, limit: 5, windowSeconds: 60 });
    if (!limited.ok) {
      return Response.json({ error: "rate_limited", message: "Too many requests." }, { status: 429 });
    }

    const body = createProfileSchema.parse(await request.json());
    let category = body.category?.trim() ?? "";
    let name = body.name;
    let headline = body.headline;
    let skills = body.skills;
    let imageUrl: string | undefined;
    let bio: string | undefined;
    let location: string | undefined;
    if (!category || !isCategorySlug(category)) {
      const inferred = await inferProfile(body.identity);
      category = inferred.categorySlug;
      name = name?.trim() || inferred.fullName;
      headline = headline?.trim() || inferred.headline;
      skills = skills?.trim() || inferred.skills.join(", ");
      imageUrl = inferred.imageUrl;
      bio = inferred.bio;
      location = inferred.location;
    } else {
      imageUrl = body.imageUrl;
      bio = body.bio;
      location = body.location;
    }
    const session = await sessionFromRequest(request);
    const { person, created } = await upsertProfile({
      identity: body.identity,
      category,
      name,
      headline,
      skills,
      imageUrl,
      bio,
      location,
      ownerUserId: usableOwnerUserId(session?.userId),
    });
    if (created) void trackEvent("profile_created", { username: person.username });
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
