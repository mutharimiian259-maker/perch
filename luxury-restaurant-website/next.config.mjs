/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ❌ NEVER ignore TS errors in production
  typescript: {
    ignoreBuildErrors: false,
  },

  // ❌ DO NOT disable image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Performance boost (important for gallery-heavy sites)
  compress: true,

  poweredByHeader: false,
};

export default nextConfig;
