/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.anfa.my.id",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/"
      }
    ]
  },
  priority: 1.0
};
