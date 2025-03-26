import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "localhost", "demo.mufaqar.com"
    ],
  },
};

export default nextConfig;
