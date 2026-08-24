import { SignJWT, jwtVerify } from "jose";

const COOKIE = "climb_session";

function secret() {
  const value = process.env.AUTH_SECRET;
  if (!value) return null;
  return new TextEncoder().encode(value);
}

export type SessionPayload = {
  userId: string;
  email: string;
};

export async function signSession(payload: SessionPayload) {
  const key = secret();
  if (!key) return null;
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(key);
}

export async function readSession(token: string | undefined | null): Promise<SessionPayload | null> {
  const key = secret();
  if (!key || !token) return null;
  try {
    const { payload } = await jwtVerify(token, key);
    const userId = typeof payload.userId === "string" ? payload.userId : null;
    const email = typeof payload.email === "string" ? payload.email : null;
    if (!userId || !email) return null;
    return { userId, email };
  } catch {
    return null;
  }
}

export function sessionCookie(token: string) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `${COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 30}${secure}`;
}

export const SESSION_COOKIE = COOKIE;

export function readSessionCookie(cookieHeader: string | null | undefined): string | undefined {
  if (!cookieHeader) return undefined;
  for (const part of cookieHeader.split(";")) {
    const trimmed = part.trim();
    if (trimmed.startsWith(`${COOKIE}=`)) {
      return trimmed.slice(COOKIE.length + 1);
    }
  }
  return undefined;
}

export async function sessionFromRequest(request: Request): Promise<SessionPayload | null> {
  return readSession(readSessionCookie(request.headers.get("cookie")));
}
