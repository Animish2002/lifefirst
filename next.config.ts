import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
   typescript: {
    ignoreBuildErrors: true, // ⚠️ Dangerous! Only use if absolutely necessary
  },
};

export default nextConfig;
