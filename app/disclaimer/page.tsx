import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/jsonld";

const description =
  "Calcento disclaimer: the calculators and content are estimates for general guidance only — not financial, legal, or tax advice. Figures are pre-tax; verify with a professional.";

export const metadata: Metadata = {
  title: "Disclaimer | Calcento",
  description,
  alternates: { canonical: `${SITE_URL}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-content px-5">
      <nav className="pt-6 text-xs text-muted" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-teal">
          Home
        </Link>
        <span className="mx-1.5 text-line">/</span>
        <span className="text-ink">Disclaimer</span>
      </nav>

      <header className="pb-8 pt-5">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Disclaimer
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: June 16, 2026</p>
      </header>

      <section className="prose-calcento mx-auto max-w-prose">
        <p>
          The calculators, articles, and other content on Calcento are provided
          for general informational and educational purposes only. They are{" "}
          <strong>not</strong> financial, legal, tax, accounting, or professional
          advice of any kind.
        </p>

        <h2>Figures are estimates</h2>
        <p>
          Every result on this site is an estimate. Unless explicitly stated
          otherwise, all monetary figures are <strong>pre-tax (gross)</strong> and
          do not account for deductions, withholdings, benefits, local laws, or
          your individual circumstances. Real outcomes will differ.
        </p>

        <h2>Not a substitute for professional advice</h2>
        <p>
          Decisions about your pay, employment, business, or finances can have
          significant consequences. Before acting on anything you read or calculate
          here, you should verify the details and consult a qualified professional
          — such as an accountant, financial adviser, HR specialist, or lawyer —
          who can take your specific situation into account.
        </p>

        <h2>No guarantee of accuracy</h2>
        <p>
          While we strive to keep our formulas and explanations correct and
          up to date, we make no representation or warranty that the content is
          accurate, complete, or current. Tax rates, employment rules, and
          benchmarks change and vary by country, region, and employer.
        </p>

        <h2>Your responsibility</h2>
        <p>
          You use Calcento at your own discretion and risk. We are not liable for
          any loss or damage arising from reliance on the calculators or content.
          See our <Link href="/terms">Terms of Use</Link> for the full limitation
          of liability.
        </p>
      </section>
    </div>
  );
}
