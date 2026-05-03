import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/articles/01-prosto-pereedayu-po-vecheram",
        destination: "/articles/ya-prosto-pereedayu-po-vecheram-eto-voobshe-problema",
        permanent: true,
      },
      {
        source: "/articles/02-pochemu-diety-ne-rabotayut",
        destination: "/articles/pochemu-diety-ne-rabotayut-i-chto-rabotaet-vmesto-nikh",
        permanent: true,
      },
      {
        source: "/articles/03-chto-proishodit-na-terapii-rpp",
        destination: "/articles/chto-proiskhodit-na-terapii-rpp-shag-za-shagom",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
