/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://superfighters.vercel.app/profile",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
