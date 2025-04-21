import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
  images: {
    domains: ["canalcero.com"], // Add the external domain here
  },
};

export default nextConfig;
