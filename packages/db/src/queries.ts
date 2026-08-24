import { calculateTrendingScores, LEADERBOARD_PAGE_SIZE } from "@climb/ranking";
import { prisma } from "./client";
import { Prisma } from "./generated/client";

const listInclude = {
  category: { select: { slug: true, name: true } },
  socialLinks: { select: { type: true } },
  personSkills: { include: { skill: { select: { name: true, slug: true } } } },
} as const;

const detailInclude = {
  category: true,
  socialLinks: true,
  personSkills: { include: { skill: true } },
  snapshots: {
    orderBy: { createdAt: "desc" as const },
    take: 8,
  },
} as const;

const liveWhere = { currentBid: { gt: 0 } };

function snapshotRankAt(snapshots: { rank: number; createdAt: Date }[], hoursAgo: number) {
  const cutoff = Date.now() - hoursAgo * 60 * 60 * 1000;
  const match = snapshots.find((snapshot) => snapshot.createdAt.getTime() <= cutoff);
  return match?.rank ?? null;
}

function snapshotBidAt(snapshots: { bid: number; createdAt: Date }[], hoursAgo: number) {
  const cutoff = Date.now() - hoursAgo * 60 * 60 * 1000;
  const match = snapshots.find((snapshot) => snapshot.createdAt.getTime() <= cutoff);
  return match?.bid ?? null;
}

function skillNames(person: { personSkills: { skill: { name: string; slug: string } }[] }) {
  return [...person.personSkills]
    .sort((a, b) => a.skill.name.localeCompare(b.skill.name))
    .map((row) => row.skill.name);
}

function leaderboardWhere(options?: { categorySlug?: string; q?: string }): Prisma.PersonWhereInput {
  const needle = options?.q?.trim();
  return {
    ...liveWhere,
    ...(options?.categorySlug ? { category: { slug: options.categorySlug } } : {}),
    ...(needle && needle.length >= 2
      ? {
          OR: [
            { fullName: { contains: needle, mode: "insensitive" } },
            { username: { contains: needle, mode: "insensitive" } },
            {
              personSkills: {
                some: {
                  skill: {
                    OR: [
                      { name: { contains: needle, mode: "insensitive" } },
                      { slug: { contains: needle, mode: "insensitive" } },
                    ],
                  },
                },
              },
            },
          ],
        }
      : {}),
  };
}

type SnapshotRow = { rank: number; bid: number; createdAt: Date };

function movementFields(currentBid: number, snapshots: SnapshotRow[], rank: number) {
  const rank24h = snapshotRankAt(snapshots, 24);
  const rank7d = snapshotRankAt(snapshots, 24 * 7);
  const bid24h = snapshotBidAt(snapshots, 24);
  return {
    rank,
    rank24h,
    rank7d,
    movement24h: rank24h == null ? 0 : rank24h - rank,
    movement7d: rank7d == null ? 0 : rank7d - rank,
    bidGrowth24h: bid24h == null ? 0 : currentBid - bid24h,
  };
}

function toBoardPerson<
  T extends {
    id: string;
    username: string;
    fullName: string;
    headline: string;
    imageUrl: string | null;
    currentBid: number;
    verified: boolean;
    totalViews?: number;
    category: { slug: string; name: string };
    socialLinks: { type: string }[];
    personSkills: { skill: { name: string; slug: string } }[];
    snapshots?: SnapshotRow[];
  },
>(person: T, rank: number) {
  const { personSkills: _skills, snapshots, ...serializable } = person;
  return {
    ...serializable,
    skills: skillNames(person),
    socialLinks: person.socialLinks.map((link) => ({ type: link.type })),
    category: { slug: person.category.slug, name: person.category.name },
    totalViews: person.totalViews ?? 0,
    ...movementFields(person.currentBid, snapshots ?? [], rank),
  };
}

export async function getCategories() {
  return prisma.category.findMany({
    orderBy: { sortOrder: "asc" },
    include: {
      _count: { select: { people: { where: liveWhere } } },
    },
  });
}

export async function getBoardHero() {
  const [top, stats] = await Promise.all([
    prisma.person.findFirst({
      where: liveWhere,
      orderBy: [{ currentBid: "desc" }, { currentBidAt: "asc" }, { id: "asc" }],
      select: { fullName: true, currentBid: true },
    }),
    getSiteStats(),
  ]);
  return {
    topName: top?.fullName ?? null,
    topBid: top?.currentBid ?? null,
    people: stats.people,
    visitors: stats.visitors,
  };
}

