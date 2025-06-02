import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "localhost", "moccasin-chinchilla-599653.hostingersite.com"
    ],
  },
};

export default nextConfig;
