import { after, NextResponse } from "next/server";
import { getClientIp, safeExternalHttpUrl } from "@/lib/http";
import { rateLimit } from "@/lib/rate-limit";
import { trackEvent } from "@/lib/analytics";
import { getCachedProfile } from "@/services/leaderboard.service";
import { recordProfileView } from "@/services/profile.service";

export const dynamic = "force-dynamic";

type Context = { params: Promise<{ username: string }> };

export async function GET(request: Request, context: Context) {
  const ip = getClientIp(request);
  const limited = await rateLimit({ key: `rl:go:${ip}`, limit: 60, windowSeconds: 60 });
  if (!limited.ok) {
    return NextResponse.redirect(new URL("/climb", request.url));
  }

  const { username } = await context.params;
  const person = await getCachedProfile(username);
  if (!person) {
    return NextResponse.redirect(new URL("/climb", request.url));
  }

  const dest = safeExternalHttpUrl(person.profileUrl);
  if (!dest) {
    return NextResponse.redirect(new URL(`/p/${person.username}`, request.url));
  }

  const userAgent = request.headers.get("user-agent") || "unknown";
  after(() => {
    void recordProfileView(person.id, ip, userAgent);
    void trackEvent("profile_view", { username: person.username, outbound: true });
  });

  const response = NextResponse.redirect(dest, 302);
  response.headers.set("Cache-Control", "no-store");
  return response;
}
