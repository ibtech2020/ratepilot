"use client";

import { useState } from "react";

export default function EmbedCode() {
  const [copied, setCopied] = useState(false);
  const origin = typeof window === "undefined" ? "https://YOUR-RATEPILOT-DOMAIN" : window.location.origin;
  const code = `<iframe src="${origin}/embed/freelance-rate-calculator" title="Freelance rate calculator by RatePilot" width="100%" height="620" loading="lazy" style="border:0;border-radius:18px;overflow:hidden"></iframe>`;
  const copy = async () => { await navigator.clipboard.writeText(code); setCopied(true); window.setTimeout(() => setCopied(false), 1800); window.gtag?.("event", "embed_code_copy", { tool: "embed_builder" }); };
  return <div className="embed-code"><code>{code}</code><button type="button" className="button button--primary" onClick={copy}>{copied ? "Copied" : "Copy embed code"}</button></div>;
}
