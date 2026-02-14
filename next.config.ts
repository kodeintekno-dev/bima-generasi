import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Izinkan Next.js memproses file .md dan .mdx
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  experimental: {
    // Aktifkan MDX compiler bawaan Next.js (Rust-based, kompatibel Turbopack)
    mdxRs: true,
  },
};

export default nextConfig;