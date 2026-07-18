import type { Metadata } from "next";
import Link from "next/link";
import { professionEntries } from "../content/seo";

export const metadata: Metadata = { title: "Freelance Rate Guides by Profession", description: "Original freelance rate playbooks for developers, designers, consultants, copywriters, analysts, virtual assistants, and more.", alternates: { canonical: "/freelance-rates" } };

export default function ProfessionHub() {
  return <main id="main"><section className="page-hero"><div className="shell"><p className="eyebrow">RATE PLAYBOOKS / BY PROFESSION</p><h1>Price the work behind the deliverable.</h1><p>Role-specific planning guides that connect a sustainable rate floor with scope, delivery risk, pricing models, and client responsibilities—without pretending there is one universal market price.</p></div></section><section className="content-hub"><div className="shell"><div className="hub-grid">{professionEntries.map((entry, index) => <Link className="hub-card" href={`/freelance-rates/${entry.slug}`} key={entry.slug}><span>{String(index + 1).padStart(2, "0")} / RATE PLAYBOOK</span><h2>{entry.title.split(":")[0]}</h2><p>{entry.description}</p><b>Read the playbook →</b></Link>)}</div></div></section></main>;
}
