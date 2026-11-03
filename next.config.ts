import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
  experimental: {
    agentFeedback: true,
    agentUpgrade: "security",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
