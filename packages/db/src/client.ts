import { PrismaClient } from "./generated/client";

/** Bump when the Prisma schema changes so hot reload does not keep a stale client. */
const PRISMA_GENERATION = "dodo-payments-1";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
  prismaGeneration?: string;
};

function createPrisma() {
  return new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
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
