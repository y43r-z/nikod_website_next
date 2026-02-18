import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // نادیده گرفتن خطاهای TypeScript
  },
  output: 'standalone',
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  compress: true, // فعال کردن فشرده‌سازی
  
  // ❌ خط زیر را حذف کنید
  // swcMinify: true,
  
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@heroicons/react',
      // سایر پکیج‌های حجیم
    ],
  },
};

export default nextConfig;