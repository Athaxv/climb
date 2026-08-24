import { PrismaClient } from "./generated/client";

/** Bump when the Prisma schema or client options change so hot reload does not keep a stale client. */
const PRISMA_GENERATION = "neon-pooler-flag-1";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
  prismaGeneration?: string;
};

/** Neon’s pooler needs pgbouncer=true so Prisma does not use prepared statements. */
function pooledDatabaseUrl() {
  const raw = process.env.DATABASE_URL;
  if (!raw) return undefined;
  if (!raw.includes("pooler") || /[?&]pgbouncer=/.test(raw)) return raw;
  return `${raw}${raw.includes("?") ? "&" : "?"}pgbouncer=true`;
}

function createPrisma() {
  const url = pooledDatabaseUrl();
  return new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    ...(url ? { datasourceUrl: url } : {}),
    transactionOptions: {
      maxWait: 10_000,
      timeout: 20_000,
    },
  });
}

if (globalForPrisma.prisma && globalForPrisma.prismaGeneration !== PRISMA_GENERATION) {
  void globalForPrisma.prisma.$disconnect();
  globalForPrisma.prisma = undefined;
}

export const prisma = globalForPrisma.prisma ?? createPrisma();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
  globalForPrisma.prismaGeneration = PRISMA_GENERATION;
}
