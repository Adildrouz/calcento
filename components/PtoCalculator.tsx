"use client";

import { useState } from "react";
import { Field, useCountUp } from "@/components/calculatorUI";

type Mode = "rate" | "accrued";

const hrs4 = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 4,
  maximumFractionDigits: 4,
});
const hrs2 = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });
const days2 = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

export default function PtoCalculator() {
  const [mode, setMode] = useState<Mode>("rate");

  const [entitlement, setEntitlement] = useState("20"); // PTO days per year
  const [hoursPerDay, setHoursPerDay] = useState("8");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [hoursWorked, setHoursWorked] = useState("520");

  const days = parseFloat(entitlement) || 0;
  const hpd = parseFloat(hoursPerDay) || 0;
  const hpw = parseFloat(hoursPerWeek) || 0;
  const worked = parseFloat(hoursWorked) || 0;

  const annualPtoHours = days * hpd;
  const annualHoursWorked = hpw * 52;
  const accrualRate =
    annualHoursWorked > 0 ? annualPtoHours / annualHoursWorked : 0;

  const valid = annualHoursWorked > 0 && annualPtoHours > 0;

  // Accrual mode figures
  const perWeek = accrualRate * hpw;
  const perPayPeriod = accrualRate * hpw * 2; // 2-week pay period
  const perMonth = (accrualRate * annualHoursWorked) / 12;

  // Accrued-so-far figures
  const accruedHours = worked * accrualRate;
  const accruedDays = hpd > 0 ? accruedHours / hpd : 0;

  const animRate = useCountUp(valid ? accrualRate : 0);
  const animWeek = useCountUp(valid ? perWeek : 0);
  const animPay = useCountUp(valid ? perPayPeriod : 0);
  const animMonth = useCountUp(valid ? perMonth : 0);
  const animAccrued = useCountUp(valid ? accruedHours : 0);
  const animAccruedDays = useCountUp(valid ? accruedDays : 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-card">
      {/* Mode tabs */}
      <div className="flex border-b border-line">
        {(
          [
            ["rate", "Accrual rate"],
            ["accrued", "Accrued so far"],
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
            label="Annual PTO entitlement"
            suffix="days"
            value={entitlement}
            onChange={setEntitlement}
            placeholder="20"
          />
          <Field
            label="Hours per workday"
            suffix="hrs"
            value={hoursPerDay}
            onChange={setHoursPerDay}
            placeholder="8"
          />
          <Field
            label="Hours per week"
            suffix="hrs"
            value={hoursPerWeek}
            onChange={setHoursPerWeek}
            placeholder="40"
          />
          {mode === "accrued" && (
            <Field
              label="Hours worked so far"
              suffix="hrs"
              value={hoursWorked}
              onChange={setHoursWorked}
              placeholder="520"
            />
          )}
        </div>

        {/* Readout */}
        <div className="flex flex-col justify-center rounded-xl border border-line bg-paper/50 p-5 shadow-readout">
          {mode === "rate" ? (
            <>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
                Accrual rate
              </div>
              <div
                className={`tnum mt-1 font-mono text-5xl font-bold leading-none ${
                  valid ? "text-brass" : "text-muted/40"
                }`}
              >
                {valid ? `${hrs4.format(animRate)}` : "—"}
              </div>
              <div className="mt-1 text-xs text-muted">
                hours of PTO per hour worked
              </div>
              <div className="mt-1 h-0.5 w-16 rounded bg-brass/70" />

              <div className="mt-5 space-y-3">
                <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
                  <span className="text-sm text-muted">Accrued per week</span>
                  <span className="tnum font-mono text-xl font-semibold text-ink">
                    {valid ? `${hrs2.format(animWeek)} hrs` : "—"}
                  </span>
                </div>
                <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
                  <span className="text-sm text-muted">Per 2-week pay period</span>
                  <span className="tnum font-mono text-lg font-medium text-teal">
                    {valid ? `${hrs2.format(animPay)} hrs` : "—"}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-muted">Per month</span>
                  <span className="tnum font-mono text-lg font-medium text-ink">
                    {valid ? `${hrs2.format(animMonth)} hrs` : "—"}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
                PTO accrued
              </div>
              <div
                className={`tnum mt-1 font-mono text-5xl font-bold leading-none ${
                  valid ? "text-brass" : "text-muted/40"
                }`}
              >
                {valid ? `${hrs2.format(animAccrued)}` : "—"}
              </div>
              <div className="mt-1 text-xs text-muted">hours</div>
              <div className="mt-1 h-0.5 w-16 rounded bg-brass/70" />

              <div className="mt-5 space-y-3">
                <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
                  <span className="text-sm text-muted">As days off</span>
                  <span className="tnum font-mono text-xl font-semibold text-ink">
                    {valid ? `${days2.format(animAccruedDays)} days` : "—"}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-muted">Accrual rate</span>
                  <span className="tnum font-mono text-lg font-medium text-teal">
                    {valid ? `${hrs4.format(accrualRate)}/hr` : "—"}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="border-t border-line bg-paper/40 px-5 py-4 sm:px-6">
        <p className="text-xs text-muted">
          Accrual policies vary widely by employer and country — some grant PTO
          up front, others accrue it per hour, pay period, or month. Use this as a
          general guide and check your own policy for exact rules.
        </p>
      </div>
    </div>
  );
}
