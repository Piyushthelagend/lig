/** @type {import('levizr').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http', // or 'https'
        hostname: 'levizrapis.unaux.com', // Your image domain
        pathname: '/images/**', // The specific path pattern for your images
      },
      {
        protocol: 'https', // or 'https'
        hostname: 'lh3.googleusercontent.com', // Your image domain
      },
      {
        protocol: 'https', // or 'https'
        hostname: 'avatars.githubusercontent.com', // Your image domain
      },
      {
        protocol: 'https', // or 'https'
        hostname: 'cdn.discordapp.com', // Your image domain
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/_lig/:path*",
        destination: "/_next/:path*", // Map `_levizr` to `_next`
      },
    ];
  },
};

export default nextConfig;
