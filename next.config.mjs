/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep preview and validation outputs separate from an existing local server.
  distDir: process.env.PORTFOLIO_NEXT_DIR || ".next",
};

export default nextConfig;
