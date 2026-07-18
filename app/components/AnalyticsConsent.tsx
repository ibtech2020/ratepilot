"use client";

import { useEffect, useState } from "react";

const storageKey = "ratepilot-analytics-consent";

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<"granted" | "denied" | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    const timer = window.setTimeout(() => {
      if (saved === "granted" || saved === "denied") setChoice(saved);
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const choose = (next: "granted" | "denied") => {
    window.localStorage.setItem(storageKey, next);
    window.gtag?.("consent", "update", {
      analytics_storage: next,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    if (next === "granted") window.gtag?.("event", "analytics_consent_granted", { source: "privacy_banner" });
    setChoice(next);
  };

  if (!ready || choice) return null;
  return (
    <aside className="consent-banner" aria-label="Analytics privacy choice">
      <div><strong>Your calculator stays private.</strong><p>We use optional, consent-based analytics to learn which pages and tools are useful. Your rate inputs are never sent with analytics events.</p></div>
      <div className="consent-actions"><button type="button" className="button button--outline" onClick={() => choose("denied")}>No analytics</button><button type="button" className="button button--primary" onClick={() => choose("granted")}>Allow analytics</button><a href="/privacy">Privacy details</a></div>
    </aside>
  );
}
