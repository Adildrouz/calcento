"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Lightweight, non-blocking cookie/ads consent banner. Persists the choice in
// localStorage so it only shows once. Visually consistent with the brand.

const STORAGE_KEY = "calcento-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* localStorage unavailable; stay hidden */
    }
  }, []);

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4"
    >
      <div className="mx-auto flex max-w-content flex-col gap-4 rounded-xl border border-line bg-paper p-4 shadow-card sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          We use cookies, including for Google AdSense advertising, to keep
          Calcento free. See our{" "}
          <Link href="/cookie-policy" className="font-medium text-teal hover:text-teal-deep">
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="font-medium text-teal hover:text-teal-deep">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex flex-none gap-2">
          <button
            onClick={() => choose("declined")}
            className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-teal hover:text-teal"
          >
            Decline
          </button>
          <button
            onClick={() => choose("accepted")}
            className="rounded-lg bg-teal px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-teal-deep"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
