import { Prisma } from "@climb/db";
import { PaymentProviderError } from "@climb/payments";
import { ZodError } from "zod";

export class AppError extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly status = 400,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function jsonError(error: unknown) {
  if (error instanceof AppError) {
    return Response.json({ error: error.code, message: error.message }, { status: error.status });
  }
  if (error instanceof PaymentProviderError) {
    const status = error.code === "not_configured" ? 503 : 502;
    return Response.json(
      {
        error: error.code,
        message:
          error.code === "not_configured"
            ? "Payments are not configured. Set DODO_PAYMENTS_API_KEY and DODO_BID_PRODUCT_ID in apps/web/.env, then restart Next."
            : "Could not start checkout.",
      },
      { status },
    );
  }
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    console.error(error);
    return Response.json(
      {
        error: "database_error",
        message:
          error.message.includes("does not exist in the current database")
            ? "The database client is stale. Stop the Next dev server, run pnpm db:generate, then start it again."
            : "Could not save that checkout. Try again.",
      },
      { status: 500 },
    );
  }
  if (error instanceof ZodError) {
    return Response.json({ error: "invalid_request", message: "Invalid request." }, { status: 400 });
  }
  console.error(error);
  return Response.json({ error: "internal_error", message: "Something went wrong." }, { status: 500 });
}

export function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

export function appUrl() {
  return process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "http://localhost:3000";
}
