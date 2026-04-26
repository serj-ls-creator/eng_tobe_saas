/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  // Exclude video folder from build
  experimental: {
    outputFileTracingExcludes: {
      '*': ['./video/**/*']
    }
  },
  // Ignore video folder completely
  ignoreBuildErrors: false,
  typescript: {
    ignoreBuildErrors: false
  }
};

export default nextConfig;
