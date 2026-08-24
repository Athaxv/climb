import { Prisma, prisma, parseSkillList } from "@climb/db";
import { parseProfileUrl } from "@climb/ranking";
import { AppError } from "@/lib/http";

function isUniqueViolation(error: unknown) {
  return error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002";
}

async function allocateUsername(base: string) {
  const root = base.slice(0, 40);
  const existing = await prisma.person.findUnique({ where: { username: root } });
  if (!existing) return root;
  for (let i = 0; i < 8; i++) {
    const candidate = `${root.slice(0, 32)}-${Math.random().toString(36).slice(2, 8)}`;
    const taken = await prisma.person.findUnique({ where: { username: candidate } });
    if (!taken) return candidate;
  }
  return `${root.slice(0, 24)}-${crypto.randomUUID().slice(0, 8)}`;
}

export async function upsertProfile(input: {
  identity: string;
  category: string;
  name?: string;
  headline?: string;
  skills?: string;
}) {
  const parsed = parseProfileUrl(input.identity);
  if (!parsed) {
    throw new AppError("invalid_identity", "Paste a LinkedIn, GitHub, X, or website URL.");
  }

  const category = await prisma.category.findUnique({ where: { slug: input.category } });
  if (!category) {
    throw new AppError("invalid_category", "Unknown category.");
  }

  const fullName = input.name?.trim() || parsed.fullName;
  const headline = input.headline?.trim() || `${fullName} on Climb`;

  const existingLink = await prisma.socialLink.findUnique({
    where: { type_url: { type: parsed.type, url: parsed.canonicalUrl } },
    include: { person: { include: { category: true } } },
  });
  if (existingLink) {
    return { person: existingLink.person, created: false as const };
  }

  const username = await allocateUsername(parsed.username);
  try {
    const person = await prisma.person.create({
      data: {
        username,
        fullName,
        headline,
        profileUrl: parsed.canonicalUrl,
        categoryId: category.id,
        currentBid: 0,
        socialLinks: {
          create: { type: parsed.type, url: parsed.canonicalUrl },
        },
      },
      include: { category: true },
    });
    await attachSkills(person.id, input.skills);
    return { person, created: true as const };
  } catch (error) {
    if (!isUniqueViolation(error)) throw error;
    const raced = await prisma.socialLink.findUnique({
      where: { type_url: { type: parsed.type, url: parsed.canonicalUrl } },
      include: { person: { include: { category: true } } },
    });
    if (raced) return { person: raced.person, created: false as const };
    const retryUsername = await allocateUsername(parsed.username);
    const person = await prisma.person.create({
      data: {
        username: retryUsername,
        fullName,
        headline,
        profileUrl: parsed.canonicalUrl,
        categoryId: category.id,
        currentBid: 0,
        socialLinks: {
          create: { type: parsed.type, url: parsed.canonicalUrl },
        },
      },
      include: { category: true },
    });
    await attachSkills(person.id, input.skills);
    return { person, created: true as const };
  }
}

async function attachSkills(personId: string, raw?: string) {
  for (const skill of parseSkillList(raw)) {
    const row = await prisma.skill.upsert({
      where: { slug: skill.slug },
      create: { name: skill.name, slug: skill.slug },
      update: { name: skill.name },
    });
    await prisma.personSkill.upsert({
      where: { personId_skillId: { personId, skillId: row.id } },
      create: { personId, skillId: row.id },
      update: {},
    });
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
