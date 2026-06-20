import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/jsonld";

const description =
  "How Calcento handles data: we run calculations in your browser, use Google AdSense and cookies for advertising, and explain how to opt out.";

export const metadata: Metadata = {
  title: "Privacy Policy | Calcento",
  description,
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy | Calcento",
    description,
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-content px-5">
      <nav className="pt-6 text-xs text-muted" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-teal">
          Home
        </Link>
        <span className="mx-1.5 text-line">/</span>
        <span className="text-ink">Privacy Policy</span>
      </nav>

      <header className="pb-8 pt-5">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: June 16, 2026</p>
      </header>

      <section className="prose-calcento mx-auto max-w-prose">
        <p>
          This Privacy Policy explains what information Calcento
          (&ldquo;we,&rdquo; &ldquo;us&rdquo;) does and does not collect when you
          use this website, and how third-party services we rely on handle data.
          By using the site, you agree to the practices described here.
        </p>

        <h2>Information we collect</h2>
        <p>
          Calcento is built to be private by design. The calculators run entirely
          in your browser — the numbers you type are processed on your device and
          are not sent to or stored on our servers. We do not require an account,
          and we do not ask for your name, email, or payment details to use the
          calculators.
        </p>
        <p>
          Like most websites, our hosting provider may automatically log standard
          technical information such as your IP address, browser type, and the
          pages you visit, for security and reliability purposes.
        </p>

        <h2>Advertising and cookies</h2>
        <p>
          We use Google AdSense to display advertisements. Third-party vendors,
          including Google, use cookies to serve ads based on your prior visits to
          this and other websites.
        </p>
        <ul>
          <li>
            Google&rsquo;s use of advertising cookies — including the DoubleClick
            DART cookie — enables it and its partners to serve ads to you based on
            your visits to this site and others on the internet.
          </li>
          <li>
            You can opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            .
          </li>
          <li>
            You can learn more about how Google uses data from sites that use its
            services on the{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google advertising policies
            </a>{" "}
            page.
          </li>
        </ul>
        <p>
          For more detail on the cookies used, see our{" "}
          <Link href="/cookie-policy">Cookie Policy</Link>.
        </p>

        <h2>Analytics</h2>
        <p>
          If we use a privacy-respecting analytics service to understand aggregate
          traffic, it is configured to collect only anonymized, non-identifying
          usage statistics. We do not sell personal data.
        </p>

        <h2>Your choices and rights</h2>
        <p>
          You can control or delete cookies through your browser settings, and you
          can opt out of personalized ads through Google Ads Settings as described
          above. Declining advertising cookies does not prevent you from using any
          calculator on the site.
        </p>
        <p>
          Depending on your location, you may have additional rights under
          applicable privacy laws (such as the GDPR in the European Economic Area
          or the CCPA in California), including:
        </p>
        <ul>
          <li>
            <strong>Right to access:</strong> you may request confirmation of
            whether we hold personal data about you and, if so, a copy of that
            data.
          </li>
          <li>
            <strong>Right to deletion:</strong> you may request that we delete
            any personal data we hold about you, subject to legal obligations.
          </li>
          <li>
            <strong>Right to object:</strong> you may object to the processing
            of your personal data for direct marketing or behavioral advertising
            purposes.
          </li>
          <li>
            <strong>Right to opt out of sale (CCPA):</strong> Calcento does not
            sell personal information. We do not have actual knowledge of selling
            personal information of consumers under 16 years of age.
          </li>
        </ul>
        <p>
          Because Calcento&rsquo;s calculators run entirely in your browser and
          we do not collect or store personal data on our servers, most of these
          rights apply primarily to data held by third-party services (such as
          Google AdSense). To exercise rights related to Google&rsquo;s data
          processing, visit{" "}
          <a
            href="https://myaccount.google.com/data-and-privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&rsquo;s Data &amp; Privacy page
          </a>
          . For any other privacy request, contact us at{" "}
          <a href="mailto:hello@calcento.com">hello@calcento.com</a>.
        </p>

        <h2>Children&rsquo;s privacy</h2>
        <p>
          Calcento is intended for a general adult audience and is not directed at
          children under 13. We do not knowingly collect personal information from
          children.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will
          revise the &ldquo;last updated&rdquo; date above. Significant changes will
          be reflected on this page.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Reach us via our{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </section>
    </div>
  );
}
