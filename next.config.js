/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  rewrites: async () => [
    {
      source: '/landing',
      destination: '/landing/index.html',
    },
  ],
};

module.exports = nextConfig;
