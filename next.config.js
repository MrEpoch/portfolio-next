/** @type {import('next').NextConfig} */


const withMDX = require("@next/mdx")();

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async headers() {
    return [
      {
        source: "/(.*)",
        			"headers": [
				{
					"key": "Content-Security-Policy",
					"value": "default-src 'self';"
				},
				{
					"key": "Strict-Transport-Security",
					"value": "max-age=31536000; includeSubDomains; preload;"
				},
				{
					"key": "X-Content-Type-Options",
					"value": "nosniff"
				},
				{
					"key": "X-Frame-Options",
					"value": "DENY"
				},
				{
					"key": "Cross-Origin-Embedder-Policy",
					"value": "require-corp"
				},
				{
					"key": "Cross-Origin-Opener-Policy",
					"value": "same-origin"
				},
				{
					"key": "Cross-Origin-Resource-Policy",
					"value": "same-origin"
				},
				{
					"key": "Referrer-Policy",
					"value": "strict-origin-when-cross-origin"
				},
				{
					"key": "Permissions-Policy",
					"value": "microphone=(), camera=(), geolocation=(), fullscreen=(), payment=()"
				}
			]
      }
    ]
  }
};

module.exports = withMDX(nextConfig);
