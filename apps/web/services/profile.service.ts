import { prisma } from "@climb/db";
import { parseIdentity } from "@climb/ranking";
import { AppError } from "@/lib/http";

export async function upsertProfile(input: {
  identity: string;
  category: string;
  name?: string;
  headline?: string;
}) {
  const parsed = parseIdentity(input.identity);
  if (!parsed) {
    throw new AppError("invalid_identity", "Enter a name, @handle, or URL.");
  }

  const category = await prisma.category.findUnique({ where: { slug: input.category } });
  if (!category) {
    throw new AppError("invalid_category", "Unknown category.");
  }

  const fullName = input.name?.trim() || parsed.fullName;
  const headline = input.headline?.trim() || `${fullName} on Climb`;

  const existing = await prisma.person.findUnique({
    where: { username: parsed.username },
    include: { category: true },
  });
  if (existing) {
    return { person: existing, created: false as const };
  }

  try {
    const person = await prisma.person.create({
      data: {
        username: parsed.username,
        fullName,
        headline,
        profileUrl: parsed.profileUrl,
        categoryId: category.id,
        currentBid: 0,
      },
      include: { category: true },
    });
    return { person, created: true as const };
  } catch (error) {
    const existingAfter = await prisma.person.findUnique({
      where: { username: parsed.username },
      include: { category: true },
    });
    if (existingAfter) return { person: existingAfter, created: false as const };
    throw error;
  }
}

export async function recordProfileView(personId: string, ip: string, userAgent: string) {
  const { createHash } = await import("node:crypto");
  const secret = process.env.AUTH_SECRET || "climb";
  const ipHash = createHash("sha256").update(`${ip}|${secret}`).digest("hex").slice(0, 32);
  const userAgentHash = createHash("sha256").update(userAgent).digest("hex").slice(0, 32);
  const cutoff = new Date(Date.now() - 6 * 60 * 60 * 1000);
  const recent = await prisma.profileView.findFirst({
    where: { personId, ipHash, createdAt: { gt: cutoff } },
  });
  if (recent) return;
  await prisma.profileView.create({ data: { personId, ipHash, userAgentHash } });
  await prisma.person.update({
    where: { id: personId },
    data: { totalViews: { increment: 1 } },
  });
}
