/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  env: {
    BASE_URL:
      process.env.NODE_ENV === "production"
        ? "https://www.anfa.my.id"
        : "http://localhost:3000",
    MAX_FEATURED_PROJECT: 5,
    MEDIUM_PROFILE_USERNAME: "@andrianfaa" // used to fetch your medium stories
  }
};

module.exports = nextConfig;
