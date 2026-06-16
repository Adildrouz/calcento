"use client";

import { useEffect } from "react";

// A single ad placement. Before AdSense approval (no NEXT_PUBLIC_ADSENSE_CLIENT),
// it renders a quiet labeled placeholder so layouts look right in dev and the
// reviewer sees the intended slot. Once the env var is set, it renders a real unit.

const CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function AdSlot({
  slotId,
  label = "Advertisement",
}: {
  slotId?: string;
  label?: string;
}) {
  const live = Boolean(CLIENT && slotId);

  useEffect(() => {
    if (!live) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* AdSense not ready yet; ignore */
    }
  }, [live]);

  return (
    <div className="my-8">
      <p className="mb-1 text-center text-[10px] uppercase tracking-[0.18em] text-muted/70">
        {label}
      </p>
      {live ? (
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client={CLIENT}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <div className="flex h-[120px] items-center justify-center rounded-lg border border-dashed border-line bg-card/60 text-xs text-muted/60">
          Ad slot
        </div>
      )}
    </div>
  );
}
