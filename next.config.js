/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env: {
        NEXT_PUBLIC_API_URL: 'https://tech0-gen-8-step3-testapp-py2-29.azurewebsites.net',
    },
  };
  
  module.exports = nextConfig;
  