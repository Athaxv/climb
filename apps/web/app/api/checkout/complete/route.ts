import { prisma } from "@climb/db";
import { getPaymentProvider } from "@climb/payments";
import { sessionCookie, signSession } from "@/lib/auth/session";
import { appUrl } from "@/lib/http";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("session_id");
  const username = url.searchParams.get("username");
  const origin = appUrl();
  const fallback = `${origin}${username ? `/p/${username}` : "/"}`;

  const provider = getPaymentProvider();
  if (!sessionId || !username || !provider.isConfigured()) {
    return Response.redirect(`${fallback}?paid=1`);
  }

  try {
    const checkout = await provider.getCheckout(sessionId);
    const status = (checkout.paymentStatus || "").toLowerCase();
    const failed = ["failed", "cancelled", "canceled", "unpaid", "not_paid"].includes(status);
    if (failed) {
      return Response.redirect(`${origin}/p/${username}`);
    }

    const metadataUsername = checkout.metadata.username;
    if (metadataUsername && metadataUsername !== username) {
      return Response.redirect(`${origin}/p/${username}`);
    }

    const email = checkout.customerEmail;
    const person = await prisma.person.findUnique({ where: { username } });
    const token = email ? await signSession({ userId: person?.userId || "guest", email }) : null;
    const headers = new Headers({ Location: `${origin}/p/${username}?paid=1` });
    if (token) headers.append("Set-Cookie", sessionCookie(token));
    return new Response(null, { status: 303, headers });
  } catch {
    return Response.redirect(fallback);
  }
}
