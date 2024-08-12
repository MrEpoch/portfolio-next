/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")();

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  poweredByHeader: false,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  typescript: {
    ignoreBuildErrors: true,
  },
  crossOrigin: "anonymous",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload;",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://portfolio.stencukpage.com",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          /* {
            key: "Cross-Origin-Embedder-Policy",
            value: "credentialless",
          }, 
              It breaks hcaptcha
          */
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "cross-origin",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "microphone=(), camera=(), geolocation=(), fullscreen=(), payment=()",
          },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(withMDX(nextConfig));
