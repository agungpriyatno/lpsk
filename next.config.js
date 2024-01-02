/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.resolve.alias.canvas = false;
      return config;
    },
    compiler: {
      styledComponents: true
    },
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
          {
            protocol: "http",
            hostname: "**",
          },
        ],
      },
}

module.exports = nextConfig
