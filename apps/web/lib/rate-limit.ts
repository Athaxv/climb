import { redisCache } from "@/lib/redis";

export async function rateLimit(options: {
  key: string;
  limit: number;
  windowSeconds: number;
}): Promise<{ ok: boolean; remaining: number }> {
  const count = await redisCache.incrWithTtl(options.key, options.windowSeconds);
  if (count === 0) {
    return { ok: true, remaining: options.limit };
  }
  if (count > options.limit) {
    return { ok: false, remaining: 0 };
  }
  return { ok: true, remaining: options.limit - count };
}
