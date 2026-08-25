import { prisma } from "@climb/db";
import { parseCheckoutReturnQuery } from "@climb/payments";
import { sessionCookie, signSession } from "@/lib/auth/session";
import { applyPaidCheckoutReturn } from "@/services/payment.service";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const origin = url.origin;
  const query = parseCheckoutReturnQuery({
    username: url.searchParams.get("username"),
    bidId: url.searchParams.get("bidId") || url.searchParams.get("bid_id"),
    sessionId: url.searchParams.get("session_id") || url.searchParams.get("checkout_session_id"),
    payment_id: url.searchParams.get("payment_id"),
    status: url.searchParams.get("status"),
  });
  const climb = `${origin}/climb`;
  const paidClimb = `${origin}/climb?paid=1`;

  let outcome: "paid" | "failed" | "open" = "open";
  let email: string | undefined;
  try {
    const result = await applyPaidCheckoutReturn(query);
    outcome = result.outcome;
    email = result.email;
  } catch (error) {
    console.error("[CLIMB][DODO] checkout return failed", error);
    outcome = "open";
  }

  const location = outcome === "paid" ? paidClimb : climb;
  const normalizedEmail = email?.trim().toLowerCase();
  const user = normalizedEmail
    ? await prisma.user.findUnique({ where: { email: normalizedEmail } })
    : null;
  const person = query.username ? await prisma.person.findUnique({ where: { username: query.username } }) : null;
  const token = normalizedEmail
    ? await signSession({ userId: user?.id || person?.userId || "guest", email: normalizedEmail })
    : null;
  const headers = new Headers({ Location: location });
  if (token && outcome !== "failed") headers.append("Set-Cookie", sessionCookie(token));
  return new Response(null, { status: 303, headers });
}
