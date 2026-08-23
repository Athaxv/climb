import { prisma, type Prisma } from "@climb/db";

export async function trackEvent(name: string, payload?: Record<string, unknown>) {
  try {
    await prisma.analyticsEvent.create({
      data: {
        name,
        payload: payload ? (JSON.parse(JSON.stringify(payload)) as Prisma.InputJsonValue) : undefined,
      },
    });
  } catch {
    /* never block the product loop */
  }
}
