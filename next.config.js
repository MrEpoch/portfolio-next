/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")();

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' web3forms.com js.hcaptcha.com 'unsafe-inline' 'unsafe-eval'; connect-src 'self' api.web3forms.com newassets.hcaptcha.com; frame-src 'self' newassets.hcaptcha.com",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload;",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
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

module.exports = withMDX(nextConfig);
