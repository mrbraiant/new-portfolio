/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLIENT_KEY: process.env.CLIENT_KEY,
  },
};

export default nextConfig;
