/** @type {import('next-sitemap').IConfig} */
export const siteUrl = process.env.SITE_URL || 'https://elevenai.co';
export const generateRobotsTxt = true;
export const robotsTxtOptions = {
  policies: [{ userAgent: '*', allow: '/' }],
};