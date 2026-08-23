import {
  getLatestActivity,
  getLeaderboard,
  getPersonByUsername,
  getProfileRank,
  getProfilesAroundRank,
} from "@climb/db";
import { LEADERBOARD_CACHE_TTL_SECONDS, leaderboardCacheKey, profileCacheKey } from "@climb/ranking";
import { cacheGetJson, cacheSetJson } from "@/lib/redis";

export async function listLeaderboard(options?: { categorySlug?: string; q?: string; take?: number }) {
  if (options?.q && options.q.trim().length >= 2) {
    const matches = await getLeaderboard({
      categorySlug: options.categorySlug,
      q: options.q,
      take: options.take ?? 6,
    });
    return Promise.all(
      matches.map(async (person) => ({
        ...person,
        rank: await getProfileRank(person.id),
      })),
    );
  }

  const key = leaderboardCacheKey(options?.categorySlug);
  const cached = await cacheGetJson<Awaited<ReturnType<typeof getLeaderboard>>>(key);
  if (cached) return cached;
  const people = await getLeaderboard({
    categorySlug: options?.categorySlug,
    take: options?.take,
  });
  await cacheSetJson(key, people, LEADERBOARD_CACHE_TTL_SECONDS);
  return people;
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
