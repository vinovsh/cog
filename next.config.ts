import type { NextConfig } from "next";

// GitHub Pages build: set GITHUB_PAGES=true (the deploy workflow does this).
// The site is served from https://<user>.github.io/<repo>/, so everything is
// prefixed with the repo name. Local `npm run dev` / `npm run build` are unchanged.
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? process.env.PAGES_BASE_PATH || "/cog" : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages && {
    output: "export", // plain HTML in ./out
    trailingSlash: true, // /about -> /about/index.html, which Pages serves
    basePath,
    // Pages has no server to resize images on demand
    images: { unoptimized: true },
  }),
  env: {
    // Read by `asset()` to prefix /public paths used in <Image src>
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
