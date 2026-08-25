import type { NextConfig } from "next";
import path from "node:path";

const prismaEngineGlobs = [
  "./src/generated/client/**/*",
  "../../packages/db/src/generated/client/**/*",
];

const nextConfig: NextConfig = {
  transpilePackages: ["@climb/db", "@climb/ranking", "@climb/payments"],
  serverExternalPackages: ["@prisma/client", "ioredis", "dodopayments"],
  outputFileTracingRoot: path.join(__dirname, "../.."),
  outputFileTracingIncludes: {
    "/*": prismaEngineGlobs,
    "/api/**": prismaEngineGlobs,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "abs.twimg.com" },
      { protocol: "https", hostname: "media.licdn.com" },
    ],
  },
};

export default nextConfig;
