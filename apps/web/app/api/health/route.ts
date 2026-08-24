import { prisma } from "@climb/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json({ ok: false }, { status: 503 });
  }
}
