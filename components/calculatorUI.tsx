"use client";

import { useEffect, useRef, useState } from "react";

// Shared building blocks for every Calcento calculator: the labelled numeric
// input (Field) and the count-up animation hook. Extracted so all four tools
// share one source of truth instead of copy-pasting it.

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Smoothly counts a number up to its target when it changes.
export function useCountUp(target: number, duration = 500) {
  const [value, setValue] = useState(target);
  const raf = useRef<number>();
  const fromRef = useRef(target);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }
    const from = fromRef.current;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(from + (target - from) * eased);
      if (t < 1) raf.current = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      fromRef.current = target;
    };
  }, [target, duration]);

  return value;
}

export function Field({
  label,
  prefix,
  suffix,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  prefix?: string;
  suffix?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      <div className="flex items-center rounded-lg border border-line bg-paper/60 focus-within:border-teal">
        {prefix && (
          <span className="pl-3 font-mono text-sm text-muted">{prefix}</span>
        )}
        <input
          type="number"
          inputMode="decimal"
          min="0"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="tnum w-full bg-transparent px-3 py-2.5 font-mono text-base text-ink outline-none placeholder:text-muted/50"
        />
        {suffix && (
          <span className="pr-3 font-mono text-sm text-muted">{suffix}</span>
        )}
      </div>
    </label>
  );
}
