"use client";

import { useState } from "react";
import { Field, useCountUp } from "@/components/calculatorUI";

const num0 = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

interface Band {
  max: number;
  label: string;
  desc: string;
  color: string;
  bg: string;
}

const BANDS: Band[] = [
  { max: 49,  label: "Low",      desc: "Absence pattern is within normal range.", color: "text-green-700", bg: "bg-green-50 border-green-200" },
  { max: 99,  label: "Medium",   desc: "Monitor the pattern. Consider an informal check-in.", color: "text-yellow-700", bg: "bg-yellow-50 border-yellow-200" },
  { max: 199, label: "Warning",  desc: "Elevated score. A formal absence review is advisable.", color: "text-orange-700", bg: "bg-orange-50 border-orange-200" },
  { max: 499, label: "High",     desc: "High absence impact. HR intervention is typically warranted.", color: "text-red-700", bg: "bg-red-50 border-red-200" },
  { max: Infinity, label: "Critical", desc: "Very high score. Immediate management action is usually triggered.", color: "text-red-900", bg: "bg-red-100 border-red-300" },
];

function getBand(score: number): Band {
  return BANDS.find((b) => score <= b.max) ?? BANDS[BANDS.length - 1];
}

export default function BradfordFactorCalculator() {
  const [spells, setSpells] = useState("3");
  const [days, setDays] = useState("7");

  const S = parseFloat(spells) || 0;
  const D = parseFloat(days) || 0;
  const score = S * S * D;
  const valid = S > 0 && D > 0;
  const band = valid ? getBand(score) : null;

  const animScore = useCountUp(valid ? score : 0);

  const barPct = valid ? Math.min((score / 500) * 100, 100) : 0;

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-card">
      <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-4">
          <Field
            label="Number of absence spells (S)"
            suffix="spells"
            value={spells}
            onChange={setSpells}
            placeholder="3"
          />
          <p className="text-xs text-muted">
            A spell is any separate period of absence, regardless of length. Three
            individual sick days count as 3 spells; a 3-day continuous absence counts as 1.
          </p>
          <Field
            label="Total days absent (D)"
            suffix="days"
            value={days}
            onChange={setDays}
            placeholder="7"
          />
          <div className="rounded-lg border border-line bg-paper/60 px-3 py-2.5">
            <div className="text-xs text-muted">Formula</div>
            <div className="mt-0.5 font-mono text-sm text-ink">
              B = S² × D ={" "}
              {valid
                ? `${S}² × ${D} = ${num0.format(score)}`
                : "—"}
            </div>
          </div>
        </div>

        {/* Readout */}
        <div className="flex flex-col justify-center rounded-xl border border-line bg-paper/50 p-5 shadow-readout">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
            Bradford Score
          </div>
          <div
            className={`tnum mt-1 font-mono text-5xl font-bold leading-none ${
              valid ? "text-brass" : "text-muted/40"
            }`}
          >
            {valid ? num0.format(animScore) : "—"}
          </div>
          <div className="mt-1 h-0.5 w-16 rounded bg-brass/70" />

          {/* Progress bar */}
          {valid && (
            <div className="mt-4">
              <div className="mb-1 flex justify-between text-[10px] text-muted">
                <span>0</span>
                <span>100</span>
                <span>200</span>
                <span>500+</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-brass transition-all"
                  style={{ width: `${barPct}%` }}
                />
              </div>
            </div>
          )}

          {band && (
            <div className={`mt-4 rounded-lg border px-3 py-3 ${band.bg}`}>
              <div className={`text-sm font-semibold ${band.color}`}>
                {band.label}
              </div>
              <p className={`mt-0.5 text-xs ${band.color}`}>{band.desc}</p>
            </div>
          )}

          <div className="mt-5 space-y-3">
            <div className="flex items-baseline justify-between border-b border-line/70 pb-2">
              <span className="text-sm text-muted">Absence spells (S)</span>
              <span className="tnum font-mono text-xl font-semibold text-ink">
                {valid ? S : "—"}
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted">Total days absent (D)</span>
              <span className="tnum font-mono text-lg font-medium text-ink">
                {valid ? D : "—"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bands reference */}
      <div className="border-t border-line bg-paper/40 px-5 py-4 sm:px-6">
        <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-muted">
          Bradford Score bands (typical thresholds)
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {BANDS.map((b) => (
            <div
              key={b.label}
              className={`rounded-lg border px-3 py-2 ${band?.label === b.label ? b.bg + " ring-1 ring-current" : "border-line bg-card"}`}
            >
              <div className={`text-xs font-semibold ${band?.label === b.label ? b.color : "text-ink"}`}>
                {b.label}
              </div>
              <div className="text-xs text-muted">
                {b.max === Infinity ? "500+" : `0–${b.max}`}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted">
          Thresholds vary by employer. The Bradford Factor is a management tool, not a disciplinary measure on its own. Always combine with a fair absence review process.
        </p>
      </div>
    </div>
  );
}
