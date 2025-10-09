import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.corcudec.cl' },
    ],
    // o más simple:
    // domains: ['cdn.midominio.cl', 'mi-otro-cdn.com']
  },
  output: 'standalone',
  async redirects() {
    return [
      { source: '/', destination: '/home/main', permanent: false },
      // o: { source: '/', destination: '/transparencia', permanent: false },
    ];
  },
};

export default nextConfig;
