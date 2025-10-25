/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  outputFileTracingRoot: process.cwd(),
  // Skip TypeScript checking during build for Vercel deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure proper file handling on Vercel
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('canvas', 'jsdom');
    }
    return config;
  },
  // Optimize for Vercel deployment
  images: {
    unoptimized: false,
    domains: [
      'slelguoygbfzlpylpxfs.supabase.co',
      'localhost',
      'vercel.app'
    ],
  },
  // Ensure proper static file handling
  trailingSlash: false,
  // Disable strict mode for better compatibility
  reactStrictMode: false,
}

module.exports = nextConfig
