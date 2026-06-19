"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Appears on mobile only after the user scrolls past the hero (~400px).
// Gives a persistent entry point back to the calculators without cluttering desktop.
export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-card/95 p-3 backdrop-blur-sm sm:hidden">
      <Link
        href="#calculators"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal py-3 text-sm font-medium text-paper transition-colors hover:bg-teal-deep"
      >
        <span className="font-mono">%</span>
        Open a free calculator →
      </Link>
    </div>
  );
}
