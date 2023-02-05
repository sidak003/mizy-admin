/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env : {
    adminApii : 'https://mhtbnkfa67.execute-api.ap-south-1.amazonaws.com/dev',
  },
}

module.exports = nextConfig
