import type { MetadataRoute } from "next";

// The site is one page; add each new public page here as it is built.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://basivo.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
