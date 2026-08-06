import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Allow hot module reloading (HMR) from local network IP for external devices
  allowedDevOrigins: ['192.168.31.124', 'localhost:3000'],
};

export default nextConfig;
