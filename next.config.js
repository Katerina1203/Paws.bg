/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'lh3.googleusercontent.com',
          },
          {
              protocol: 'https',
              hostname: 'images.pexels.com',
          }
      ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

module.exports = nextConfig
