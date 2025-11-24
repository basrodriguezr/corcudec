// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "standalone",  
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       { protocol: 'https', hostname: 'www.corcudec.cl' },
//       { protocol: 'https', hostname: 'media-scl2-1.cdn.whatsapp.net' },
//       { protocol: 'https', hostname: 'pokeapi.co' },
//       { protocol: 'https', hostname: 'raw.githubusercontent.com' }
//     ],
//     // o más simple:
//     // domains: ['cdn.midominio.cl', 'mi-otro-cdn.com']
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  // basePath: "/corcudec",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "www.corcudec.cl" },
      { protocol: "https", hostname: "drupal.corcudec.cl", port: "", pathname: "/sites/default/files/**" },
    ],
  },
};

export default nextConfig;

