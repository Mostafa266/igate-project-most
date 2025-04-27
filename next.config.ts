import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.dummyjson.com'],
},
eslint: {
  ignoreDuringBuilds: true,
},
};

export default nextConfig;
