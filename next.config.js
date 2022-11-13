/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/pkmn/:path*",
        destination: "https://pkmn-tools.vphoebe.dev/pkmn/:path*",
      },
      {
        source: "/kojima/:path*",
        destination: "https://kojima-ipsum.vphoebe.dev/kojima/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
