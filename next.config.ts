import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // STATIC_EXPORT=1 gera a pasta /out com HTML estático (usado só para prévias).
  // Na Vercel o build normal é usado, sem essa variável.
  output: process.env.STATIC_EXPORT ? "export" : undefined,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
