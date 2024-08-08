import { allDocs } from "contentlayer/generated";
import { NextApiRequest, NextApiResponse } from "next";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const postEntries: MetadataRoute.Sitemap = allDocs.map((doc) => ({
    url: `http://elevenai.co/${doc.slugAsParams}`,
    lastModified: new Date(doc.date),
    changeFrequency: 'daily',
  }));

  return [
    {
      url: `http://elevenai.co/about`,
      lastModified: new Date(),
    },
    ...postEntries,
  ];
}