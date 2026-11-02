import type { NextConfig } from "next";

// Untuk GitHub Pages: set STATIC_EXPORT=1 dan NEXT_PUBLIC_BASE_PATH=/<nama-repo>
const isExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(isExport ? { output: "export", trailingSlash: true } : {}),
  basePath: basePath || undefined,
  images: isExport
    ? { unoptimized: true }
    : { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
