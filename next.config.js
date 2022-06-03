/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://superfighters.vercel.app/",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
