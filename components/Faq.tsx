"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/jsonld";

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-display text-[15px] font-medium text-ink">
                {item.question}
              </span>
              <span
                className={`grid h-6 w-6 flex-none place-items-center rounded-full border border-line font-mono text-sm text-teal transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="px-5 pb-5 text-[15px] leading-relaxed text-[#243b42] animate-fade-up">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
