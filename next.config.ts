import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: true,
  
  },
  ignoreDuringBuilds: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
