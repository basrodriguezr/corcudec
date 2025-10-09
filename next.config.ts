import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home/main',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.corcudec.cl' },
    ],
    // o más simple:
    // domains: ['cdn.midominio.cl', 'mi-otro-cdn.com']
  },
  output: 'standalone'
};

export default nextConfig;
