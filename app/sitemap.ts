import type { MetadataRoute } from "next";
import { calculators } from "@/lib/calculators";
import { posts } from "@/lib/posts";
import { SITE_URL } from "@/lib/jsonld";

const LAUNCH = new Date("2026-06-01");
const POLICY_UPDATED = new Date("2026-06-16");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: LAUNCH },
    ...calculators
      .filter((c) => c.status === "live")
      .map((c) => ({ url: `${SITE_URL}/${c.slug}`, lastModified: LAUNCH })),
    { url: `${SITE_URL}/blog`, lastModified: new Date("2026-06-12") },
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.date),
    })),
    ...["about", "contact", "privacy-policy", "terms", "disclaimer", "cookie-policy"].map(
      (path) => ({ url: `${SITE_URL}/${path}`, lastModified: POLICY_UPDATED })
    ),
  ];
}
