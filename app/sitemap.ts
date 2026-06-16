import type { MetadataRoute } from "next";
import { calculators } from "@/lib/calculators";
import { posts } from "@/lib/posts";
import { SITE_URL } from "@/lib/jsonld";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...calculators
      .filter((c) => c.status === "live")
      .map((c) => ({
        url: `${SITE_URL}/${c.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...[
      "about",
      "contact",
      "privacy-policy",
      "terms",
      "disclaimer",
      "cookie-policy",
    ].map((path) => ({
      url: `${SITE_URL}/${path}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
