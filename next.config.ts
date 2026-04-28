import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/Evoc-Labs' : '',
  assetPrefix: isProd ? '/Evoc-Labs/' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2z53scj8veve3.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'd1311wbk6unapo.cloudfront.net',
      }
    ],
  },
};

export default nextConfig;
