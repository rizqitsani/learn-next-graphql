/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://learn-next-graphql.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
