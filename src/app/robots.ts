import type { MetadataRoute } from "next";

// Everything is public; the sitemap line lets crawlers find it without Search Console.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://basivo.in/sitemap.xml",
  };
}
