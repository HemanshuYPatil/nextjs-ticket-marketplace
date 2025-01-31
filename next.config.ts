import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "rapid-hound-650.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;
