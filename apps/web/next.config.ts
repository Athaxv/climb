import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@climb/db", "@climb/ranking", "@climb/payments"],
  serverExternalPackages: ["@prisma/client", "ioredis", "dodopayments"],
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
