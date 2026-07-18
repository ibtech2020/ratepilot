import type { Metadata } from "next";
import Link from "next/link";
import { guideEntries } from "../content/seo";

export const metadata: Metadata = { title: "Freelance Pricing Guides", description: "Original, practical guides to billable capacity, taxes, value-based pricing, retainers, proposals, and rate increases.", alternates: { canonical: "/guides" } };

export default function GuidesHub() {
  return <main id="main"><section className="page-hero"><div className="shell"><p className="eyebrow">RATEPILOT / FIELD GUIDES</p><h1>Better pricing decisions, one lever at a time.</h1><p>Deep, practical guidance for the parts of freelance pricing a calculator cannot decide for you: capacity, scope, value, retainers, negotiation, and change.</p></div></section><section className="content-hub"><div className="shell"><div className="hub-grid">{guideEntries.map((entry, index) => <Link className="hub-card" href={`/guides/${entry.slug}`} key={entry.slug}><span>{String(index + 1).padStart(2, "0")} / FIELD GUIDE</span><h2>{entry.title}</h2><p>{entry.description}</p><b>Read the guide →</b></Link>)}<Link className="hub-card hub-card--accent" href="/guides/freelance-pricing"><span>FOUNDATION / COMPLETE GUIDE</span><h2>The complete freelance pricing method</h2><p>Start with the full framework for floors, target rates, fixed fees, retainers, scope, and quarterly reviews.</p><b>Read the foundation →</b></Link></div></div></section></main>;
}
