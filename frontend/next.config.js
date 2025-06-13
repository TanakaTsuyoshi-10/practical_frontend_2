/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: false, // 特に useSearchParams 使用時に明示しておくと安心
  },
};

module.exports = nextConfig;