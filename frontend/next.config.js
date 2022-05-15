/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.traction.one'],
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig
