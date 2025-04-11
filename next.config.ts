import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'my-movies-test-storage.s3.eu-north-1.amazonaws.com',
        pathname: '/**', // Matches any path in the domain
      },
    ],
  },
};

export default nextConfig;
