import { prisma } from "@climb/db";
import { sessionCookie, signSession } from "@/lib/auth/session";
import { applyPaidCheckoutReturn } from "@/services/payment.service";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const origin = url.origin;
  const username = url.searchParams.get("username");
  const sessionId = url.searchParams.get("session_id") || url.searchParams.get("checkout_session_id");
  const climb = `${origin}/climb`;
  const paidClimb = `${origin}/climb?paid=1`;

  let outcome: "paid" | "failed" | "open" = "open";
  let email: string | undefined;
  try {
    const result = await applyPaidCheckoutReturn({ username, sessionId });
    outcome = result.outcome;
    email = result.email;
  } catch {
    outcome = "open";
  }

  const location = outcome === "paid" ? paidClimb : climb;
  const person = username ? await prisma.person.findUnique({ where: { username } }) : null;
  const token = email ? await signSession({ userId: person?.userId || "guest", email }) : null;
  const headers = new Headers({ Location: location });
  if (token && outcome !== "failed") headers.append("Set-Cookie", sessionCookie(token));
  return new Response(null, { status: 303, headers });
}
