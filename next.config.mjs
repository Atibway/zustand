/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "th.bing.com",
          },
          {
            protocol: "https",
            hostname:"i5.walmartimages.com",
          },
        ],
      },
};

export default nextConfig;
