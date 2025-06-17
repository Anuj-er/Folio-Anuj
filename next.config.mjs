/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Disable static optimization for now to fix build issues
  experimental: {
    // Allow more time for the build
    staticWorkerTimeout: 120000, // 2 minutes
  },
  // Use client-side rendering for the home page
  unstable_runtimeJS: true,
};

export default nextConfig;
