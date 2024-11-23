/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env: {
      NEXT_PUBLIC_API_URL: 'tech0-gen-8-step3-testapp-py2-29.azurewebsites.net', // バックエンドのURLを指定
    },
  };
  
  module.exports = nextConfig;
  