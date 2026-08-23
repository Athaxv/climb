import { cacheKeysForBid } from "@climb/ranking";
import { redisCache } from "@/lib/redis";

export async function invalidateListingCache(username: string, categorySlug?: string | null) {
  await redisCache.del(cacheKeysForBid(username, categorySlug));
}
