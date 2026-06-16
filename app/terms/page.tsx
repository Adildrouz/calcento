import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/jsonld";

const description =
  "Terms of use for Calcento: the calculators are for general guidance only, provided without warranty, and are not financial, legal, or tax advice.";

export const metadata: Metadata = {
  title: "Terms of Use | Calcento",
  description,
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-content px-5">
      <nav className="pt-6 text-xs text-muted" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-teal">
          Home
        </Link>
        <span className="mx-1.5 text-line">/</span>
        <span className="text-ink">Terms of Use</span>
      </nav>

      <header className="pb-8 pt-5">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: June 16, 2026</p>
      </header>

      <section className="prose-calcento mx-auto max-w-prose">
        <p>
          These Terms of Use govern your access to and use of Calcento. By using
          the site, you agree to these terms. If you do not agree, please do not
          use the site.
        </p>

        <h2>General guidance only</h2>
        <p>
          Calcento provides free calculators and educational content about pay,
          raises, overtime, employee turnover, and paid time off. Everything on
          this site is for general informational purposes only. It is{" "}
          <strong>not</strong> financial, legal, tax, accounting, or professional
          advice, and should not be relied upon as a substitute for advice from a
          qualified professional who knows your specific situation.
        </p>

        <h2>No warranty of accuracy</h2>
        <p>
          We work to keep our formulas and content correct, but we make no
          warranties or guarantees of any kind about the accuracy, completeness,
          or suitability of the calculators or information. All figures are
          estimates, are generally pre-tax, and may not reflect the laws, rates,
          or policies that apply to you. You are responsible for verifying any
          result before acting on it.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Calcento and its operators will
          not be liable for any direct, indirect, incidental, consequential, or
          other damages arising from your use of, or inability to use, the site or
          its calculators — including any decisions made based on the results.
        </p>

        <h2>Acceptable use</h2>
        <p>
          You agree not to misuse the site, attempt to disrupt its operation, or
          use it for any unlawful purpose. We may modify, suspend, or discontinue
          any part of the site at any time without notice.
        </p>

        <h2>Third-party links and ads</h2>
        <p>
          The site displays advertising and may link to third-party websites. We
          are not responsible for the content, products, or practices of any
          third-party site or advertiser. See our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> for how advertising
          data is handled.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these Terms of Use from time to time. Continued use of the
          site after changes are posted constitutes acceptance of the revised
          terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Reach us via our{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </section>
    </div>
  );
}
