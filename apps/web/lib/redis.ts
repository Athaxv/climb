import Redis from "ioredis";

type RedisClient = {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, ttlSeconds?: number): Promise<void>;
  del(keys: string[]): Promise<void>;
  incr(key: string): Promise<number>;
  expire(key: string, ttlSeconds: number): Promise<void>;
};

let client: Redis | null | undefined;

function getClient(): Redis | null {
  if (client !== undefined) return client;
  const url = process.env.REDIS_URL;
  if (!url) {
    client = null;
    return client;
  }
  try {
    client = new Redis(url, {
      maxRetriesPerRequest: 1,
      enableOfflineQueue: false,
      lazyConnect: true,
    });
    client.on("error", () => {
      /* fail open */
    });
    return client;
  } catch {
    client = null;
    return client;
  }
}

async function withRedis<T>(fn: (redis: Redis) => Promise<T>): Promise<T | null> {
  const redis = getClient();
  if (!redis) return null;
  try {
    if (redis.status === "wait" || redis.status === "end") {
      await redis.connect();
    }
    return await fn(redis);
  } catch {
    return null;
  }
}

export const redisCache: RedisClient = {
  async get(key) {
    return (await withRedis((redis) => redis.get(key))) ?? null;
  },
  async set(key, value, ttlSeconds = 20) {
    await withRedis((redis) => redis.set(key, value, "EX", ttlSeconds));
  },
  async del(keys) {
    if (keys.length === 0) return;
    await withRedis((redis) => redis.del(...keys));
  },
  async incr(key) {
    return (await withRedis((redis) => redis.incr(key))) ?? 0;
  },
  async expire(key, ttlSeconds) {
    await withRedis((redis) => redis.expire(key, ttlSeconds));
  },
};

export async function cacheGetJson<T>(key: string): Promise<T | null> {
  const raw = await redisCache.get(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export async function cacheSetJson(key: string, value: unknown, ttlSeconds = 20) {
  await redisCache.set(key, JSON.stringify(value), ttlSeconds);
}
