import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [600, 800, 1200, 2400, 3600],
    remotePatterns: [
      {
        hostname: "api.origamid.online",
        protocol: "https",
        port: "",
        pathname: "/imagens/**",
      },
    ],
  },
};

export default nextConfig;
