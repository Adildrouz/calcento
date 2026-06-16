import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/jsonld";

const description =
  "Contact Calcento — questions, feedback, corrections, or calculator suggestions. Reach us by email at hello@calcento.com.";

export const metadata: Metadata = {
  title: "Contact | Calcento",
  description,
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content px-5">
      <nav className="pt-6 text-xs text-muted" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-teal">
          Home
        </Link>
        <span className="mx-1.5 text-line">/</span>
        <span className="text-ink">Contact</span>
      </nav>

      <header className="pb-8 pt-5">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Contact us
        </h1>
        <p className="mt-2 max-w-prose text-base text-muted">
          Questions, feedback, corrections, or a calculator you&rsquo;d like to see?
          We read every message.
        </p>
      </header>

      <section className="prose-calcento mx-auto max-w-prose">
        <p>
          The best way to reach Calcento is by email. Whether you have spotted an
          error in a calculation, have a suggestion for a new tool, or just have a
          question about how something works, we would be glad to hear from you.
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:hello@calcento.com">hello@calcento.com</a>
        </p>

        <p>
          We aim to reply within a few business days. If you are writing about a
          possible error in a calculator or guide, it helps to include the page and
          the numbers you entered so we can reproduce what you saw.
        </p>

        <p className="text-sm text-muted">
          Please note that we can only offer general information and cannot provide
          personalized financial, legal, or tax advice. See our{" "}
          <Link href="/disclaimer">disclaimer</Link> for details.
        </p>
      </section>
    </div>
  );
}
