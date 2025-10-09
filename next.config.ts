import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.corcudec.cl' },
    ],
    // o más simple:
    // domains: ['cdn.midominio.cl', 'mi-otro-cdn.com']
  }
};

export default nextConfig;
