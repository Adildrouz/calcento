import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/jsonld";

const description =
  "About Calcento — free, accurate calculators and plain-English guides for the everyday math of work: pay raises, overtime, employee turnover, and PTO.";

export const metadata: Metadata = {
  title: "About Calcento | Calcento",
  description,
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-content px-5">
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
        <h2>What Calcento is</h2>
        <p>
          Calcento is a free collection of calculators and plain-English guides for
          the kind of math that comes up around work and pay — figuring out a
          raise, totaling up overtime, measuring employee turnover, or working out
          how much paid time off you have accrued. Each tool runs instantly in your
          browser, with no sign-up and no spreadsheets.
        </p>

        <h2>Why we built it</h2>
        <p>
          These calculations are simple in principle but easy to get wrong, and the
          answers genuinely matter — they affect your paycheck, your team, and your
          planning. Too many existing tools bury a one-line formula under clutter or
          ask you to create an account first. We wanted something fast, clear, and
          honest: type your numbers, get your answer, and read a straightforward
          explanation of how it works if you want one.
        </p>

        <h2>Our commitment to accuracy</h2>
        <p>
          Every calculator is built around a transparent formula that we explain in
          the content beneath the tool, so you can see exactly how each result is
          produced and check it yourself. We write our guides in plain language,
          use realistic worked examples, and review them for accuracy. Where rules
          vary by country, employer, or tax situation, we say so rather than
          pretending one number fits everyone.
        </p>

        <h2>An important note</h2>
        <p>
          Calcento is for general guidance only. Our calculators produce pre-tax
          estimates and are not a substitute for professional financial, legal, or
          tax advice. Please see our <Link href="/disclaimer">disclaimer</Link> for
          the details, and verify anything important with a qualified professional.
        </p>

        <h2>Get in touch</h2>
        <p>
          Have feedback, spotted an error, or want to suggest a calculator? We would
          genuinely like to hear from you — visit our{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </section>
    </div>
  );
}
