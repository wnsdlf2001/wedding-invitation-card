/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: '/wedding-invitation-card',
  assetPrefix: '/wedding-invitation-card',
  trailingSlash: true, // 모든 경로에 '/'를 추가
};

export default nextConfig;
//module.exports = nextConfig;
