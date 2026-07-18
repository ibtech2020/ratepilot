import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "./components/AdSlot";
import RateCalculator from "./components/RateCalculator";

export const metadata: Metadata = {
  title: "Freelance Rate Calculator — Hourly, Day & Project Rates",
  description:
    "Free advanced freelance rate calculator with taxes, expenses, benefits, non-billable time, vacation, profit margin, day rates, project quotes, and retainers.",
  alternates: { canonical: "/" },
};

const faq = [
  ["What is a realistic number of billable hours?", "For many solo professionals, 50–70% of working time is billable after sales, admin, bookkeeping, learning, and gaps between projects. Use your own tracked average when possible."],
  ["Should my rate include taxes?", "Yes. Start with the amount you want to keep, then gross it up using an estimated effective tax rate. This calculator keeps taxes visible instead of treating them as an afterthought."],
  ["Is the recommended rate my final client price?", "Treat the floor as the minimum that makes your plan work. The target rate adds room for reinvestment. Urgent, uncertain, or high-value work may justify a higher project quote."],
  ["How should I price fixed-fee projects?", "Estimate the real delivery hours, include project management and revisions, then apply a scope reserve. Fixed fees should also reflect the value, risk, and rights transferred—not only time."],
  ["Does RatePilot store my financial information?", "No. Calculations happen in your browser. Settings are saved only on your device so you can return to your plan."],
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "RatePilot Freelance Rate Calculator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: ["Hourly rate planning", "Day and project rates", "Retainer pricing", "Shareable rate plan"],
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
      },
    ],
  };

  return (
    <main id="main">
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="kicker"><span className="live-dot" /> Free pricing workspace · No signup</div>
            <h1>Your rate should fund your life—not just fill your calendar.</h1>
            <p>Build a defensible freelance rate from the full picture: take-home pay, taxes, overhead, benefits, non-billable time, time off, and room to grow.</p>
            <div className="hero-actions">
              <Link className="button button--primary" href="#calculator">Calculate my rate <span>↘</span></Link>
              <Link className="text-link" href="/guides/freelance-pricing">See the pricing method <span>→</span></Link>
            </div>
            <div className="trust-row" aria-label="Calculator benefits">
              <span>Private by default</span><span>Transparent formula</span><span>7 currencies</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Example RatePilot result">
            <div className="signal-card">
              <div className="signal-top"><span>RATE SIGNAL</span><span className="status-pill">Sustainable</span></div>
              <p className="signal-label">Recommended target</p>
              <strong>$112<span>/hr</span></strong>
              <div className="mini-chart" aria-hidden="true">
                <i style={{ height: "28%" }} /><i style={{ height: "42%" }} /><i style={{ height: "36%" }} /><i style={{ height: "55%" }} /><i style={{ height: "65%" }} /><i style={{ height: "78%" }} /><i style={{ height: "92%" }} />
              </div>
              <div className="signal-metrics"><span><small>Floor</small>$96</span><span><small>Day rate</small>$896</span><span><small>40h project</small>$5.2k</span></div>
            </div>
            <div className="float-note"><span>+</span><div><strong>$18,720</strong><small>protected from underpricing</small></div></div>
          </div>
        </div>
      </section>

      <section className="calculator-section" id="calculator">
        <div className="shell section-heading">
          <div><span className="section-number">01</span><p className="eyebrow">BUILD YOUR RATE PLAN</p></div>
          <div><h2>One number is not a pricing strategy.</h2><p>See your break-even floor, confident target, and high-risk rate—then turn them into practical quotes.</p></div>
        </div>
        <RateCalculator />
      </section>

      <AdSlot slot="home-after-calculator" format="horizontal" />

      <section className="proof-section">
        <div className="shell">
          <div className="section-heading section-heading--light">
            <div><span className="section-number">02</span><p className="eyebrow">THE HIDDEN MATH</p></div>
            <div><h2>Salary ÷ 2,080 is the fastest route to undercharging.</h2><p>Employees are paid through admin, holidays, training, and slow periods. Independent professionals must price those realities into fewer billable hours.</p></div>
          </div>
          <div className="proof-grid">
            <div className="proof-card proof-card--naive"><span>THE NAIVE WAY</span><strong>$38/hr</strong><p>$80,000 divided by 2,080 working hours</p><div className="proof-meter"><i /></div><small>Leaves no room for taxes, costs, or downtime.</small></div>
            <div className="proof-arrow">→</div>
            <div className="proof-card proof-card--real"><span>THE FULL-COST WAY</span><strong>$92/hr</strong><p>Income + tax + costs across 1,250 billable hours</p><div className="proof-meter"><i /></div><small>Protects the business and the person doing the work.</small></div>
          </div>
          <p className="example-note">Illustrative example only. Your plan should use your own effective tax rate, costs, and tracked capacity.</p>
        </div>
      </section>

      <section className="tools-section">
        <div className="shell">
          <div className="section-heading">
            <div><span className="section-number">03</span><p className="eyebrow">GO DEEPER</p></div>
            <div><h2>Choose the calculator that matches the decision.</h2><p>Each focused tool uses the same transparent pricing logic without forcing one formula onto every kind of work.</p></div>
          </div>
          <div className="tool-grid">
            <Link className="tool-card" href="/day-rate-calculator"><span>01 / CAPACITY</span><h3>Day rate calculator</h3><p>Convert a sustainable hourly target into full-day, half-day, and weekly booking rates.</p><b>Open tool →</b></Link>
            <Link className="tool-card tool-card--dark" href="/salary-to-freelance-rate"><span>02 / TRANSITION</span><h3>Salary → freelance</h3><p>Compare employment compensation with the revenue a solo business needs to replace it.</p><b>Open tool →</b></Link>
            <Link className="tool-card tool-card--accent" href="/project-pricing-calculator"><span>03 / SCOPE</span><h3>Project price calculator</h3><p>Turn hours, revisions, external costs, and delivery risk into a fixed-fee quote.</p><b>Open tool →</b></Link>
          </div>
        </div>
      </section>

      <section className="method-section">
        <div className="shell method-grid">
          <div className="method-intro"><p className="eyebrow">A RATE YOU CAN EXPLAIN</p><h2>The formula, without the finance fog.</h2><p>RatePilot works backward from what the business must produce, then divides that target by time you can actually invoice.</p><Link className="text-link" href="/about">Review the methodology <span>→</span></Link></div>
          <ol className="method-steps">
            <li><span>1</span><div><h3>Fund the person</h3><p>Start with take-home income plus benefits and retirement—not a vague gross salary.</p></div></li>
            <li><span>2</span><div><h3>Fund the business</h3><p>Add software, insurance, equipment, marketing, accounting, and one-off operating costs.</p></div></li>
            <li><span>3</span><div><h3>Gross up for tax</h3><p>Translate the amount you want to keep into the profit required before estimated taxes.</p></div></li>
            <li><span>4</span><div><h3>Use billable capacity</h3><p>Divide by workable client hours after admin, sales, time off, and the realities of a pipeline.</p></div></li>
            <li><span>5</span><div><h3>Add resilience</h3><p>Keep separate rates for sustainability, growth, and work with unusual scope or urgency.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="playbook-section">
        <div className="shell">
          <div className="section-heading">
            <div><span className="section-number">04</span><p className="eyebrow">ROLE-SPECIFIC PLAYBOOKS</p></div>
            <div><h2>Different work creates different pricing risk.</h2><p>Go beyond generic averages with original playbooks for the scope, cost, capacity, and client decisions behind your profession.</p></div>
          </div>
          <div className="playbook-grid">
            <Link href="/freelance-rates/web-developer"><span>DEVELOPMENT</span><h3>Web developer rates</h3><p>Price discovery, QA, deployment, integrations, and support.</p><b>Read playbook →</b></Link>
            <Link href="/freelance-rates/graphic-designer"><span>DESIGN</span><h3>Graphic designer rates</h3><p>Account for concepts, revisions, production, and usage rights.</p><b>Read playbook →</b></Link>
            <Link href="/freelance-rates/marketing-consultant"><span>MARKETING</span><h3>Marketing consultant rates</h3><p>Separate strategy, execution, access, tools, and media spend.</p><b>Read playbook →</b></Link>
            <Link href="/freelance-rates/data-analyst"><span>DATA</span><h3>Data analyst rates</h3><p>Price discovery, data quality, validation, and decision support.</p><b>Read playbook →</b></Link>
          </div>
          <div className="hub-link-row"><Link className="button button--outline" href="/freelance-rates">Explore all 8 profession playbooks <span>→</span></Link><Link className="text-link" href="/guides">Browse the pricing field guides <span>→</span></Link></div>
        </div>
      </section>

      <section className="faq-section">
        <div className="shell faq-grid">
          <div><p className="eyebrow">COMMON QUESTIONS</p><h2>Before you send the quote.</h2><p>Use the number as a decision aid, then apply market context and professional judgment.</p></div>
          <div className="faq-list">
            {faq.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><i>+</i></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="final-cta"><div className="shell"><p className="eyebrow">STOP GUESSING</p><h2>Build the rate your next year needs.</h2><p>Five minutes of honest inputs can change every proposal that follows.</p><Link className="button button--light" href="#calculator">Calculate my rate <span>↑</span></Link></div></section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
}
