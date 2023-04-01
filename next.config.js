/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env : {
    adminApii : 'https://mhtbnkfa67.execute-api.ap-south-1.amazonaws.com/dev',
    awsRegion : "ap-south-1",
    cognitoIdentityPoolId : "ap-south-1:5c1796b9-ea3b-4bd6-92a6-74ab7e4f425a",
    awsUserPoolId : "ap-south-1_wAx4BKiqz",
    awsUserPoolWebClientId : "4orbp7hqlirnlg1qp0io4aa3kc",
  },
}

module.exports = nextConfig
