"use client";

import { useState } from "react";
import { Field, useCountUp } from "@/components/calculatorUI";

type Period = "month" | "quarter" | "year";

const periodFactor: Record<Period, number> = {
  month: 12,
  quarter: 4,
  year: 1,
};

const pct = (n: number) => `${n.toFixed(1)}%`;
const num1 = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });

export default function TurnoverCalculator() {
  const [start, setStart] = useState("120");
  const [end, setEnd] = useState("130");
  const [left, setLeft] = useState("14");
  const [period, setPeriod] = useState<Period>("year");

  const s = parseFloat(start) || 0;
  const e = parseFloat(end) || 0;
  const l = parseFloat(left) || 0;

  const avgHeadcount = (s + e) / 2;
  const valid = avgHeadcount > 0;

  const turnover = valid ? (l / avgHeadcount) * 100 : 0;
  const retention = s > 0 ? Math.max(0, ((s - l) / s) * 100) : 0;
  const annualized = turnover * periodFactor[period];

  const animTurnover = useCountUp(valid ? turnover : 0);
  const animAvg = useCountUp(valid ? avgHeadcount : 0);
  const animRetention = useCountUp(valid ? retention : 0);
  const animAnnualized = useCountUp(valid ? annualized : 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-card">
      <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-4">
          <Field
            label="Employees at start of period"
            suffix="people"
            value={start}
            onChange={setStart}
            placeholder="120"
          />
          <Field
            label="Employees at end of period"
            suffix="people"
            value={end}
            onChange={setEnd}
            placeholder="130"
          />
          <Field
            label="Employees who left during the period"
            suffix="people"
            value={left}
            onChange={setLeft}
            placeholder="14"
          />

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">
              Period length
            </span>
            <div className="inline-flex rounded-lg border border-line p-0.5 text-sm">
              {(
                [
                  ["month", "Month"],
                  ["quarter", "Quarter"],
                  ["year", "Year"],
                ] as [Period, string][]
              ).map(([p, label]) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  aria-pressed={period === p}
                  className={`rounded-md px-3 py-1.5 transition-colors ${
                    period === p
                      ? "bg-ink text-paper"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </label>
        </div>

        {/* Readout */}
        <div className="flex flex-col justify-center rounded-xl border border-line bg-paper/50 p-5 shadow-readout">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
            Turnover rate
          </div>
          <div
            className={`tnum mt-1 font-mono text-5xl font-bold leading-none ${
              valid ? "text-brass" : "text-muted/40"
            }`}
          >
            {valid ? pct(animTurnover) : "—"}
          </div>
          <div className="mt-1 h-0.5 w-16 rounded bg-brass/70" />

          <div className="mt-5 space-y-3">
            <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
              <span className="text-sm text-muted">Average headcount</span>
              <span className="tnum font-mono text-xl font-semibold text-ink">
                {valid ? num1.format(animAvg) : "—"}
              </span>
            </div>
            <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
              <span className="text-sm text-muted">Retention rate</span>
              <span className="tnum font-mono text-lg font-medium text-teal">
                {valid ? pct(animRetention) : "—"}
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted">Annualized turnover</span>
              <span className="tnum font-mono text-lg font-medium text-ink">
                {valid ? pct(animAnnualized) : "—"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {valid && (
        <div className="border-t border-line bg-paper/40 px-5 py-4 sm:px-6">
          <p className="text-xs text-muted">
            Turnover = leavers ÷ average headcount. Annualized figure scales a{" "}
            {period === "year" ? "yearly" : period === "quarter" ? "quarterly" : "monthly"}{" "}
            rate to a full year for comparison.
          </p>
        </div>
      )}
    </div>
  );
}
