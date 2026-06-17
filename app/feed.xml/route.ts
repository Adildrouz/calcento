import { posts } from "@/lib/posts";
import { SITE_URL, AUTHOR } from "@/lib/jsonld";

export const dynamic = "force-static";

function escape(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const items = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(
      (p) => `
    <item>
      <title>${escape(p.title)}</title>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${p.slug}</guid>
      <description>${escape(p.description)}</description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <author>hello@calcento.com (${AUTHOR.name})</author>
    </item>`
    )
    .join("");

  const lastBuild = new Date(posts.map((p) => p.date).sort().at(-1)!).toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Calcento — Free Pay &amp; Workplace Calculators</title>
    <link>${SITE_URL}</link>
    <description>Plain-English guides to the everyday math of work — pay raises, overtime, turnover, and PTO, plus HR benchmarks explained.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <managingEditor>hello@calcento.com (${AUTHOR.name})</managingEditor>
    <webMaster>hello@calcento.com (${AUTHOR.name})</webMaster>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
