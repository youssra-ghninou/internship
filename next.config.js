/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   'lh3.googleusercontent.com',
    //   'lespetitesannoncesdemarine.files.wordpress.com',
    //   'images.unsplash.com',
    //   'source.unsplash.com',
    //   'companieslogo.com',
    //   'encrypted-tbn0.gstatic.com',
    // ],
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
