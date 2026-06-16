import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/jsonld";

const description =
  "Calcento cookie policy: which cookies we use, why advertising cookies are set by Google AdSense, and how to control or opt out of them.";

export const metadata: Metadata = {
  title: "Cookie Policy | Calcento",
  description,
  alternates: { canonical: `${SITE_URL}/cookie-policy` },
};

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-content px-5">
      <nav className="pt-6 text-xs text-muted" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-teal">
          Home
        </Link>
        <span className="mx-1.5 text-line">/</span>
        <span className="text-ink">Cookie Policy</span>
      </nav>

      <header className="pb-8 pt-5">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Cookie Policy
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: June 16, 2026</p>
      </header>

      <section className="prose-calcento mx-auto max-w-prose">
        <p>
          This Cookie Policy explains what cookies are, which ones Calcento uses,
          and how you can control them. It should be read alongside our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>

        <h2>What cookies are</h2>
        <p>
          Cookies are small text files that a website stores on your device. They
          are widely used to make sites work, to remember your preferences, and to
          help measure and serve advertising.
        </p>

        <h2>Cookies we use</h2>
        <ul>
          <li>
            <strong>Essential / preference storage:</strong> we use your
            browser&rsquo;s local storage to remember your cookie consent choice so
            we don&rsquo;t ask again on every visit. This stays on your device and
            is not used to track you.
          </li>
          <li>
            <strong>Advertising cookies (Google AdSense):</strong> we display ads
            through Google AdSense. Google and its partners use cookies — including
            the DoubleClick DART cookie — to serve ads based on your visits to this
            and other sites, and to measure ad performance.
          </li>
          <li>
            <strong>Analytics (if enabled):</strong> any analytics we use is
            configured to collect anonymized, aggregate usage data only.
          </li>
        </ul>

        <h2>Managing and opting out</h2>
        <p>You have several ways to control cookies:</p>
        <ul>
          <li>
            Use the consent banner shown on the site to accept or decline
            non-essential cookies.
          </li>
          <li>
            Adjust or delete cookies through your browser settings at any time.
          </li>
          <li>
            Opt out of personalized advertising via{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            , or learn more at{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&rsquo;s advertising policies
            </a>
            .
          </li>
        </ul>
        <p>
          Declining advertising cookies does not affect your ability to use any
          calculator on the site.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this Cookie Policy as our use of cookies evolves. The
          &ldquo;last updated&rdquo; date above reflects the most recent revision.
        </p>
      </section>
    </div>
  );
}
