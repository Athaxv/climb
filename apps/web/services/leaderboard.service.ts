import {
  getBoardHero,
  getLeaderboard,
  getPersonByUsername,
  getLatestActivity,
  getProfilesAroundRank,
} from "@climb/db";
import {
  BOARD_HERO_CACHE_KEY,
  LEADERBOARD_CACHE_TTL_SECONDS,
  LEADERBOARD_PAGE_SIZE,
  leaderboardCacheKey,
  profileCacheKey,
} from "@climb/ranking";
import { cacheGetJson, cacheSetJson } from "@/lib/redis";

type Board = Awaited<ReturnType<typeof getLeaderboard>>;
type Hero = Awaited<ReturnType<typeof getBoardHero>>;

export async function listLeaderboard(options?: {
  categorySlug?: string;
  q?: string;
  page?: number;
  pageSize?: number;
  take?: number;
  snapshots?: boolean;
}) {
  const searching = Boolean(options?.q && options.q.trim().length >= 2);
  const page = Math.max(1, options?.page ?? 1);
  const pageSize = Math.min(100, Math.max(1, options?.pageSize ?? options?.take ?? LEADERBOARD_PAGE_SIZE));
  if (searching || options?.snapshots) {
    return getLeaderboard({ ...options, page, pageSize });
  }

  const key = leaderboardCacheKey(options?.categorySlug, page, pageSize);
  const cached = await cacheGetJson<Board>(key);
  if (cached) return cached;
  const result = await getLeaderboard({ ...options, page, pageSize });
  await cacheSetJson(key, result, LEADERBOARD_CACHE_TTL_SECONDS);
  return result;
}

export async function getCachedBoardHero() {
  const cached = await cacheGetJson<Hero>(BOARD_HERO_CACHE_KEY);
  if (cached) return cached;
  const hero = await getBoardHero();
  await cacheSetJson(BOARD_HERO_CACHE_KEY, hero, LEADERBOARD_CACHE_TTL_SECONDS);
  return hero;
}

export async function getCachedProfile(username: string) {
  const key = profileCacheKey(username);
  const cached = await cacheGetJson<Awaited<ReturnType<typeof getPersonByUsername>>>(key);
  if (cached) return cached;
  const person = await getPersonByUsername(username);
  if (person) await cacheSetJson(key, person, LEADERBOARD_CACHE_TTL_SECONDS);
  return person;
}

export async function listActivity(take = 6) {
  return getLatestActivity(take);
}

export async function profileAround(username: string, radius = 2) {
  const person = await getPersonByUsername(username);
  if (!person) return null;
  return getProfilesAroundRank(person.id, radius);
}
