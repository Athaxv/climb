import { assignRanks, calculateTrendingScores } from "@climb/ranking";
import { prisma } from "./client";

const personInclude = {
  category: true,
  socialLinks: true,
  snapshots: {
    orderBy: { createdAt: "desc" as const },
    take: 8,
  },
} as const;

export type LeaderboardPerson = Awaited<ReturnType<typeof getLeaderboard>>[number];

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

export async function getCategories() {
  return prisma.category.findMany({
    orderBy: { name: "asc" },
    include: {
      _count: { select: { people: { where: liveWhere } } },
    },
  });
}

export async function getLeaderboard(options?: {
  categorySlug?: string;
  take?: number;
  q?: string;
}) {
  const needle = options?.q?.trim();
  const people = await prisma.person.findMany({
    where: {
      ...liveWhere,
      ...(options?.categorySlug ? { category: { slug: options.categorySlug } } : {}),
      ...(needle && needle.length >= 2
        ? {
            OR: [
              { fullName: { contains: needle, mode: "insensitive" } },
              { username: { contains: needle, mode: "insensitive" } },
            ],
          }
        : {}),
    },
    orderBy: [{ currentBid: "desc" }, { currentBidAt: "asc" }, { id: "asc" }],
    take: options?.take ?? 50,
    include: personInclude,
  });

  const ranked = assignRanks(
    people.map((person) => ({
      ...person,
      currentBidCents: person.currentBid,
    })),
  );

  return ranked.map((person) => {
    const { snapshots, currentBidCents: _cents, ...serializable } = person;
    const rank24h = snapshotRankAt(snapshots, 24);
    const rank7d = snapshotRankAt(snapshots, 24 * 7);
    const bid24h = snapshotBidAt(snapshots, 24);

    return {
      ...serializable,
      currentBid: person.currentBid,
      rank24h,
      rank7d,
      movement24h: rank24h == null ? 0 : rank24h - person.rank,
      movement7d: rank7d == null ? 0 : rank7d - person.rank,
      bidGrowth24h: bid24h == null ? 0 : person.currentBid - bid24h,
    };
  });
}

export async function getPersonByUsername(username: string) {
  const person = await prisma.person.findUnique({
    where: { username },
    include: personInclude,
  });
  if (!person) return null;

  const rank = person.currentBid > 0 ? await getProfileRank(person.id) : 0;
  const { snapshots, ...serializable } = person;
  const rank24h = snapshotRankAt(snapshots, 24);
  const rank7d = snapshotRankAt(snapshots, 24 * 7);
  const bid24h = snapshotBidAt(snapshots, 24);

  return {
    ...serializable,
    rank,
    rank24h,
    rank7d,
    movement24h: rank24h == null ? 0 : rank24h - rank,
    movement7d: rank7d == null ? 0 : rank7d - rank,
    bidGrowth24h: bid24h == null ? 0 : person.currentBid - bid24h,
  };
}

export async function getProfileRank(personId: string) {
  const person = await prisma.person.findUnique({ where: { id: personId } });
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
    return { rank: 0, people: [] as Awaited<ReturnType<typeof getLeaderboard>> };
  }

  const rank = await getProfileRank(person.id);
  const skip = Math.max(0, rank - 1 - radius);
  const take = radius * 2 + 1;
  const window = await prisma.person.findMany({
    where: liveWhere,
    orderBy: [{ currentBid: "desc" }, { currentBidAt: "asc" }, { id: "asc" }],
    skip,
    take,
    include: personInclude,
  });

  const people = window.map((row, index) => {
    const { snapshots: _snapshots, ...serializable } = row;
    return {
      ...serializable,
      rank: skip + index + 1,
      rank24h: null as number | null,
      rank7d: null as number | null,
      movement24h: 0,
      movement7d: 0,
      bidGrowth24h: 0,
    };
  });

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
    rank: item.rank,
    type: item.type,
  }));
}

export async function getTrending(take = 5) {
  const board = await getLeaderboard({ take: 50 });
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
  const board = await getLeaderboard({ take: 50 });
  return [...board]
    .filter((person) => person.movement7d > 0)
    .sort((a, b) => b.movement7d - a.movement7d)
    .slice(0, take);
}

export async function getSiteStats() {
  const people = await prisma.person.count({ where: liveWhere });
  return { people };
}
