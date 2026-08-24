import { Prisma, prisma, parseSkillList } from "@climb/db";
import { parseProfileUrl } from "@climb/ranking";
import { AppError } from "@/lib/http";
import {
  planSocialLinkAttach,
  usableOwnerUserId,
  type SocialLinkPlan,
} from "@/services/listing-merge-core";
import { sanitizeHttpUrl } from "@/services/profile-infer-core";

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

function distinctBio(bio: string | undefined, headline: string) {
  if (!bio) return undefined;
  const normalize = (value: string) => value.replace(/\s+/g, " ").trim();
  if (normalize(bio) === normalize(headline)) return undefined;
  return bio;
}

type ListingMedia = {
  imageUrl?: string;
  bio?: string;
  location?: string;
};

async function fillMissingListingFields(
  person: { id: string; imageUrl: string | null; bio: string | null; location: string | null },
  media: ListingMedia,
) {
  const data: ListingMedia = {};
  if (!person.imageUrl && media.imageUrl) data.imageUrl = media.imageUrl;
  if (!person.bio && media.bio) data.bio = media.bio;
  if (!person.location && media.location) data.location = media.location;
  if (!data.imageUrl && !data.bio && !data.location) return;
  await prisma.person.update({
    where: { id: person.id },
    data,
  });
}

async function applySocialLinkPlan(personId: string, plan: SocialLinkPlan) {
  if (plan.action === "noop") return;
  if (plan.action === "create") {
    await prisma.socialLink.create({
      data: {
        personId,
        type: plan.type as "GITHUB" | "LINKEDIN" | "TWITTER" | "WEBSITE",
        url: plan.url,
      },
    });
    return;
  }
  await prisma.socialLink.update({
    where: { id: plan.linkId },
    data: { url: plan.url },
  });
}

export async function upsertProfile(input: {
  identity: string;
  category: string;
  name?: string;
  headline?: string;
  skills?: string;
  imageUrl?: string;
  bio?: string;
  location?: string;
  ownerUserId?: string;
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
  const media: ListingMedia = {
    imageUrl: sanitizeHttpUrl(input.imageUrl),
    bio: distinctBio(input.bio?.trim().slice(0, 500), headline),
    location: input.location?.trim().slice(0, 80) || undefined,
  };

  const existingLink = await prisma.socialLink.findUnique({
    where: { type_url: { type: parsed.type, url: parsed.canonicalUrl } },
    include: { person: { include: { category: true } } },
  });
  if (existingLink) {
    await fillMissingListingFields(existingLink.person, media);
    return { person: existingLink.person, created: false as const };
  }

  const ownerUserId = usableOwnerUserId(input.ownerUserId);
  if (ownerUserId) {
    const owned = await prisma.person.findUnique({
      where: { userId: ownerUserId },
      include: { category: true, socialLinks: true },
    });
    if (owned) {
      const linkPlan = planSocialLinkAttach({
        ownerLinks: owned.socialLinks,
        incoming: { type: parsed.type, url: parsed.canonicalUrl },
      });
      await applySocialLinkPlan(owned.id, linkPlan);
      await fillMissingListingFields(owned, media);
      await attachSkills(owned.id, input.skills);
      const person = await prisma.person.findUniqueOrThrow({
        where: { id: owned.id },
        include: { category: true },
      });
      return { person, created: false as const };
    }
  }

  const username = await allocateUsername(parsed.username);
  const createArgs = {
    fullName,
    headline,
    profileUrl: parsed.canonicalUrl,
    categoryId: category.id,
    ...media,
  };
  try {
    const person = await prisma.person.create({
      data: {
        username,
        ...createArgs,
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
    if (raced) {
      await fillMissingListingFields(raced.person, media);
      return { person: raced.person, created: false as const };
    }
    const retryUsername = await allocateUsername(parsed.username);
    const person = await prisma.person.create({
      data: {
        username: retryUsername,
        ...createArgs,
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
  const skills = parseSkillList(raw);
  if (skills.length === 0) return;
  await prisma.skill.createMany({
    data: skills.map((skill) => ({ name: skill.name, slug: skill.slug })),
    skipDuplicates: true,
  });
  const rows = await prisma.skill.findMany({
    where: { slug: { in: skills.map((skill) => skill.slug) } },
    select: { id: true },
  });
  if (rows.length === 0) return;
  await prisma.personSkill.createMany({
    data: rows.map((row) => ({ personId, skillId: row.id })),
    skipDuplicates: true,
  });
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
