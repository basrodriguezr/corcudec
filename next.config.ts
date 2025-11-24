// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   reactStrictMode: true,
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       { protocol: "https", hostname: "www.corcudec.cl" },
//       {
//         protocol: "https",
//         hostname: "drupal.corcudec.cl",
//         port: "",
//         pathname: "/sites/default/files/**",
//       },
//     ],
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
    remotePatterns: [
      { protocol: "https", hostname: "www.corcudec.cl" },
      { protocol: "https", hostname: "corcudec.cl" },
      { protocol: "https", hostname: "drupal.elteatrodesa.cl" },
      { protocol: "https", hostname: "drupal.corcudec.cl" },
    ],
  },
};

export default nextConfig;
