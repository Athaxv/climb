import Redis from "ioredis";

type RedisClient = {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, ttlSeconds?: number): Promise<void>;
  del(keys: string[]): Promise<void>;
  incr(key: string): Promise<number>;
  expire(key: string, ttlSeconds: number): Promise<void>;
  incrWithTtl(key: string, ttlSeconds: number): Promise<number>;
};

let client: Redis | null | undefined;
let skipUntil = 0;

const INCR_EXPIRE = `
local n = redis.call('INCR', KEYS[1])
if n == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]) end
return n
`;

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
      connectTimeout: 2000,
      commandTimeout: 1500,
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
  if (Date.now() < skipUntil) return null;
  const redis = getClient();
  if (!redis) return null;
  try {
    if (redis.status === "wait" || redis.status === "end") {
      await redis.connect();
    }
    return await fn(redis);
  } catch {
    skipUntil = Date.now() + 15_000;
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
  async incrWithTtl(key, ttlSeconds) {
    return (
      (await withRedis((redis) =>
        redis.eval(INCR_EXPIRE, 1, key, String(ttlSeconds)) as Promise<number>,
      )) ?? 0
    );
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
