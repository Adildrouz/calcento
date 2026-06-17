import type { Metadata } from "next";
import Link from "next/link";
import { calculators } from "@/lib/calculators";
import { organizationSchema, websiteSchema, faqSchema, jsonLdScript, SITE_URL } from "@/lib/jsonld";
import Faq from "@/components/Faq";

const description =
  "Free, instant calculators for pay, raises, overtime, and the everyday math of work. No sign-up.";

export const metadata: Metadata = {
  title: "Calcento — Free Pay & Workplace Calculators",
  description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Calcento — Free Pay & Workplace Calculators",
    description,
    url: SITE_URL,
    type: "website",
  },
};

const homeFaqs = [
  {
    question: "Are the Calcento calculators free to use?",
    answer:
      "Yes — every calculator on Calcento is completely free. There is no subscription, no trial, and no sign-up required. Open a tool, type your numbers, and get your result instantly.",
  },
  {
    question: "How do I use a Calcento calculator?",
    answer:
      "Each calculator has a short form at the top of the page. Fill in the fields (salary, hours, dates, etc.) and the result updates automatically as you type — no submit button needed. A step-by-step guide and worked examples sit below every tool if you want more context.",
  },
  {
    question: "Do I need to create an account or provide personal information?",
    answer:
      "No. Calcento requires no account, no email address, and no payment details. All calculations run entirely in your browser — the numbers you enter are never sent to or stored on our servers.",
  },
  {
    question: "How accurate are the results?",
    answer:
      "Every calculator uses a transparent formula that is documented beneath the tool so you can verify it yourself. Results are pre-tax estimates based on the inputs you provide. Figures will vary with your actual tax bracket, employer policy, or country. Treat them as a reliable starting point, then confirm anything important with your payroll team or a qualified professional.",
  },
  {
    question: "What calculators are available?",
    answer:
      "Calcento currently offers five free calculators: Pay Raise Calculator, Overtime Pay Calculator, Employee Turnover Rate Calculator, Cost of Turnover Calculator, and PTO Accrual Calculator. More tools are in development.",
  },
  {
    question: "Who builds and reviews the calculators?",
    answer:
      "Calcento was built by Adil Drouz, an HR Manager with over 10 years of experience in human resources, payroll, learning & development, and recruitment. Every formula and guide is reviewed for accuracy before publishing.",
  },
  {
    question: "Can I use Calcento on my phone or tablet?",
    answer:
      "Yes. Calcento is fully responsive and works on any device — desktop, tablet, or smartphone — in any modern browser with no app download required.",
  },
  {
    question: "Are the results financial or legal advice?",
    answer:
      "No. Calcento provides general guidance estimates only and is not a substitute for professional financial, legal, or tax advice. If your situation is complex or the stakes are high, please verify results with a qualified professional. See the full disclaimer for details.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-content px-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [websiteSchema(), organizationSchema(), faqSchema(homeFaqs)],
          }),
        }}
      />

      {/* Hero */}
      <section className="pb-12 pt-16 sm:pt-24">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs text-muted">
          <span className="font-mono text-teal">%</span>
          Free · no sign-up · instant
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          The everyday math of work,{" "}
          <span className="text-teal">solved in seconds.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted">
          Calcento is a growing set of clean, accurate calculators for pay,
          raises, overtime, and time off. Type your numbers, get your answer —
          no spreadsheets, no accounts.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/pay-raise-calculator"
            className="rounded-lg bg-teal px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-teal-deep"
          >
            Try the pay raise calculator
          </Link>
          <Link
            href="#calculators"
            className="rounded-lg border border-line bg-card px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-teal hover:text-teal"
          >
            Browse all
          </Link>
        </div>
      </section>

      {/* Calculator grid */}
      <section id="calculators" className="scroll-mt-20 pb-16">
        <h2 className="mb-5 font-display text-sm font-medium uppercase tracking-[0.16em] text-muted">
          Calculators
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((c) => {
            const live = c.status === "live";
            const card = (
              <div
                className={`group flex h-full flex-col justify-between rounded-2xl border border-line bg-card p-6 shadow-card transition-all ${
                  live ? "hover:-translate-y-0.5 hover:border-teal" : "opacity-70"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                      {c.title}
                    </h3>
                    {!live && (
                      <span className="rounded-full bg-brass-soft px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-brass">
                        Soon
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.tagline}
                  </p>
                </div>
                {live && (
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
                    Open
                    <span className="font-mono transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                )}
              </div>
            );
            return live ? (
              <Link key={c.slug} href={`/${c.slug}`}>
                {card}
              </Link>
            ) : (
              <div key={c.slug}>{card}</div>
            );
          })}
        </div>
      </section>

      {/* Homepage FAQ */}
      <section id="faq" className="scroll-mt-20 pb-20">
        <h2 className="mb-2 font-display text-2xl font-semibold tracking-tight text-ink">
          Frequently asked questions
        </h2>
        <p className="mb-6 text-sm text-muted">
          Everything you need to know before you start.
        </p>
        <Faq items={homeFaqs} />
        <p className="mt-4 text-xs text-muted">
          Still have a question?{" "}
          <Link href="/contact" className="text-teal hover:text-teal-deep underline">
            Contact us.
          </Link>
        </p>
      </section>
    </div>
  );
}
