import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  serverExternalPackages: [
    '@duckdb/node-api',
    '@duckdb/node-bindings',
    '@mastra/duckdb',
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
