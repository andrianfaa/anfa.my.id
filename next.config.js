/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en'
  },
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;
