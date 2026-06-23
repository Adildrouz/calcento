"use client";

import { useState } from "react";
import { Field, useCountUp } from "@/components/calculatorUI";

type Mode = "percentage" | "flat";

const usd0 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const usd2 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const pct2 = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export default function BonusCalculator() {
  const [mode, setMode] = useState<Mode>("percentage");
  const [salary, setSalary] = useState("75000");
  const [bonusPct, setBonusPct] = useState("10");
  const [flatBonus, setFlatBonus] = useState("7500");

  const annualSalary = parseFloat(salary) || 0;
  const pct = parseFloat(bonusPct) || 0;

  let bonusAmount = 0;
  let bonusPercent = 0;

  if (mode === "percentage") {
    bonusAmount = annualSalary * (pct / 100);
    bonusPercent = pct / 100;
  } else {
    bonusAmount = parseFloat(flatBonus) || 0;
    bonusPercent = annualSalary > 0 ? bonusAmount / annualSalary : 0;
  }

  const totalComp = annualSalary + bonusAmount;
  const valid = annualSalary > 0 && bonusAmount > 0;

  const animBonus = useCountUp(valid ? bonusAmount : 0);
  const animTotal = useCountUp(valid ? totalComp : 0);

  const tiers = [
    { label: "Below average", range: "< 5%", active: bonusPercent < 0.05 },
    { label: "Average", range: "5–10%", active: bonusPercent >= 0.05 && bonusPercent < 0.10 },
    { label: "Strong", range: "10–20%", active: bonusPercent >= 0.10 && bonusPercent < 0.20 },
    { label: "Exceptional", range: "20%+", active: bonusPercent >= 0.20 },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-card">
      {/* Mode tabs */}
      <div className="flex border-b border-line">
        {(
          [
            ["percentage", "% of salary"],
            ["flat", "Flat amount"],
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
          <Field
            label="Annual base salary"
            prefix="$"
            suffix="/yr"
            value={salary}
            onChange={setSalary}
            placeholder="75000"
          />
          {mode === "percentage" ? (
            <Field
              label="Bonus percentage"
              suffix="%"
              value={bonusPct}
              onChange={setBonusPct}
              placeholder="10"
            />
          ) : (
            <Field
              label="Bonus amount"
              prefix="$"
              value={flatBonus}
              onChange={setFlatBonus}
              placeholder="7500"
            />
          )}

          {/* Tier indicator */}
          {valid && (
            <div className="space-y-1.5">
              <span className="block text-sm font-medium text-ink">Bonus tier</span>
              <div className="grid grid-cols-4 gap-1">
                {tiers.map((t) => (
                  <div
                    key={t.label}
                    className={`rounded-md px-2 py-2 text-center transition-colors ${
                      t.active
                        ? "bg-teal text-paper"
                        : "border border-line bg-paper/40 text-muted"
                    }`}
                  >
                    <div className="text-[10px] font-medium uppercase tracking-wide">{t.label}</div>
                    <div className="mt-0.5 font-mono text-[11px]">{t.range}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Readout */}
        <div className="flex flex-col justify-center rounded-xl border border-line bg-paper/50 p-5 shadow-readout">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
            Bonus amount
          </div>
          <div
            className={`tnum mt-1 font-mono text-5xl font-bold leading-none ${
              valid ? "text-brass" : "text-muted/40"
            }`}
          >
            {valid ? usd0.format(animBonus) : "—"}
          </div>
          {valid && (
            <div className="mt-1 text-xs text-muted">
              {pct2.format(bonusPercent)} of base salary
            </div>
          )}
          <div className="mt-1 h-0.5 w-16 rounded bg-brass/70" />

          <div className="mt-5 space-y-3">
            <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
              <span className="text-sm text-muted">Base salary</span>
              <span className="tnum font-mono text-xl font-semibold text-ink">
                {valid ? usd0.format(annualSalary) : "—"}
              </span>
            </div>
            <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
              <span className="text-sm text-muted">Bonus (gross)</span>
              <span className="tnum font-mono text-lg font-medium text-teal">
                {valid ? usd0.format(animBonus) : "—"}
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted">Total compensation</span>
              <span className="tnum font-mono text-lg font-semibold text-ink">
                {valid ? usd0.format(animTotal) : "—"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Breakdown strip */}
      {valid && (
        <div className="border-t border-line bg-paper/40 px-5 py-4 sm:px-6">
          <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-muted">
            Bonus paid out per period
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "if quarterly", v: bonusAmount / 4 },
              { label: "if monthly", v: bonusAmount / 12 },
              { label: "per biweek (spread)", v: bonusAmount / 26 },
              { label: "per week (spread)", v: bonusAmount / 52 },
            ].map((p) => (
              <div key={p.label} className="rounded-lg border border-line bg-card px-3 py-2">
                <div className="text-xs text-muted">{p.label}</div>
                <div className="tnum font-mono text-sm font-semibold text-ink">
                  {usd2.format(p.v)}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">
            All figures are pre-tax gross amounts. Bonus payment timing depends on your employer&apos;s schedule.
          </p>
        </div>
      )}
    </div>
  );
}
