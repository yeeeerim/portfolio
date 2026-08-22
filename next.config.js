/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "starlight-tower.pages.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
