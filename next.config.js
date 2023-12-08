/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  rewrites: async () => [
    {
      source: '/landing',
      destination: '/landing/index.html',
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/**',
      },
    ],
  },
};

module.exports = nextConfig;
