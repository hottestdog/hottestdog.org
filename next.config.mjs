/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  images: { unoptimized: true },
  metadataBase: new URL(process.env.BASE_URL || "https://hottestdog.org"),
};

export default nextConfig;
