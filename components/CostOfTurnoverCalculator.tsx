"use client";

import { useState } from "react";
import { Field, useCountUp } from "@/components/calculatorUI";

const usd0 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function CostOfTurnoverCalculator() {
  const [leavers, setLeavers] = useState("10");
  const [salary, setSalary] = useState("55000");
  const [pct, setPct] = useState("33");

  const n = parseFloat(leavers) || 0;
  const sal = parseFloat(salary) || 0;
  const p = parseFloat(pct) || 0;

  const valid = sal > 0 && p > 0 && n > 0;

  const costPerDeparture = sal * (p / 100);
  const totalCost = n * costPerDeparture;
  const monthlyCost = totalCost / 12;

  const animTotal = useCountUp(valid ? totalCost : 0);
  const animPer = useCountUp(valid ? costPerDeparture : 0);
  const animMonthly = useCountUp(valid ? monthlyCost : 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-card">
      <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-4">
          <Field
            label="Employees who left"
            suffix="people"
            value={leavers}
            onChange={setLeavers}
            placeholder="10"
          />
          <Field
            label="Average annual salary"
            prefix="$"
            suffix="/yr"
            value={salary}
            onChange={setSalary}
            placeholder="55000"
          />
          <Field
            label="Replacement cost"
            suffix="% of salary"
            value={pct}
            onChange={setPct}
            placeholder="33"
          />
          <p className="text-xs text-muted">
            Estimates commonly range from <span className="font-mono text-ink">30%</span>{" "}
            of salary for entry-level roles to{" "}
            <span className="font-mono text-ink">200%</span> or more for senior and
            specialist positions. 33% is a widely cited mid-range default.
          </p>
        </div>

        {/* Readout */}
        <div className="flex flex-col justify-center rounded-xl border border-line bg-paper/50 p-5 shadow-readout">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
            Total turnover cost
          </div>
          <div
            className={`tnum mt-1 font-mono text-5xl font-bold leading-none ${
              valid ? "text-brass" : "text-muted/40"
            }`}
          >
            {valid ? usd0.format(animTotal) : "—"}
          </div>
          <div className="mt-1 h-0.5 w-16 rounded bg-brass/70" />

          <div className="mt-5 space-y-3">
            <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
              <span className="text-sm text-muted">Cost per departure</span>
              <span className="tnum font-mono text-xl font-semibold text-ink">
                {valid ? usd0.format(animPer) : "—"}
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted">Roughly per month</span>
              <span className="tnum font-mono text-lg font-medium text-teal">
                {valid ? usd0.format(animMonthly) : "—"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line bg-paper/40 px-5 py-4 sm:px-6">
        <p className="text-xs text-muted">
          A planning estimate only. Real costs include recruiting, onboarding, lost
          productivity, and institutional knowledge — they vary widely by role and
          industry. Figures are pre-tax.
        </p>
      </div>
    </div>
  );
}
