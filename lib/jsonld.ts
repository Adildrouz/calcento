// Helpers that build JSON-LD structured data. Rendered on each calculator
// page so Google can show rich results (FAQ accordions, app metadata).

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.calcento.com";

export interface FaqItem {
  question: string;
  answer: string;
}

export function webApplicationSchema(opts: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}/${opts.slug}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "Calcento", url: SITE_URL },
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

export function breadcrumbSchema(opts: { name: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: opts.name,
        item: `${SITE_URL}/${opts.slug}`,
      },
    ],
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  slug: string; // blog post slug
  datePublished: string; // ISO date
  dateModified?: string; // ISO date; defaults to datePublished
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    url: `${SITE_URL}/blog/${opts.slug}`,
    author: { "@type": "Organization", name: "Calcento", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Calcento", url: SITE_URL },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Calcento",
    url: SITE_URL,
    description:
      "Free, instant calculators for pay, raises, overtime, turnover, and the everyday math of work.",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Calcento",
    url: SITE_URL,
    description:
      "Free, instant calculators for pay, raises, overtime, turnover, and the everyday math of work.",
  };
}

export function blogBreadcrumbSchema(opts: { title: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: opts.title,
        item: `${SITE_URL}/blog/${opts.slug}`,
      },
    ],
  };
}

// Renders one or more schema objects as a single JSON-LD script string.
export function jsonLdScript(...objects: object[]): string {
  return JSON.stringify(objects.length === 1 ? objects[0] : objects);
}

export { SITE_URL };
