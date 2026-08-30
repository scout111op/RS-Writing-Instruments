import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://challenges.cloudflare.com https://www.google.com https://www.gstatic.com https://pagead2.googlesyndication.com https://adservice.google.com https://www.googletagservices.com https://tpc.googlesyndication.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: blob: https://images.unsplash.com https://va.vercel-scripts.com https://rs-writing-instruments.vercel.app https://rswriting.in https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://googleads.g.doubleclick.net;
  font-src 'self' https://fonts.gstatic.com data:;
  connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://wa.me https://api.whatsapp.com https://challenges.cloudflare.com https://www.google.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com;
  frame-src 'self' https://challenges.cloudflare.com https://www.google.com https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com https://tpc.googlesyndication.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self' https://wa.me https://api.whatsapp.com;
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim();

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: cspHeader,
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), vr=()',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
];

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    inlineCss: true,
    optimizePackageImports: ['react-icons'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 390, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  allowedDevOrigins: ['192.168.31.124', 'localhost:3000'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
