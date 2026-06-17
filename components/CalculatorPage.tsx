import Link from "next/link";
import { ReactNode } from "react";
import AdSlot from "@/components/AdSlot";
import Faq from "@/components/Faq";
import { relatedCalculators } from "@/lib/calculators";
import { postsByCalculator } from "@/lib/posts";
import {
  webApplicationSchema,
  faqSchema,
  breadcrumbSchema,
  jsonLdScript,
  type FaqItem,
} from "@/lib/jsonld";

// The single template every calculator page reuses:
//   breadcrumb -> hero -> TOOL -> ad -> content -> FAQ -> related tools
// Pass the interactive tool as `children` and the written content as `content`.

export default function CalculatorPage({
  slug,
  title,
  tagline,
  metaDescription,
  children,
  content,
  faqs,
  adSlotId,
  guideSlug,
  guideTitle,
}: {
  slug: string;
  title: string;
  tagline: string;
  metaDescription: string;
  children: ReactNode; // the interactive calculator
  content: ReactNode; // the prose section below the tool
  faqs: FaqItem[];
  adSlotId?: string;
  guideSlug?: string; // matching tutorial article slug, e.g. "how-to-calculate-overtime-pay"
  guideTitle?: string; // link label for that guide
}) {
  const related = relatedCalculators(slug);
  const relatedPosts = postsByCalculator(slug, guideSlug);
  const schema = jsonLdScript(
    webApplicationSchema({ name: title, description: metaDescription, slug }),
    breadcrumbSchema({ name: title, slug }),
    faqSchema(faqs)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schema }}
      />
      <article className="mx-auto max-w-content px-5">
        {/* Breadcrumb */}
        <nav className="pt-6 text-xs text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-teal">
            Home
          </Link>
          <span className="mx-1.5 text-line">/</span>
          <span className="text-ink">{title}</span>
        </nav>

        {/* Hero */}
        <header className="pb-8 pt-5">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 max-w-prose text-base text-muted">{tagline}</p>
        </header>

        {/* The tool */}
        <section aria-label="Calculator">{children}</section>

        {/* Disclaimer */}
        <p className="mt-3 text-xs text-muted">
          Results are pre-tax estimates for general guidance only — not financial, legal, or tax advice.{" "}
          <Link href="/disclaimer" className="underline hover:text-ink">
            See disclaimer.
          </Link>
        </p>

        {/* Link to the matching step-by-step guide */}
        {guideSlug && (
          <p className="mt-4 text-sm text-muted">
            New to this?{" "}
            <Link
              href={`/blog/${guideSlug}`}
              className="font-medium text-teal hover:text-teal-deep"
            >
              {guideTitle ?? "Read the step-by-step guide"} →
            </Link>
          </p>
        )}

        {/* Ad after the result, where attention peaks */}
        <AdSlot slotId={adSlotId} />

        {/* Written content — ranks the long-tail, gives ad inventory */}
        <section className="prose-calcento mx-auto max-w-prose">{content}</section>

        {/* Related reading — non-guide posts for this calculator */}
        {relatedPosts.length > 0 && (
          <section className="mx-auto mt-10 max-w-prose">
            <h2 className="mb-3 font-display text-lg font-semibold tracking-tight text-ink">
              Related reading
            </h2>
            <ul className="space-y-2">
              {relatedPosts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex items-center gap-2 text-sm text-muted hover:text-ink"
                  >
                    <span className="font-mono text-teal transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="mx-auto mt-12 max-w-prose">
            <h2 className="mb-4 font-display text-2xl font-semibold tracking-tight text-ink">
              Frequently asked questions
            </h2>
            <Faq items={faqs} />
          </section>
        )}

        {/* Related calculators */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-4 font-display text-xl font-semibold tracking-tight text-ink">
              More calculators
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="group rounded-xl border border-line bg-card p-4 shadow-card transition-colors hover:border-teal"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[15px] font-medium text-ink">
                      {c.name}
                    </span>
                    {c.status === "soon" ? (
                      <span className="text-[10px] uppercase tracking-wide text-brass">
                        soon
                      </span>
                    ) : (
                      <span className="font-mono text-teal transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted">{c.tagline}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
