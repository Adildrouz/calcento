"use client";

import { useState } from "react";
import { useCountUp } from "@/components/calculatorUI";

const num2 = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });
const usd2 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

type DayRow = { startH: string; startM: string; endH: string; endM: string; breakMin: string; enabled: boolean };

const DEFAULT_DAYS: DayRow[] = [
  { startH: "9", startM: "00", endH: "17", endM: "00", breakMin: "30", enabled: true },
  { startH: "9", startM: "00", endH: "17", endM: "00", breakMin: "30", enabled: true },
  { startH: "9", startM: "00", endH: "17", endM: "00", breakMin: "30", enabled: true },
  { startH: "9", startM: "00", endH: "17", endM: "00", breakMin: "30", enabled: true },
  { startH: "9", startM: "00", endH: "17", endM: "00", breakMin: "30", enabled: true },
  { startH: "9", startM: "00", endH: "12", endM: "00", breakMin: "0", enabled: false },
  { startH: "9", startM: "00", endH: "12", endM: "00", breakMin: "0", enabled: false },
];
const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function calcHours(row: DayRow): number {
  if (!row.enabled) return 0;
  const start = (parseInt(row.startH) || 0) * 60 + (parseInt(row.startM) || 0);
  const end = (parseInt(row.endH) || 0) * 60 + (parseInt(row.endM) || 0);
  const brk = parseInt(row.breakMin) || 0;
  const net = end - start - brk;
  return net > 0 ? net / 60 : 0;
}

function NumInput({ value, onChange, max, width = "w-14" }: { value: string; onChange: (v: string) => void; max?: number; width?: string }) {
  return (
    <input
      type="number"
      inputMode="decimal"
      min="0"
      max={max}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`tnum ${width} rounded border border-line bg-paper/60 px-2 py-1.5 text-center font-mono text-sm text-ink outline-none focus:border-teal`}
    />
  );
}

export default function WorkingHoursCalculator() {
  const [days, setDays] = useState<DayRow[]>(DEFAULT_DAYS);
  const [hourlyRate, setHourlyRate] = useState("25");
  const [showPay, setShowPay] = useState(false);

  const updateDay = (i: number, field: keyof DayRow, value: string | boolean) => {
    setDays((prev) => prev.map((d, idx) => (idx === i ? { ...d, [field]: value } : d)));
  };

  const weeklyHours = days.reduce((sum, d) => sum + calcHours(d), 0);
  const rate = parseFloat(hourlyRate) || 0;
  const overtimeHours = Math.max(weeklyHours - 40, 0);
  const regularHours = Math.min(weeklyHours, 40);
  const regularPay = regularHours * rate;
  const overtimePay = overtimeHours * rate * 1.5;
  const totalPay = regularPay + overtimePay;

  const animHours = useCountUp(weeklyHours);
  const animPay = useCountUp(showPay ? totalPay : 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-card">
      {/* Header */}
      <div className="border-b border-line px-5 py-3 sm:px-6">
        <p className="text-sm text-muted">
          Toggle each day on/off, set your start time, end time, and break. Hours update instantly.
        </p>
      </div>

      {/* Timesheet rows */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px]">
          <thead>
            <tr className="border-b border-line bg-paper/40">
              <th className="px-4 py-2 text-left text-xs font-medium text-muted">Day</th>
              <th className="px-2 py-2 text-center text-xs font-medium text-muted">Start</th>
              <th className="px-2 py-2 text-center text-xs font-medium text-muted">End</th>
              <th className="px-2 py-2 text-center text-xs font-medium text-muted">Break (min)</th>
              <th className="px-4 py-2 text-right text-xs font-medium text-muted">Hours</th>
            </tr>
          </thead>
          <tbody>
            {days.map((day, i) => {
              const hrs = calcHours(day);
              return (
                <tr key={i} className={`border-b border-line/50 transition-colors ${day.enabled ? "" : "opacity-40"}`}>
                  <td className="px-4 py-2">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        checked={day.enabled}
                        onChange={(e) => updateDay(i, "enabled", e.target.checked)}
                        className="h-4 w-4 rounded border-line accent-teal"
                      />
                      <span className="text-sm font-medium text-ink">{DAY_NAMES[i]}</span>
                    </label>
                  </td>
                  <td className="px-2 py-2">
                    <div className="flex items-center justify-center gap-1">
                      <NumInput value={day.startH} onChange={(v) => updateDay(i, "startH", v)} max={23} />
                      <span className="text-muted">:</span>
                      <NumInput value={day.startM} onChange={(v) => updateDay(i, "startM", v)} max={59} />
                    </div>
                  </td>
                  <td className="px-2 py-2">
                    <div className="flex items-center justify-center gap-1">
                      <NumInput value={day.endH} onChange={(v) => updateDay(i, "endH", v)} max={23} />
                      <span className="text-muted">:</span>
                      <NumInput value={day.endM} onChange={(v) => updateDay(i, "endM", v)} max={59} />
                    </div>
                  </td>
                  <td className="px-2 py-2 text-center">
                    <NumInput value={day.breakMin} onChange={(v) => updateDay(i, "breakMin", v)} max={480} width="w-16" />
                  </td>
                  <td className="px-4 py-2 text-right">
                    <span className={`tnum font-mono text-sm font-medium ${day.enabled && hrs > 0 ? "text-ink" : "text-muted/40"}`}>
                      {day.enabled ? num2.format(hrs) : "—"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="border-t border-line bg-paper/40 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted">Total weekly hours</div>
            <div className={`tnum mt-0.5 font-mono text-4xl font-bold ${weeklyHours > 0 ? "text-brass" : "text-muted/40"}`}>
              {num2.format(animHours)}
            </div>
            {overtimeHours > 0 && (
              <div className="mt-1 text-xs text-muted">
                <span className="font-medium text-teal">{num2.format(regularHours)} regular</span>
                {" + "}
                <span className="font-medium text-brass">{num2.format(overtimeHours)} overtime</span>
              </div>
            )}
          </div>

          <div className="flex flex-col items-end gap-2">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-muted">
              <span>Show estimated pay</span>
              <button
                role="switch"
                aria-checked={showPay}
                onClick={() => setShowPay((p) => !p)}
                className={`relative h-5 w-9 rounded-full transition-colors ${showPay ? "bg-teal" : "bg-line"}`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${showPay ? "translate-x-4" : ""}`}
                />
              </button>
            </label>
            {showPay && (
              <div className="space-y-1 text-right">
                <div className="flex items-center gap-2 rounded-lg border border-line bg-paper/60 px-3 py-1.5">
                  <span className="font-mono text-sm text-muted">$</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min="0"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    placeholder="25"
                    className="tnum w-20 bg-transparent font-mono text-sm text-ink outline-none placeholder:text-muted/50"
                  />
                  <span className="font-mono text-sm text-muted">/hr</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {showPay && rate > 0 && weeklyHours > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "regular pay", v: regularPay },
              { label: "overtime pay (1.5×)", v: overtimePay },
              { label: "total this week", v: totalPay },
              { label: "est. monthly", v: (totalPay * 52) / 12 },
            ].map((p) => (
              <div key={p.label} className="rounded-lg border border-line bg-card px-3 py-2">
                <div className="text-xs text-muted">{p.label}</div>
                <div className="tnum font-mono text-sm font-semibold text-ink">{usd2.format(p.v)}</div>
              </div>
            ))}
          </div>
        )}

        <p className="mt-3 text-xs text-muted">
          Hours use 24-hour time. Pay is pre-tax gross. Overtime shown at 1.5× for hours above 40/week (US FLSA).
        </p>
      </div>
    </div>
  );
}
