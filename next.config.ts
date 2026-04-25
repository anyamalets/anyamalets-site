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
  redirects: async () => {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.anyamalets.ru",
          },
        ],
        destination: "https://anyamalets.ru/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
