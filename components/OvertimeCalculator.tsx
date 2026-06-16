"use client";

import { useState } from "react";
import { Field, useCountUp } from "@/components/calculatorUI";

type Mode = "hourly" | "salary";
type Multiplier = 1.5 | 2;

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

export default function OvertimeCalculator() {
  const [mode, setMode] = useState<Mode>("hourly");
  const [multiplier, setMultiplier] = useState<Multiplier>(1.5);

  const [rate, setRate] = useState("25");
  const [salary, setSalary] = useState("52000");
  const [regularHours, setRegularHours] = useState("40");
  const [otHours, setOtHours] = useState("5");

  const hourly =
    mode === "hourly"
      ? parseFloat(rate) || 0
      : (parseFloat(salary) || 0) / 2080;
  const reg = parseFloat(regularHours) || 0;
  const ot = parseFloat(otHours) || 0;

  const valid = hourly > 0;

  const otRate = hourly * multiplier;
  const otPay = ot * otRate;
  const regularPay = reg * hourly;
  const totalPay = regularPay + otPay;

  const animTotal = useCountUp(valid ? totalPay : 0);
  const animReg = useCountUp(valid ? regularPay : 0);
  const animOt = useCountUp(valid ? otPay : 0);
  const animOtRate = useCountUp(valid ? otRate : 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-card">
      {/* Mode tabs */}
      <div className="flex border-b border-line">
        {(
          [
            ["hourly", "Hourly rate"],
            ["salary", "From salary"],
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
          {mode === "hourly" ? (
            <Field
              label="Hourly rate"
              prefix="$"
              suffix="/hr"
              value={rate}
              onChange={setRate}
              placeholder="25"
            />
          ) : (
            <Field
              label="Annual salary"
              prefix="$"
              suffix="/yr"
              value={salary}
              onChange={setSalary}
              placeholder="52000"
            />
          )}

          {mode === "salary" && (
            <p className="text-xs text-muted">
              Hourly equivalent:{" "}
              <span className="tnum font-mono text-ink">
                {valid ? usd2.format(hourly) : "—"}
              </span>{" "}
              (salary ÷ 2,080 hours)
            </p>
          )}

          <Field
            label="Regular hours"
            suffix="hrs"
            value={regularHours}
            onChange={setRegularHours}
            placeholder="40"
          />
          <Field
            label="Overtime hours"
            suffix="hrs"
            value={otHours}
            onChange={setOtHours}
            placeholder="5"
          />

          <div className="space-y-1.5">
            <span className="block text-sm font-medium text-ink">
              Overtime multiplier
            </span>
            <div className="inline-flex rounded-lg border border-line p-0.5 text-sm">
              {(
                [
                  [1.5, "1.5× time-and-a-half"],
                  [2, "2× double time"],
                ] as [Multiplier, string][]
              ).map(([m, label]) => (
                <button
                  key={m}
                  onClick={() => setMultiplier(m)}
                  aria-pressed={multiplier === m}
                  className={`rounded-md px-3 py-1.5 transition-colors ${
                    multiplier === m
                      ? "bg-ink text-paper"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Readout */}
        <div className="flex flex-col justify-center rounded-xl border border-line bg-paper/50 p-5 shadow-readout">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
            Total weekly pay
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
              <span className="text-sm text-muted">Regular pay</span>
              <span className="tnum font-mono text-xl font-semibold text-ink">
                {valid ? usd2.format(animReg) : "—"}
              </span>
            </div>
            <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
              <span className="text-sm text-muted">Overtime pay</span>
              <span className="tnum font-mono text-lg font-medium text-teal">
                {valid ? usd2.format(animOt) : "—"}
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted">OT hourly rate</span>
              <span className="tnum font-mono text-lg font-medium text-ink">
                {valid ? `${usd2.format(animOtRate)}/hr` : "—"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Per-period view of the total */}
      {valid && (
        <div className="border-t border-line bg-paper/40 px-5 py-4 sm:px-6">
          <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-muted">
            What the total looks like
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "per week", v: totalPay },
              { label: "per 2 weeks", v: totalPay * 2 },
              { label: "per month", v: (totalPay * 52) / 12 },
              { label: "per year", v: totalPay * 52 },
            ].map((p) => (
              <div
                key={p.label}
                className="rounded-lg border border-line bg-card px-3 py-2"
              >
                <div className="text-xs text-muted">{p.label}</div>
                <div className="tnum font-mono text-sm font-semibold text-ink">
                  {usd0.format(p.v)}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">
            Assumes the same overtime each week. Figures are pre-tax.
          </p>
        </div>
      )}
    </div>
  );
}
