import type { MetadataRoute } from "next";

import { getPosts } from "@/app/portfolio/utils";

export const baseUrl = "https://ec-solutions-and-enterprise.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts().map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  return [...posts];
}
