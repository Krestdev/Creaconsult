import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_BACKOFFICE: process.env.NEXT_PUBLIC_BACKOFFICE,
    NEXT_IMAGE_BASE: process.env.NEXT_IMAGE_BASE,
  },
};

export default nextConfig;
