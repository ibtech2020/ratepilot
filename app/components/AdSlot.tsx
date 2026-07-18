"use client";

import { useEffect } from "react";

declare global {
  interface Window { adsbygoogle?: Record<string, unknown>[]; }
}

export default function AdSlot({ slot, format = "auto" }: { slot: string; format?: "auto" | "horizontal" | "rectangle" }) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const slots: Record<string, string | undefined> = {
    "home-after-calculator": process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_AFTER_CALCULATOR,
  };
  const slotId = slots[slot];

  useEffect(() => {
    if (!client || !slotId) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch { /* Ad blockers may stop the script. */ }
  }, [client, slotId]);

  if (!client || !slotId) return null;

  return (
    <aside className={`ad-shell ad-shell--${format}`} aria-label="Advertisement">
      <span>Advertisement</span>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slotId}
        data-ad-format={format === "auto" ? "auto" : format}
        data-full-width-responsive="true"
      />
    </aside>
  );
}
