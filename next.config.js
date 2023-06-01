/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'lespetitesannoncesdemarine.files.wordpress.com',
      'images.unsplash.com',
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
