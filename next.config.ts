import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "drive.google.com",
        protocol: "https",
      },
      {
        hostname: "narad-kdmq.onrender.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
