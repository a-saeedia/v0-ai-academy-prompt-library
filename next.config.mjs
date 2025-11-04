/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // Ensure the Next.js app/ directory is enabled (app router)
    appDir: true,
  },
  images: {
    // Disable Next's image optimization (adapter targets like Cloudflare)
    unoptimized: true,
  },
  webpack: (config) => {
    config.cache = false
    return config
  },
}

export default nextConfig
