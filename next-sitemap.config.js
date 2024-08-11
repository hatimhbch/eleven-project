/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://elevenai.co',
    generateRobotsTxt: true,
    // optional
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/' }],
    },
  };