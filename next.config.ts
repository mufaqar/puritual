import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "localhost", "https://puritualstore.com"
    ],
  },
};

export default nextConfig;
