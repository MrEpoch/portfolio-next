/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")();

const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
    minimumCacheTTL: 60,
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = withMDX(nextConfig);
