import Link from "next/link";
import { ReactNode } from "react";
import AdSlot from "@/components/AdSlot";
import { getCalculator } from "@/lib/calculators";
import { getPost, relatedPosts } from "@/lib/posts";
import {
  articleSchema,
  blogBreadcrumbSchema,
  jsonLdScript,
} from "@/lib/jsonld";

// The single template every blog article reuses:
//   breadcrumb -> title + meta -> body -> ad -> "try the calculator" CTA
//   -> related guides
// Pass the article body as `children`.

const dateFmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function BlogPost({
  slug,
  children,
  adSlotId,
}: {
  slug: string;
  children: ReactNode;
  adSlotId?: string;
}) {
  const post = getPost(slug)!;
  const calculator = post.calculatorSlug
    ? getCalculator(post.calculatorSlug)
    : undefined;
  const related = relatedPosts(slug);

  const schema = jsonLdScript(
    articleSchema({
      title: post.title,
      description: post.description,
      slug: post.slug,
      datePublished: post.date,
    }),
    blogBreadcrumbSchema({ title: post.title, slug: post.slug })
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
          <Link href="/blog" className="hover:text-teal">
            Blog
          </Link>
          <span className="mx-1.5 text-line">/</span>
          <span className="text-ink">{post.title}</span>
        </nav>

        {/* Title + meta */}
        <header className="mx-auto max-w-prose pb-8 pt-5">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted">
            <time dateTime={post.date}>{dateFmt.format(new Date(post.date))}</time>
            <span className="mx-2 text-line">·</span>
            {post.readingMinutes} min read
            <span className="mx-2 text-line">·</span>
            Reviewed for accuracy
          </p>
        </header>

        {/* Body */}
        <section className="prose-calcento mx-auto max-w-prose">{children}</section>

        {/* Ad mid-article */}
        <div className="mx-auto max-w-prose">
          <AdSlot slotId={adSlotId} />
        </div>

        {/* Try the calculator CTA */}
        {calculator && (
          <section className="mx-auto mt-10 max-w-prose">
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-teal-soft p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-lg font-semibold tracking-tight text-ink">
                  Try the {calculator.name} calculator
                </h2>
                <p className="mt-1 text-sm text-muted">{calculator.tagline}</p>
              </div>
              <Link
                href={`/${calculator.slug}`}
                className="flex-none rounded-lg bg-teal px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-teal-deep"
              >
                Open the calculator →
              </Link>
            </div>
          </section>
        )}

        {/* Related guides */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-4 font-display text-xl font-semibold tracking-tight text-ink">
              Related guides
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-xl border border-line bg-card p-4 shadow-card transition-colors hover:border-teal"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[15px] font-medium text-ink">
                      {p.title}
                    </span>
                    <span className="font-mono text-teal transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{p.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
