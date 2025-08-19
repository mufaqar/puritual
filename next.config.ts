import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "localhost", "puritualstore.com"
    ],
  },
};

export default nextConfig;
