import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_BACKOFFICE: process.env.NEXT_PUBLIC_BACKOFFICE,
  },
};

export default nextConfig;
