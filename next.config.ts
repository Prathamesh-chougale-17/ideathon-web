import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "drive.google.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
