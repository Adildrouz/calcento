"use client";

import { useState } from "react";
import { Field, useCountUp } from "@/components/calculatorUI";

type Mode = "raise" | "compare";
type RaiseType = "percent" | "amount";

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

export default function PayRaiseCalculator() {
  const [mode, setMode] = useState<Mode>("raise");
  const [raiseType, setRaiseType] = useState<RaiseType>("percent");

  const [current, setCurrent] = useState("60000");
  const [raiseValue, setRaiseValue] = useState("4");
  const [target, setTarget] = useState("64000");

  const cur = parseFloat(current) || 0;

  let pct = 0;
  let increase = 0;
  let newSalary = 0;
  let valid = false;

  if (mode === "raise") {
    const rv = parseFloat(raiseValue) || 0;
    if (cur > 0) {
      if (raiseType === "percent") {
        pct = rv;
        increase = (cur * rv) / 100;
      } else {
        increase = rv;
        pct = (increase / cur) * 100;
      }
      newSalary = cur + increase;
      valid = true;
    }
  } else {
    const tgt = parseFloat(target) || 0;
    if (cur > 0 && tgt > 0) {
      increase = tgt - cur;
      pct = (increase / cur) * 100;
      newSalary = tgt;
      valid = true;
    }
  }

  const animPct = useCountUp(valid ? pct : 0);
  const animNew = useCountUp(valid ? newSalary : 0);
  const animInc = useCountUp(valid ? increase : 0);

  const periods = [
    { label: "per year", n: 1 },
    { label: "per month", n: 12 },
    { label: "per 2 weeks", n: 26 },
    { label: "per week", n: 52 },
  ];

  const sign = increase >= 0 ? "+" : "−";
  const pctStr = `${valid ? (animPct >= 0 ? "+" : "−") : ""}${Math.abs(
    animPct
  ).toFixed(1)}%`;

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-card">
      {/* Mode tabs */}
      <div className="flex border-b border-line">
        {(
          [
            ["raise", "Calculate a raise"],
            ["compare", "Compare two salaries"],
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
            label="Current salary"
            prefix="$"
            suffix="/yr"
            value={current}
            onChange={setCurrent}
            placeholder="60000"
          />

          {mode === "raise" ? (
            <div className="space-y-3">
              <div className="inline-flex rounded-lg border border-line p-0.5 text-sm">
                {(
                  [
                    ["percent", "By percent"],
                    ["amount", "By amount"],
                  ] as [RaiseType, string][]
                ).map(([t, label]) => (
                  <button
                    key={t}
                    onClick={() => setRaiseType(t)}
                    aria-pressed={raiseType === t}
                    className={`rounded-md px-3 py-1.5 transition-colors ${
                      raiseType === t
                        ? "bg-ink text-paper"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <Field
                label={raiseType === "percent" ? "Raise" : "Raise amount"}
                prefix={raiseType === "amount" ? "$" : undefined}
                suffix={raiseType === "percent" ? "%" : "/yr"}
                value={raiseValue}
                onChange={setRaiseValue}
                placeholder={raiseType === "percent" ? "4" : "2400"}
              />
            </div>
          ) : (
            <Field
              label="New salary offer"
              prefix="$"
              suffix="/yr"
              value={target}
              onChange={setTarget}
              placeholder="64000"
            />
          )}
        </div>

        {/* Readout — the signature instrument panel */}
        <div className="flex flex-col justify-center rounded-xl border border-line bg-paper/50 p-5 shadow-readout">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
            {mode === "raise" ? "Your raise" : "Pay change"}
          </div>
          <div
            className={`tnum mt-1 font-mono text-5xl font-bold leading-none ${
              valid ? "text-brass" : "text-muted/40"
            }`}
          >
            {valid ? pctStr : "—"}
          </div>
          <div className="mt-1 h-0.5 w-16 rounded bg-brass/70" />

          <div className="mt-5 space-y-3">
            <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
              <span className="text-sm text-muted">New salary</span>
              <span className="tnum font-mono text-xl font-semibold text-ink">
                {valid ? usd0.format(animNew) : "—"}
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted">Increase</span>
              <span className="tnum font-mono text-lg font-medium text-teal">
                {valid ? `${sign}${usd0.format(Math.abs(animInc))}` : "—"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Per-period breakdown of the increase */}
      {valid && (
        <div className="border-t border-line bg-paper/40 px-5 py-4 sm:px-6">
          <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-muted">
            What the increase looks like
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {periods.map((p) => (
              <div key={p.label} className="rounded-lg border border-line bg-card px-3 py-2">
                <div className="text-xs text-muted">{p.label}</div>
                <div className="tnum font-mono text-sm font-semibold text-ink">
                  {sign}
                  {usd2.format(Math.abs(increase) / p.n)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
