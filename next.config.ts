import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  compress: false
};

export default nextConfig;