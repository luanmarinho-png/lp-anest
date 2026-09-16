import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "medcof-assets.s3.sa-east-1.amazonaws.com",
        pathname: "/profile-pictures/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/teste", destination: "/", permanent: false },
      { source: "/teste/:path*", destination: "/:path*", permanent: false },
    ];
  },
};

export default nextConfig;
