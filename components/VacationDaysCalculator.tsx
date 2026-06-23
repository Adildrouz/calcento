"use client";

import { useState } from "react";
import { Field, useCountUp } from "@/components/calculatorUI";

type Mode = "remaining" | "prorata";

const num2 = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });
const num1 = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });

export default function VacationDaysCalculator() {
  const [mode, setMode] = useState<Mode>("remaining");

  // Days remaining mode
  const [entitlement, setEntitlement] = useState("20");
  const [used, setUsed] = useState("8");
  const [pending, setPending] = useState("3");
  const [carryOver, setCarryOver] = useState("0");

  // Pro-rata mode
  const [annualDays, setAnnualDays] = useState("20");
  const [monthsWorked, setMonthsWorked] = useState("7");

  // --- Remaining mode ---
  const totalDays = parseFloat(entitlement) || 0;
  const usedDays = parseFloat(used) || 0;
  const pendingDays = parseFloat(pending) || 0;
  const carried = parseFloat(carryOver) || 0;
  const available = totalDays + carried;
  const remaining = available - usedDays - pendingDays;
  const remainingValid = totalDays > 0;

  // --- Pro-rata mode ---
  const proAnnual = parseFloat(annualDays) || 0;
  const months = Math.min(parseFloat(monthsWorked) || 0, 12);
  const earned = (months / 12) * proAnnual;
  const prorataValid = proAnnual > 0 && months > 0;

  const animRemaining = useCountUp(remainingValid ? Math.max(remaining, 0) : 0);
  const animEarned = useCountUp(prorataValid ? earned : 0);

  const usedPct = available > 0 ? Math.min((usedDays / available) * 100, 100) : 0;
  const pendingPct = available > 0 ? Math.min((pendingDays / available) * 100, 100) : 0;
  const barUsed = usedPct;
  const barPending = Math.min(pendingPct, 100 - barUsed);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-card">
      {/* Mode tabs */}
      <div className="flex border-b border-line">
        {(
          [
            ["remaining", "Days remaining"],
            ["prorata", "Pro-rata for new hire"],
          ] as [Mode, string][]
        ).map(([m, label]) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            aria-pressed={mode === m}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              mode === m
                ? "bg-teal-soft text-teal-deep"
                : "text-muted hover:text-ink"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-4">
          {mode === "remaining" ? (
            <>
              <Field
                label="Annual entitlement"
                suffix="days"
                value={entitlement}
                onChange={setEntitlement}
                placeholder="20"
              />
              <Field
                label="Carry-over from last year"
                suffix="days"
                value={carryOver}
                onChange={setCarryOver}
                placeholder="0"
              />
              <Field
                label="Days already taken"
                suffix="days"
                value={used}
                onChange={setUsed}
                placeholder="8"
              />
              <Field
                label="Days booked (pending)"
                suffix="days"
                value={pending}
                onChange={setPending}
                placeholder="3"
              />
            </>
          ) : (
            <>
              <Field
                label="Full-year entitlement"
                suffix="days"
                value={annualDays}
                onChange={setAnnualDays}
                placeholder="20"
              />
              <Field
                label="Full months worked this year"
                suffix="months"
                value={monthsWorked}
                onChange={setMonthsWorked}
                placeholder="7"
              />
              <p className="text-xs text-muted">
                Uses a straight monthly proration: months ÷ 12 × annual
                entitlement. Check your employer&rsquo;s rounding policy.
              </p>
            </>
          )}
        </div>

        {/* Readout */}
        <div className="flex flex-col justify-center rounded-xl border border-line bg-paper/50 p-5 shadow-readout">
          {mode === "remaining" ? (
            <>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
                Days remaining
              </div>
              <div
                className={`tnum mt-1 font-mono text-5xl font-bold leading-none ${
                  remainingValid
                    ? remaining >= 0
                      ? "text-brass"
                      : "text-red-500"
                    : "text-muted/40"
                }`}
              >
                {remainingValid ? num1.format(animRemaining) : "—"}
              </div>
              <div className="mt-1 h-0.5 w-16 rounded bg-brass/70" />

              {remainingValid && available > 0 && (
                <div className="mt-4">
                  <div className="mb-1 flex justify-between text-xs text-muted">
                    <span>Used + pending</span>
                    <span>{num1.format(usedDays + pendingDays)} / {num1.format(available)} days</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-line">
                    <div
                      className="flex h-full"
                      style={{ width: `${Math.min(barUsed + barPending, 100)}%` }}
                    >
                      <div
                        className="h-full bg-teal"
                        style={{ width: `${(barUsed / (barUsed + barPending || 1)) * 100}%` }}
                      />
                      <div
                        className="h-full bg-brass/60"
                        style={{ width: `${(barPending / (barUsed + barPending || 1)) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="mt-1 flex gap-4 text-[10px] text-muted">
                    <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-teal" />taken</span>
                    <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-brass/60" />pending</span>
                  </div>
                </div>
              )}

              <div className="mt-5 space-y-3">
                <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
                  <span className="text-sm text-muted">Total available</span>
                  <span className="tnum font-mono text-xl font-semibold text-ink">
                    {remainingValid ? `${num1.format(available)} days` : "—"}
                  </span>
                </div>
                <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
                  <span className="text-sm text-muted">Taken</span>
                  <span className="tnum font-mono text-lg font-medium text-teal">
                    {remainingValid ? `${num1.format(usedDays)} days` : "—"}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-muted">Pending / booked</span>
                  <span className="tnum font-mono text-lg font-medium text-ink">
                    {remainingValid ? `${num1.format(pendingDays)} days` : "—"}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
                Vacation days earned
              </div>
              <div
                className={`tnum mt-1 font-mono text-5xl font-bold leading-none ${
                  prorataValid ? "text-brass" : "text-muted/40"
                }`}
              >
                {prorataValid ? num2.format(animEarned) : "—"}
              </div>
              <div className="mt-1 text-xs text-muted">days out of {proAnnual}</div>
              <div className="mt-1 h-0.5 w-16 rounded bg-brass/70" />

              {prorataValid && (
                <div className="mt-4">
                  <div className="mb-1 flex justify-between text-xs text-muted">
                    <span>Progress through year</span>
                    <span>{months} / 12 months</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-line">
                    <div
                      className="h-full rounded-full bg-teal transition-all"
                      style={{ width: `${(months / 12) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="mt-5 space-y-3">
                <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
                  <span className="text-sm text-muted">Days per month</span>
                  <span className="tnum font-mono text-xl font-semibold text-ink">
                    {prorataValid ? `${num2.format(proAnnual / 12)} days` : "—"}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-muted">Remaining to earn</span>
                  <span className="tnum font-mono text-lg font-medium text-teal">
                    {prorataValid ? `${num2.format(proAnnual - earned)} days` : "—"}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="border-t border-line bg-paper/40 px-5 py-4 sm:px-6">
        <p className="text-xs text-muted">
          Vacation policies vary by employer — some cap carry-over, require
          minimum notice, or use a different proration method. Use these figures
          as a guide and confirm the details with HR.
        </p>
      </div>
    </div>
  );
}
