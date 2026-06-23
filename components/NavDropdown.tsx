"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GROUPS = [
  {
    label: "Pay & Salary",
    accent: "bg-teal",
    items: [
      { slug: "pay-raise-calculator",        name: "Pay Raise",          desc: "Raise by % or dollar amount" },
      { slug: "salary-to-hourly-calculator", name: "Salary to Hourly",   desc: "Convert annual pay to hourly" },
      { slug: "overtime-pay-calculator",     name: "Overtime Pay",       desc: "Time-and-a-half & double time" },
      { slug: "bonus-calculator",            name: "Bonus",              desc: "Performance bonus & total comp" },
    ],
  },
  {
    label: "Time & Leave",
    accent: "bg-[#0b5750]",
    items: [
      { slug: "working-hours-calculator",  name: "Working Hours",  desc: "Weekly timesheet with overtime" },
      { slug: "vacation-days-calculator",  name: "Vacation Days",  desc: "Days remaining & pro-rata leave" },
      { slug: "pto-accrual-calculator",    name: "PTO Accrual",    desc: "Accrual rate & balance earned" },
    ],
  },
  {
    label: "Hiring & Retention",
    accent: "bg-brass",
    items: [
      { slug: "job-offer-comparison-calculator", name: "Job Offer Comparison", desc: "Compare two offers by net value" },
      { slug: "employee-turnover-calculator",    name: "Turnover Rate",        desc: "Attrition & retention rate" },
      { slug: "cost-of-turnover-calculator",     name: "Cost of Turnover",     desc: "What each departure costs" },
      { slug: "bradford-factor-calculator",      name: "Bradford Factor",      desc: "Absence score & HR bands" },
    ],
  },
];

export default function NavDropdown() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on route change
  useEffect(() => {
    setOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* ── Desktop nav ─────────────────────────────── */}
      <nav className="hidden items-center gap-1 sm:flex">
        {/* Calculators dropdown trigger */}
        <div ref={ref} className="relative">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-haspopup="true"
            className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              open ? "bg-teal-soft text-teal-deep" : "text-muted hover:bg-teal-soft/60 hover:text-ink"
            }`}
          >
            Calculators
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              aria-hidden
            >
              <path
                d="M2 4L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dropdown panel */}
          {open && (
            <div
              className="absolute right-0 top-full z-50 mt-2 w-[640px] overflow-hidden rounded-2xl border border-line bg-card shadow-[0_8px_32px_-8px_rgba(16,42,51,0.18),0_0_0_1px_rgba(16,42,51,0.04)]"
              role="menu"
            >
              {/* Panel header */}
              <div className="border-b border-line px-5 py-3">
                <p className="text-xs text-muted">
                  <span className="font-semibold text-ink">11 free calculators</span>
                  {" "}· No sign-up · Instant results
                </p>
              </div>

              {/* Three columns */}
              <div className="grid grid-cols-3 gap-0 divide-x divide-line">
                {GROUPS.map((group) => (
                  <div key={group.label} className="p-4">
                    {/* Category header */}
                    <div className="mb-3 flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${group.accent}`} />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted/70">
                        {group.label}
                      </span>
                    </div>

                    {/* Items */}
                    <ul className="space-y-0.5" role="none">
                      {group.items.map((item) => (
                        <li key={item.slug} role="none">
                          <Link
                            href={`/${item.slug}`}
                            role="menuitem"
                            className="group flex flex-col rounded-lg px-2.5 py-2 transition-colors hover:bg-teal-soft"
                            onClick={() => setOpen(false)}
                          >
                            <span className="text-[13px] font-medium text-ink group-hover:text-teal-deep">
                              {item.name}
                            </span>
                            <span className="text-[11px] leading-snug text-muted">
                              {item.desc}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Panel footer */}
              <div className="border-t border-line bg-paper/50 px-5 py-2.5">
                <Link
                  href="/#calculators"
                  className="text-xs font-medium text-teal hover:text-teal-deep"
                  onClick={() => setOpen(false)}
                >
                  View all calculators on one page →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Blog link */}
        <Link
          href="/blog"
          className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-teal-soft/60 hover:text-ink"
        >
          Blog
        </Link>

        {/* CTA */}
        <Link
          href="/pay-raise-calculator"
          className="ml-2 rounded-lg bg-teal px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-teal-deep"
        >
          Open a calculator →
        </Link>
      </nav>

      {/* ── Mobile hamburger ────────────────────────── */}
      <div className="flex items-center gap-2 sm:hidden">
        <Link
          href="/pay-raise-calculator"
          className="rounded-lg bg-teal px-3.5 py-2 text-sm font-medium text-paper"
        >
          Open calculator
        </Link>
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label="Open menu"
          className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-card text-ink transition-colors hover:border-teal"
        >
          {mobileOpen ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M2 4H14M2 8H14M2 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile menu panel ───────────────────────── */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full z-50 border-b border-line bg-card shadow-[0_8px_24px_-8px_rgba(16,42,51,0.16)] sm:hidden">
          <div className="mx-auto max-w-content px-5 py-4">
            {GROUPS.map((group, gi) => (
              <div key={group.label} className={gi > 0 ? "mt-4 border-t border-line pt-4" : ""}>
                <div className="mb-2 flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${group.accent}`} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted/70">
                    {group.label}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {group.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      className="rounded-lg px-3 py-2.5 transition-colors hover:bg-teal-soft"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="text-sm font-medium text-ink">{item.name}</div>
                      <div className="text-[11px] text-muted">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile footer links */}
            <div className="mt-4 flex items-center gap-4 border-t border-line pt-4">
              <Link
                href="/blog"
                className="text-sm font-medium text-muted hover:text-ink"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted hover:text-ink"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
