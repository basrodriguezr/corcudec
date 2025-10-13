// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       { protocol: 'https', hostname: 'www.corcudec.cl' },
//     ],
//     // o más simple:
//     // domains: ['cdn.midominio.cl', 'mi-otro-cdn.com']
//   },
//   output: 'standalone',
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports  
  output: "export",  // <=== enables static exports  
  images: {
    unoptimized: true,
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'www.corcudec.cl' },
    ],
    // o más simple:
    // domains: ['cdn.midominio.cl', 'mi-otro-cdn.com']
  },
  trailingSlash: true,
  trailingSlash: true,
};

export default nextConfig;