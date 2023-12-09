/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'out',
  rewrites: async () => [
    {
      source: '/landing',
      destination: '/landing/index.html',
    },
  ],
};

module.exports = nextConfig;
