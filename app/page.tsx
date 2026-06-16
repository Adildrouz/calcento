import Link from "next/link";
import { calculators } from "@/lib/calculators";
import { organizationSchema, jsonLdScript } from "@/lib/jsonld";

export default function Home() {
  return (
    <div className="mx-auto max-w-content px-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationSchema()) }}
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
      <section id="calculators" className="scroll-mt-20 pb-8">
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
    </div>
  );
}
