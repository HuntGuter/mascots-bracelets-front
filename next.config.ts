import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mascotsbracelets.com",
        pathname: "/cdn/shop/files/**",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
