import { trackEvent } from "@/lib/analytics";

export async function POST() {
  await trackEvent("share_clicked");
  return Response.json({ ok: true });
}
