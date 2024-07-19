/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
