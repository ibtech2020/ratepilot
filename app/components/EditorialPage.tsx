import Link from "next/link";
import type { ContentEntry } from "../content/seo";

export default function EditorialPage({ entry, category }: { entry: ContentEntry; category: "Profession rate guide" | "Freelance pricing guide" }) {
  const canonical = category === "Profession rate guide" ? `/freelance-rates/${entry.slug}` : `/guides/${entry.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: entry.title,
        description: entry.description,
        datePublished: "2026-07-18",
        dateModified: "2026-07-18",
        author: { "@type": "Organization", name: "RatePilot" },
        publisher: { "@type": "Organization", name: "RatePilot" },
        mainEntityOfPage: `https://nexypotai.com${canonical}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "RatePilot", item: "https://nexypotai.com/" },
          { "@type": "ListItem", position: 2, name: category === "Profession rate guide" ? "Rate playbooks" : "Guides", item: `https://nexypotai.com/${category === "Profession rate guide" ? "freelance-rates" : "guides"}` },
          { "@type": "ListItem", position: 3, name: entry.title, item: `https://nexypotai.com${canonical}` },
        ],
      },
    ],
  };

  return (
    <main id="main">
      <section className="page-hero"><div className="shell"><p className="eyebrow">{entry.eyebrow}</p><h1>{entry.title}</h1><p>{entry.description}</p></div></section>
      <article className="content-shell editorial-article">
        <p className="article-intro">{entry.intro}</p>
        <div className="article-meta"><span>Original RatePilot guide</span><span>Updated July 18, 2026</span><span>8–10 minute read</span></div>
        {entry.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
          </section>
        ))}
        <div className="note-box"><strong>RatePilot takeaway</strong><p>{entry.takeaway}</p></div>
        <section className="next-steps"><h2>Put the method to work</h2><div>{entry.related.map((link) => <Link className="button button--outline" href={link.href} key={link.href}>{link.label} <span>→</span></Link>)}</div></section>
        <p className="editorial-disclaimer">Educational planning content only. Pricing, taxes, contracts, and client circumstances vary; use professional advice where appropriate.</p>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
