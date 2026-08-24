import { jsonError, getClientIp } from "@/lib/http";
import { rateLimit } from "@/lib/rate-limit";
import { trackEvent } from "@/lib/analytics";
import { listLeaderboard } from "@/services/leaderboard.service";

export async function GET(request: Request) {
  try {
    const ip = getClientIp(request);
    const limited = await rateLimit({ key: `rl:leaderboard:${ip}`, limit: 60, windowSeconds: 60 });
    if (!limited.ok) {
      return Response.json({ error: "rate_limited", message: "Too many requests." }, { status: 429 });
    }

    const url = new URL(request.url);
    const category = url.searchParams.get("category") || undefined;
    const q = url.searchParams.get("q") || undefined;
    const pageRaw = Number.parseInt(url.searchParams.get("page") ?? "1", 10);
    const page = Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1;
    const board = await listLeaderboard({
      categorySlug: category === "all" ? undefined : category,
      q,
      page,
    });
    if (!q) {
      void trackEvent(category ? "category_view" : "leaderboard_view", { category });
    }
    return Response.json(board);
  } catch (error) {
    return jsonError(error);
  }
}