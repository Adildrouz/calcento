import type { Metadata } from "next";
import Link from "next/link";
import { calculators } from "@/lib/calculators";
import {
  organizationSchema,
  websiteSchema,
  faqSchema,
  jsonLdScript,
  SITE_URL,
} from "@/lib/jsonld";
import Faq from "@/components/Faq";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const description =
  "Free workplace calculators for pay raises, overtime, PTO, and employee turnover. Instant results, no account, every formula explained in plain English.";

export const metadata: Metadata = {
  title: "Calcento — Free Workplace Calculators",
  description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Calcento — Free Workplace Calculators",
    description,
    url: SITE_URL,
    type: "website",
  },
};

const audiences = [
  {
    label: "For Employees",
    icon: "👤",
    accent: "border-l-teal",
    headline: "Get a clear answer before your next conversation.",
    bullets: [
      "Is this raise offer good? See the percentage and what it means per paycheck.",
      "How much overtime will I earn? Get the exact figure before you commit to extra hours.",
      "How much PTO have I accrued? Know your balance without waiting for HR.",
    ],
    cta: { label: "Check a pay raise", href: "/pay-raise-calculator" },
  },
  {
    label: "For HR & People Teams",
    icon: "🏢",
    accent: "border-l-[#b97a2b]",
    headline: "Quick answers between HRIS tasks.",
    bullets: [
      "Explain a raise to an employee in seconds — show them the math, not just the number.",
      "Benchmark your turnover rate and estimate the real cost of each departure.",
      "No need to open a spreadsheet for a one-off calculation.",
    ],
    cta: { label: "Calculate turnover cost", href: "/cost-of-turnover-calculator" },
  },
  {
    label: "For Managers & Small Businesses",
    icon: "📊",
    accent: "border-l-[#0b5750]",
    headline: "No HRIS? You don't need one for this.",
    bullets: [
      "Budget a pay raise without a compensation team.",
      "Understand overtime costs before scheduling extra shifts.",
      "Measure team turnover and see what replacing people actually costs.",
    ],
    cta: { label: "Estimate turnover rate", href: "/employee-turnover-calculator" },
  },
];

const trust = [
  {
    icon: "⚡",
    title: "Results in seconds",
    body: "Type your numbers and the answer updates instantly. No submit button, no loading screen.",
  },
  {
    icon: "🔓",
    title: "No account. Ever.",
    body: "No sign-up, no email, no password. Your numbers stay in your browser and go nowhere.",
  },
  {
    icon: "🔢",
    title: "Every formula shown",
    body: "Each calculator explains exactly how the result is calculated — so you can verify it yourself.",
  },
  {
    icon: "💬",
    title: "Plain English, not jargon",
    body: "Guides written by an HR Manager with 10+ years of experience. Clear language, realistic examples.",
  },
];

