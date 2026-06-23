"use client";

import { useState } from "react";
import { Field, useCountUp } from "@/components/calculatorUI";

type Mode = "toHourly" | "toSalary";

const usd2 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const usd0 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function SalaryToHourlyCalculator() {
  const [mode, setMode] = useState<Mode>("toHourly");
  const [salary, setSalary] = useState("65000");
  const [hourlyRate, setHourlyRate] = useState("31.25");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [weeksPerYear, setWeeksPerYear] = useState("52");

  const hpw = parseFloat(hoursPerWeek) || 0;
  const wpy = parseFloat(weeksPerYear) || 52;
  const totalAnnualHours = hpw * wpy;

  let hourly = 0;
  let annual = 0;

  if (mode === "toHourly") {
    annual = parseFloat(salary) || 0;
    hourly = totalAnnualHours > 0 ? annual / totalAnnualHours : 0;
  } else {
    hourly = parseFloat(hourlyRate) || 0;
    annual = hourly * totalAnnualHours;
  }

  const valid = hourly > 0 && hpw > 0;
  const daily = hourly * (hpw / 5);
  const weekly = hourly * hpw;
  const biweekly = weekly * 2;
  const monthly = annual / 12;

  const animHourly = useCountUp(valid ? hourly : 0);
  const animAnnual = useCountUp(valid ? annual : 0);
  const animMonthly = useCountUp(valid ? monthly : 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-card">
      {/* Mode tabs */}
      <div className="flex border-b border-line">
        {(
          [
            ["toHourly", "Salary → Hourly"],
            ["toSalary", "Hourly → Salary"],
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
          {mode === "toHourly" ? (
            <Field
              label="Annual salary"
              prefix="$"
              suffix="/yr"
              value={salary}
              onChange={setSalary}
              placeholder="65000"
            />
          ) : (
            <Field
              label="Hourly rate"
              prefix="$"
              suffix="/hr"
              value={hourlyRate}
              onChange={setHourlyRate}
              placeholder="31.25"
            />
          )}
          <Field
            label="Hours per week"
            suffix="hrs"
            value={hoursPerWeek}
            onChange={setHoursPerWeek}
            placeholder="40"
          />
          <Field
            label="Weeks worked per year"
            suffix="wks"
            value={weeksPerYear}
            onChange={setWeeksPerYear}
            placeholder="52"
          />
          {weeksPerYear !== "52" && (
            <p className="text-xs text-muted">
              Using {wpy} weeks × {hpw} hrs ={" "}
              {(totalAnnualHours).toLocaleString()} annual hours
            </p>
          )}
        </div>

        {/* Readout */}
        <div className="flex flex-col justify-center rounded-xl border border-line bg-paper/50 p-5 shadow-readout">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
            {mode === "toHourly" ? "Hourly rate" : "Annual salary"}
          </div>
          <div
            className={`tnum mt-1 font-mono text-5xl font-bold leading-none ${
              valid ? "text-brass" : "text-muted/40"
            }`}
          >
            {valid
              ? mode === "toHourly"
                ? usd2.format(animHourly)
                : usd0.format(animAnnual)
              : "—"}
          </div>
          <div className="mt-1 h-0.5 w-16 rounded bg-brass/70" />

          <div className="mt-5 space-y-3">
            <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
              <span className="text-sm text-muted">Per hour</span>
              <span className="tnum font-mono text-xl font-semibold text-ink">
                {valid ? usd2.format(animHourly) : "—"}
              </span>
            </div>
            <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
              <span className="text-sm text-muted">Per month</span>
              <span className="tnum font-mono text-lg font-medium text-teal">
                {valid ? usd0.format(animMonthly) : "—"}
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted">Per year</span>
              <span className="tnum font-mono text-lg font-medium text-ink">
                {valid ? usd0.format(animAnnual) : "—"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Breakdown strip */}
      {valid && (
        <div className="border-t border-line bg-paper/40 px-5 py-4 sm:px-6">
          <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-muted">
            Full pay breakdown
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "per hour", v: hourly, fmt: usd2 },
              { label: "per day", v: daily, fmt: usd2 },
              { label: "per 2 weeks", v: biweekly, fmt: usd0 },
              { label: "per month", v: monthly, fmt: usd0 },
            ].map((p) => (
              <div
                key={p.label}
                className="rounded-lg border border-line bg-card px-3 py-2"
              >
                <div className="text-xs text-muted">{p.label}</div>
                <div className="tnum font-mono text-sm font-semibold text-ink">
                  {p.fmt.format(p.v)}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">
            Daily rate uses a 5-day workweek. All figures are pre-tax gross pay.
          </p>
        </div>
      )}
    </div>
  );
}
