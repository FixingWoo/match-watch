import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    compiler: 'modern',
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    domains: ['media.api-sports.io'],
  },
  experimental: {},
};

export default nextConfig;