const homeFaqs = [
  {
    question: "Are the Calcento calculators free to use?",
    answer:
      "Yes — every calculator is completely free. No subscription, no trial, no sign-up required. Open a tool, type your numbers, and get your result instantly.",
  },
  {
    question: "Who is Calcento for?",
    answer:
      "Anyone who needs a quick, accurate workplace calculation. Employees checking a raise or overtime, HR teams who need a fast answer between tasks, and managers or small business owners without a dedicated HRIS system.",
  },
  {
    question: "How is this different from using a spreadsheet?",
    answer:
      "Calcento is faster for one-off questions — no file to open, no formula to remember, no cell to format. You get the answer plus a plain-English explanation of how it was calculated. For ongoing tracking, a spreadsheet may be the right tool; for a quick, accurate answer right now, Calcento is faster.",
  },
  {
    question: "I already have an HRIS. Why would I use this?",
    answer:
      "HRIS systems are built for data management and workflow — not for explaining a calculation to an employee in a meeting, or for a quick sanity check on a number. Calcento fills that gap: instant answers with the formula shown, no system access required.",
  },
  {
    question: "How accurate are the results?",
    answer:
      "Results are based on the inputs you provide and use standard formulas documented beneath each tool. All figures are pre-tax estimates — your actual take-home will depend on your tax bracket, employer policy, and location. Use Calcento as a reliable starting point, and verify anything important with your payroll team or a qualified professional.",
  },
  {
    question: "Do I need to create an account or provide personal information?",
    answer:
      "No. No account, no email, no data collection. Every calculation runs entirely in your browser — the numbers you enter are never sent to or stored on our servers.",
  },
  {
    question: "Can I use Calcento on my phone or tablet?",
    answer:
      "Yes. Calcento works on any device in any modern browser. No app download required.",
  },
  {
    question: "Are the results financial or legal advice?",
    answer:
      "No. Calcento provides general guidance estimates only and is not a substitute for professional financial, legal, or tax advice. See the full disclaimer for details.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-content px-5">
      <StickyMobileCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [websiteSchema(), organizationSchema(), faqSchema(homeFaqs)],
          }),
        }}
      />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="pb-14 pt-16 sm:pt-24">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs text-muted">
          <span className="font-mono text-teal">%</span>
          Free · no account · instant results
        </p>

        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          The fastest way to understand{" "}
          <span className="text-teal">workplace numbers.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Free calculators for pay raises, overtime, PTO, and employee turnover.
          Type your numbers and get an instant, accurate answer — with the
          formula shown and explained in plain English. No account. No
          spreadsheet. No waiting.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/pay-raise-calculator"
            className="rounded-lg bg-teal px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-teal-deep"
          >
            Try a calculator →
          </Link>
          <Link
            href="#who-its-for"
            className="rounded-lg border border-line bg-card px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-teal hover:text-teal"
          >
            Who is this for?
          </Link>
        </div>
      </section>

      {/* ── Audience segmentation ──────────────────────────────── */}
      <section id="who-its-for" className="scroll-mt-20 pb-16">
        <h2 className="mb-2 font-display text-sm font-medium uppercase tracking-[0.16em] text-muted">
          Who it&rsquo;s for
        </h2>
        <p className="mb-7 max-w-xl text-base text-ink">
          Whether you&rsquo;re an employee, an HR professional, or a manager —
          Calcento gives you a fast, honest answer.
        </p>

        <div className="grid gap-5 sm:grid-cols-3">
          {audiences.map((a) => (
            <div
              key={a.label}
              className={`flex flex-col justify-between rounded-2xl border border-line border-l-4 bg-card p-6 shadow-card ${a.accent}`}
            >
              <div>
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-teal-soft px-3 py-1 text-xs font-medium text-teal">
                  <span>{a.icon}</span>
                  {a.label}
                </p>
                <h3 className="mb-4 font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                  {a.headline}
                </h3>
                <ul className="space-y-3">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-0.5 font-mono text-teal">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={a.cta.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:text-teal-deep"
              >
                {a.cta.label}
                <span className="font-mono">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Calculator grid ────────────────────────────────────── */}
      <section id="calculators" className="scroll-mt-20 pb-16">
        <h2 className="mb-2 font-display text-sm font-medium uppercase tracking-[0.16em] text-muted">
          All calculators
        </h2>
        <p className="mb-7 text-base text-ink">
          Five free tools. More on the way.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((c) => {
            const live = c.status === "live";
            const card = (
              <div
                className={`group flex h-full flex-col justify-between rounded-2xl border border-line bg-card p-6 shadow-card transition-all ${
                  live
                    ? "hover:-translate-y-0.5 hover:border-teal"
                    : "opacity-60"
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
                    Open calculator
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

      {/* ── Trust pillars ──────────────────────────────────────── */}
      <section className="pb-16">
        <h2 className="mb-2 font-display text-sm font-medium uppercase tracking-[0.16em] text-muted">
          Why Calcento
        </h2>
        <p className="mb-7 max-w-xl text-base text-ink">
          Built for people who need a quick, honest answer — not another tool to
          manage.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-line bg-card p-6 shadow-card"
            >
              <span className="text-2xl" aria-hidden>
                {t.icon}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-ink">
                {t.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
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
          <Link
            href="/contact"
            className="text-teal underline hover:text-teal-deep"
          >
            Contact us.
          </Link>
        </p>
      </section>
    </div>
  );
}
