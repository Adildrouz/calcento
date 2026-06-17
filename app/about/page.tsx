import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, personSchema, jsonLdScript, AUTHOR } from "@/lib/jsonld";

const description =
  "About Calcento — free, accurate calculators and plain-English guides for the everyday math of work, built by Adil Drouz, HR Manager with 10+ years in HR, payroll, and recruitment.";

export const metadata: Metadata = {
  title: "About Calcento | Calcento",
  description,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Calcento",
    description,
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-content px-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(personSchema()) }}
      />

      <nav className="pt-6 text-xs text-muted" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-teal">
          Home
        </Link>
        <span className="mx-1.5 text-line">/</span>
        <span className="text-ink">About</span>
      </nav>

      <header className="pb-8 pt-5">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          About Calcento
        </h1>
        <p className="mt-2 max-w-prose text-base text-muted">
          Free, accurate calculators for the everyday math of work.
        </p>
      </header>

      <section className="prose-calcento mx-auto max-w-prose">
        <h2>Who built this</h2>
        <p>
          Calcento was built by{" "}
          <a
            href={AUTHOR.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {AUTHOR.name}
          </a>
          , an HR Manager with over 10 years of hands-on experience across human
          resources, payroll, learning &amp; development, and recruitment. That
          day-to-day work — answering &ldquo;what would a 5% raise actually mean
          for my paycheck?&rdquo; or &ldquo;what is our turnover rate this
          quarter?&rdquo; — is exactly what Calcento is built to make faster.
        </p>

        <h2>What Calcento is</h2>
        <p>
          Calcento is a free collection of calculators and plain-English guides
          for the kind of math that comes up around work and pay — figuring out
          a raise, totaling up overtime, measuring employee turnover, or working
          out how much paid time off has accrued. Each tool runs instantly in
          your browser, with no sign-up and no spreadsheets required.
        </p>

        <h2>Why it exists</h2>
        <p>
          These calculations are simple in principle but easy to get wrong, and
          the answers genuinely matter — they affect paychecks, team budgets,
          and workforce planning. Too many existing tools bury a one-line
          formula under clutter or ask you to create an account first. Calcento
          is built to be fast, clear, and honest: type your numbers, get your
          answer, and read a straightforward explanation of how it works if you
          want one.
        </p>

        <h2>Accuracy and transparency</h2>
        <p>
          Every calculator is built around a transparent formula that is
          explained in the content beneath the tool, so you can see exactly how
          each result is produced and verify it yourself. Guides are written in
          plain language with realistic worked examples. Where rules vary by
          country, employer, or tax situation, that is stated rather than
          glossed over.
        </p>

        <h2>An important note</h2>
        <p>
          Calcento is for general guidance only. The calculators produce
          pre-tax estimates and are not a substitute for professional financial,
          legal, or tax advice. Please see the{" "}
          <Link href="/disclaimer">disclaimer</Link> for the full details, and
          verify anything important with a qualified professional.
        </p>

        <h2>Get in touch</h2>
        <p>
          Have feedback, spotted an error, or want to suggest a calculator?
          Visit the <Link href="/contact">contact page</Link> or connect on{" "}
          <a
            href={AUTHOR.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  );
}