export async function getLeaderboard(options?: {
  categorySlug?: string;
  take?: number;
  page?: number;
  pageSize?: number;
  q?: string;
  snapshots?: boolean;
}) {
  const pageSize = Math.min(100, Math.max(1, options?.pageSize ?? options?.take ?? LEADERBOARD_PAGE_SIZE));
  const page = Math.max(1, options?.page ?? 1);
  const skip = options?.take && !options?.page ? 0 : (page - 1) * pageSize;
  const take = options?.take && !options?.page ? options.take : pageSize;
  const where = leaderboardWhere(options);
  const withSnapshots = Boolean(options?.snapshots);

  const [total, people] = await Promise.all([
    prisma.person.count({ where }),
    withSnapshots
      ? prisma.person.findMany({
          where,
          orderBy: [{ currentBid: "desc" }, { currentBidAt: "asc" }, { id: "asc" }],
          skip,
          take,
          include: detailInclude,
        })
      : prisma.person.findMany({
          where,
          orderBy: [{ currentBid: "desc" }, { currentBidAt: "asc" }, { id: "asc" }],
          skip,
          take,
          include: listInclude,
        }),
  ]);

  return {
    people: people.map((person, index) => toBoardPerson(person, skip + index + 1)),
    total,
    page,
    pageSize: take,
  };
}

export type LeaderboardPerson = Awaited<ReturnType<typeof getLeaderboard>>["people"][number];

export async function getPersonByUsername(username: string) {
  const person = await prisma.person.findUnique({
    where: { username },
    include: detailInclude,
  });
  if (!person) return null;

  const rank = person.currentBid > 0 ? await getProfileRank(person.id, person) : 0;
  const { snapshots, personSkills: _skills, ...serializable } = person;
  return {
    ...serializable,
    skills: skillNames(person),
    ...movementFields(person.currentBid, snapshots, rank),
  };
}

export async function getProfileRank(
  personId: string,
  known?: { id: string; currentBid: number; currentBidAt: Date },
) {
  const person = known ?? (await prisma.person.findUnique({ where: { id: personId } }));
  if (!person || person.currentBid <= 0) return 0;

  const ahead = await prisma.person.count({
    where: {
      currentBid: { gt: 0 },
      OR: [
        { currentBid: { gt: person.currentBid } },
        {
          currentBid: person.currentBid,
          currentBidAt: { lt: person.currentBidAt },
        },
        {
          currentBid: person.currentBid,
          currentBidAt: person.currentBidAt,
          id: { lt: person.id },
        },
      ],
    },
  });

  return ahead + 1;
}

export async function getProfilesAroundRank(personId: string, radius = 2) {
  const person = await prisma.person.findUnique({ where: { id: personId } });
  if (!person || person.currentBid <= 0) {
    return { rank: 0, people: [] as LeaderboardPerson[] };
  }

  const rank = await getProfileRank(person.id, person);
  const skip = Math.max(0, rank - 1 - radius);
  const take = radius * 2 + 1;
  const window = await prisma.person.findMany({
    where: liveWhere,
    orderBy: [{ currentBid: "desc" }, { currentBidAt: "asc" }, { id: "asc" }],
    skip,
    take,
    include: listInclude,
  });

  const people = window.map((row, index) => toBoardPerson(row, skip + index + 1));
  return { rank, people };
}

export async function getLatestActivity(take = 6) {
  const items = await prisma.activity.findMany({
    orderBy: { createdAt: "desc" },
    take,
    include: {
      person: {
        select: {
          username: true,
          fullName: true,
          imageUrl: true,
        },
      },
    },
  });

  return items.map((item) => ({
    id: item.id,
    amount: item.amount,
    createdAt: item.createdAt,
    username: item.person.username,
    fullName: item.person.fullName,
    imageUrl: item.person.imageUrl,
    rank: item.rank,
    type: item.type,
  }));
}

export async function getTrending(take = 5) {
  const { people: board } = await getLeaderboard({ take: 50, page: 1, pageSize: 50, snapshots: true });
  const scores = calculateTrendingScores(
    board.map((person) => ({
      recentViews: person.totalViews,
      bidGrowth: Math.max(0, person.bidGrowth24h),
      rankImprovement: Math.max(0, person.movement24h),
    })),
  );

  return board
    .map((person, index) => ({ ...person, trendingScore: scores[index] ?? 0 }))
    .sort((a, b) => b.trendingScore - a.trendingScore)
    .slice(0, take);
}

export async function getRising(take = 5) {
  const { people: board } = await getLeaderboard({ take: 50, page: 1, pageSize: 50, snapshots: true });
  return [...board]
    .filter((person) => person.movement7d > 0)
    .sort((a, b) => b.movement7d - a.movement7d)
    .slice(0, take);
}

export async function getSiteStats() {
  const [people, views] = await Promise.all([
    prisma.person.count({ where: liveWhere }),
    prisma.person.aggregate({ where: liveWhere, _sum: { totalViews: true } }),
  ]);
  return { people, visitors: views._sum.totalViews ?? 0 };
}
