import { getPersonByUsername, getProfileRank } from "@climb/db";
import { getClientIp, jsonError } from "@/lib/http";
import { rateLimit } from "@/lib/rate-limit";

type Context = { params: Promise<{ handle: string }> };

export async function GET(request: Request, context: Context) {
  try {
    const ip = getClientIp(request);
    const limited = await rateLimit({ key: `rl:rank:${ip}`, limit: 60, windowSeconds: 60 });
    if (!limited.ok) {
      return Response.json({ error: "rate_limited", message: "Too many requests." }, { status: 429 });
    }
    const { handle } = await context.params;
    const person = await getPersonByUsername(handle);
    if (!person) {
      return Response.json({ error: "not_found", message: "Profile not found." }, { status: 404 });
    }
    const rank = await getProfileRank(person.id);
    return Response.json({ rank, currentBid: person.currentBid, username: person.username });
  } catch (error) {
    return jsonError(error);
  }
}
