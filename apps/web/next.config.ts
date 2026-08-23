import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@climb/db", "@climb/ranking", "@climb/payments"],
  serverExternalPackages: ["@prisma/client", "ioredis", "dodopayments"],
};

export default nextConfig;
