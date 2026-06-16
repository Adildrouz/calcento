import type { Metadata } from "next";
import Link from "next/link";
import { postCategories, postsByCategory } from "@/lib/posts";
import { SITE_URL } from "@/lib/jsonld";

const description =
  "Plain-English guides to the everyday math of work — how to calculate pay raises, overtime, employee turnover, and PTO accrual, plus pay benchmarks and HR metrics explained.";

export const metadata: Metadata = {
  title: "Blog — Step-by-step guides to work math | Calcento",
  description,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Calcento Blog",
    description,
    url: `${SITE_URL}/blog`,
    siteName: "Calcento",
    type: "website",
  },
};

const dateFmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-content px-5">
      {/* Breadcrumb */}
      <nav className="pt-6 text-xs text-muted" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-teal">
          Home
        </Link>
        <span className="mx-1.5 text-line">/</span>
        <span className="text-ink">Blog</span>
      </nav>

      {/* Hero */}
      <header className="pb-10 pt-5">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Guides &amp; tutorials
        </h1>
        <p className="mt-2 max-w-prose text-base text-muted">
          Plain-English, step-by-step walkthroughs for the everyday math of work —
          plus pay benchmarks and HR metrics explained. Many guides pair with a
          free calculator.
        </p>
      </header>

      {/* Posts grouped by category */}
      {postCategories.map((category) => {
        const items = postsByCategory(category);
        if (items.length === 0) return null;
        return (
          <section key={category} className="pb-10">
            <h2 className="mb-5 font-display text-sm font-medium uppercase tracking-[0.16em] text-muted">
              {category}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}>
                  <div className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-teal">
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-muted">
                        <time dateTime={p.date}>
                          {dateFmt.format(new Date(p.date))}
                        </time>
                        <span className="mx-2 text-line">·</span>
                        {p.readingMinutes} min read
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {p.description}
                      </p>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
                      Read guide
                      <span className="font-mono transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
