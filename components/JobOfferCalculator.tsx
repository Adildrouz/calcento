"use client";

import { useState } from "react";
import { Field } from "@/components/calculatorUI";

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

interface Offer {
  label: string;
  salary: string;
  bonusPct: string;
  ptoDays: string;
  commuteCost: string;
  healthPremium: string;
}

const defaults: [Offer, Offer] = [
  {
    label: "Job A",
    salary: "80000",
    bonusPct: "10",
    ptoDays: "15",
    commuteCost: "200",
    healthPremium: "150",
  },
  {
    label: "Job B",
    salary: "72000",
    bonusPct: "15",
    ptoDays: "25",
    commuteCost: "50",
    healthPremium: "80",
  },
];

function calcTotalComp(o: Offer) {
  const base = parseFloat(o.salary) || 0;
  const bonus = base * ((parseFloat(o.bonusPct) || 0) / 100);
  const commute = (parseFloat(o.commuteCost) || 0) * 12;
  const health = (parseFloat(o.healthPremium) || 0) * 12;
  const totalComp = base + bonus;
  const netComp = totalComp - commute - health;
  const ptoDays = parseFloat(o.ptoDays) || 0;
  const dailyRate = base / 260;
  const ptoValue = ptoDays * dailyRate;
  return { base, bonus, totalComp, commute, health, netComp, ptoDays, ptoValue, dailyRate };
}

export default function JobOfferCalculator() {
  const [offers, setOffers] = useState<[Offer, Offer]>(defaults);

  const updateOffer = (idx: 0 | 1, field: keyof Offer, value: string) => {
    setOffers((prev) => {
      const next = [...prev] as [Offer, Offer];
      next[idx] = { ...next[idx], [field]: value };
      return next;
    });
  };

  const a = calcTotalComp(offers[0]);
  const b = calcTotalComp(offers[1]);

  const aValid = a.base > 0;
  const bValid = b.base > 0;
  const bothValid = aValid && bValid;

  const diff = a.netComp - b.netComp;
  const winner = diff > 0 ? "A" : diff < 0 ? "B" : null;
  const diffAbs = Math.abs(diff);

  const ptoDiff = a.ptoDays - b.ptoDays;
  const ptoValueDiff = a.ptoValue - b.ptoValue;

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-card">
      {/* Two columns */}
      <div className="grid md:grid-cols-2">
        {([0, 1] as const).map((idx) => {
          const o = offers[idx];
          const c = idx === 0 ? a : b;
          const isWinner = winner === (idx === 0 ? "A" : "B");
          return (
            <div
              key={idx}
              className={`p-5 sm:p-6 ${idx === 0 ? "border-b border-line md:border-b-0 md:border-r" : ""}`}
            >
              <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${isWinner && bothValid ? "bg-teal text-paper" : "border border-line bg-card text-muted"}`}>
                {isWinner && bothValid && <span>✓</span>}
                {o.label}
                {isWinner && bothValid && " — better net value"}
              </div>

              <div className="space-y-3">
                <Field
                  label="Base salary"
                  prefix="$"
                  suffix="/yr"
                  value={o.salary}
                  onChange={(v) => updateOffer(idx, "salary", v)}
                  placeholder="75000"
                />
                <Field
                  label="Target bonus"
                  suffix="%"
                  value={o.bonusPct}
                  onChange={(v) => updateOffer(idx, "bonusPct", v)}
                  placeholder="10"
                />
                <Field
                  label="PTO days / year"
                  suffix="days"
                  value={o.ptoDays}
                  onChange={(v) => updateOffer(idx, "ptoDays", v)}
                  placeholder="20"
                />
                <Field
                  label="Monthly commute cost"
                  prefix="$"
                  suffix="/mo"
                  value={o.commuteCost}
                  onChange={(v) => updateOffer(idx, "commuteCost", v)}
                  placeholder="200"
                />
                <Field
                  label="Monthly health premium"
                  prefix="$"
                  suffix="/mo"
                  value={o.healthPremium}
                  onChange={(v) => updateOffer(idx, "healthPremium", v)}
                  placeholder="150"
                />
              </div>

              {/* Per-offer summary */}
              <div className="mt-5 rounded-xl border border-line bg-paper/50 p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">Base salary</span>
                    <span className="tnum font-mono font-medium text-ink">{usd0.format(c.base)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">+ Target bonus</span>
                    <span className="tnum font-mono font-medium text-teal">{usd0.format(c.bonus)}</span>
                  </div>
                  <div className="flex justify-between border-t border-line/70 pt-2">
                    <span className="text-muted font-medium">Total comp</span>
                    <span className="tnum font-mono font-semibold text-ink">{usd0.format(c.totalComp)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">− Commute (annual)</span>
                    <span className="tnum font-mono text-muted">{usd0.format(c.commute)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">− Health premium (annual)</span>
                    <span className="tnum font-mono text-muted">{usd0.format(c.health)}</span>
                  </div>
                  <div className="flex justify-between border-t border-line/70 pt-2">
                    <span className="font-medium text-ink">Net effective value</span>
                    <span className={`tnum font-mono text-lg font-bold ${isWinner && bothValid ? "text-teal" : "text-ink"}`}>
                      {usd0.format(c.netComp)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison strip */}
      {bothValid && (
        <div className="border-t border-line bg-paper/40 px-5 py-5 sm:px-6">
          <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-muted">
            Side-by-side comparison
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-line bg-card px-4 py-3">
              <div className="text-xs text-muted">Net value difference</div>
              <div className={`tnum mt-1 font-mono text-xl font-bold ${diff > 0 ? "text-teal" : diff < 0 ? "text-brass" : "text-ink"}`}>
                {diff === 0 ? "Equal" : `${winner} wins by ${usd0.format(diffAbs)}`}
              </div>
            </div>
            <div className="rounded-lg border border-line bg-card px-4 py-3">
              <div className="text-xs text-muted">PTO difference</div>
              <div className={`tnum mt-1 font-mono text-xl font-bold ${ptoDiff > 0 ? "text-teal" : ptoDiff < 0 ? "text-brass" : "text-ink"}`}>
                {ptoDiff === 0
                  ? "Equal"
                  : `${ptoDiff > 0 ? "A" : "B"} has ${Math.abs(ptoDiff)} more days`}
              </div>
              {ptoValueDiff !== 0 && (
                <div className="text-xs text-muted">
                  ≈ {usd0.format(Math.abs(ptoValueDiff))} in daily pay value
                </div>
              )}
            </div>
            <div className="rounded-lg border border-line bg-card px-4 py-3">
              <div className="text-xs text-muted">Commute + health savings</div>
              <div className="tnum mt-1 font-mono text-xl font-bold text-ink">
                {usd0.format(Math.abs((a.commute + a.health) - (b.commute + b.health)))}
                <span className="ml-1 text-sm font-normal text-muted">
                  {(a.commute + a.health) < (b.commute + b.health) ? "lower for A" : (b.commute + b.health) < (a.commute + a.health) ? "lower for B" : "equal"}
                </span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted">
            Net value = total comp minus commute and health costs. PTO value uses base salary ÷ 260 working days. Figures are pre-tax estimates.
          </p>
        </div>
      )}
    </div>
  );
}
