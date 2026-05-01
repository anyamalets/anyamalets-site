import type { MetadataRoute } from "next";
import { client } from "../sanity/client";

type SanityPost = {
  slug: { current: string };
  publishedAt: string;
};

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  slug,
  publishedAt
}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch<SanityPost[]>(POSTS_QUERY);

  const articleEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://anyamalets.ru/articles/${post.slug.current}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const legalEntries: MetadataRoute.Sitemap = [
    "/offer",
    "/consent",
    "/privacy-policy",
    "/agreement-pdn",
    "/agreement-health-data",
    "/refund",
    "/faq",
  ].map((path) => ({
    url: `https://anyamalets.ru${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [
    {
      url: "https://anyamalets.ru",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://anyamalets.ru/articles",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...articleEntries,
    ...legalEntries,
  ];
}
