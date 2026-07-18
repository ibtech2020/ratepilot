"use client";

import { useEffect, useMemo, useRef, useState } from "react";

declare global {
  interface Window { gtag?: (...args: unknown[]) => void; }
}

type Inputs = {
  currency: string;
  takeHome: number;
  monthlyCosts: number;
  annualCosts: number;
  taxRate: number;
  workHours: number;
  billablePercent: number;
  weeksOff: number;
  monthlyBenefits: number;
  margin: number;
  projectHours: number;
  scopeReserve: number;
  currentRate: number;
};

const defaults: Inputs = {
  currency: "USD", takeHome: 80000, monthlyCosts: 850, annualCosts: 3000, taxRate: 27,
  workHours: 40, billablePercent: 62, weeksOff: 5, monthlyBenefits: 900, margin: 15,
  projectHours: 40, scopeReserve: 15, currentRate: 65,
};

const currencies: Record<string, { symbol: string; locale: string }> = {
  USD: { symbol: "$", locale: "en-US" }, EUR: { symbol: "€", locale: "de-DE" }, GBP: { symbol: "£", locale: "en-GB" },
  CAD: { symbol: "C$", locale: "en-CA" }, AUD: { symbol: "A$", locale: "en-AU" }, INR: { symbol: "₹", locale: "en-IN" }, NZD: { symbol: "NZ$", locale: "en-NZ" },
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));

function calculate(input: Inputs) {
  const tax = clamp(input.taxRate, 0, 70) / 100;
  const margin = clamp(input.margin, 0, 45) / 100;
  const capacity = clamp(input.workHours, 1, 90) * (clamp(input.billablePercent, 5, 100) / 100) * (52 - clamp(input.weeksOff, 0, 20));
  const annualBenefits = Math.max(0, input.monthlyBenefits) * 12;
  const expenses = Math.max(0, input.monthlyCosts) * 12 + Math.max(0, input.annualCosts);
  const ownerGoal = Math.max(0, input.takeHome) + annualBenefits;
  const preTaxOwnerProfit = ownerGoal / Math.max(0.3, 1 - tax);
  const taxes = preTaxOwnerProfit - ownerGoal;
  const floorRevenue = preTaxOwnerProfit + expenses;
  const targetRevenue = floorRevenue / Math.max(0.55, 1 - margin);
  const resilience = targetRevenue - floorRevenue;
  const floorRate = floorRevenue / Math.max(1, capacity);
  const targetRate = targetRevenue / Math.max(1, capacity);
  const rushRate = targetRate * 1.35;
  const scopeMultiplier = 1 + clamp(input.scopeReserve, 0, 75) / 100;
  const projectQuote = targetRate * Math.max(1, input.projectHours) * scopeMultiplier;
  const currentShortfall = Math.max(0, targetRate - Math.max(0, input.currentRate)) * capacity;
  return { capacity, annualBenefits, expenses, ownerGoal, preTaxOwnerProfit, taxes, floorRevenue, targetRevenue, resilience, floorRate, targetRate, rushRate, projectQuote, currentShortfall };
}

function Field({ label, hint, prefix, suffix, value, min = 0, max, step = 1, onChange }: { label: string; hint?: string; prefix?: string; suffix?: string; value: number; min?: number; max?: number; step?: number; onChange: (value: number) => void }) {
  return <label className="field"><span className="field-label">{label}</span>{hint ? <small>{hint}</small> : null}<span className="input-shell">{prefix ? <b>{prefix}</b> : null}<input type="number" value={value} min={min} max={max} step={step} onChange={(event) => onChange(Number(event.target.value))} />{suffix ? <b>{suffix}</b> : null}</span></label>;
}

export default function RateCalculator() {
  const [inputs, setInputs] = useState<Inputs>(defaults);
  const [message, setMessage] = useState("");
  const hydrated = useRef(false);
  const started = useRef(false);
  const resultTracked = useRef(false);
  const result = useMemo(() => calculate(inputs), [inputs]);
  const currency = currencies[inputs.currency] || currencies.USD;
  const money = (value: number, compact = false) => new Intl.NumberFormat(currency.locale, { style: "currency", currency: inputs.currency, maximumFractionDigits: 0, notation: compact ? "compact" : "standard" }).format(value);
  const percent = (part: number) => `${Math.max(2, (part / Math.max(1, result.targetRevenue)) * 100)}%`;
  const update = <K extends keyof Inputs>(key: K, value: Inputs[K]) => {
    if (!started.current && hydrated.current) {
      started.current = true;
      window.gtag?.("event", "calculator_started", { tool: "rate_planner" });
    }
    setInputs((current) => ({ ...current, [key]: value }));
  };
  const track = (event: string) => window.gtag?.("event", event, { tool: "rate_planner" });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const stored = window.localStorage.getItem("ratepilot-plan");
    let next = { ...defaults };
    if (stored) { try { next = { ...next, ...JSON.parse(stored) }; } catch { /* Ignore stale local data. */ } }
    (Object.keys(defaults) as (keyof Inputs)[]).forEach((key) => {
      const raw = query.get(key);
      if (raw !== null) (next as Record<string, string | number>)[key] = key === "currency" ? raw : Number(raw);
    });
    const timer = window.setTimeout(() => {
      hydrated.current = true;
      setInputs(next);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    window.localStorage.setItem("ratepilot-plan", JSON.stringify(inputs));
    if (!started.current || resultTracked.current) return;
    const timer = window.setTimeout(() => {
      window.gtag?.("event", "rate_plan_generated", { tool: "rate_planner", currency: inputs.currency });
      resultTracked.current = true;
    }, 1200);
    return () => window.clearTimeout(timer);
  }, [inputs]);

  const copyPlan = async () => {
    const summary = `RatePilot plan\nTarget: ${money(result.targetRate)}/hr\nFloor: ${money(result.floorRate)}/hr\nDay rate: ${money(result.targetRate * 8)}\n${inputs.projectHours}-hour project: ${money(result.projectQuote)}\nAnnual revenue target: ${money(result.targetRevenue)}\nBillable capacity: ${Math.round(result.capacity)} hours/year`;
    await navigator.clipboard.writeText(summary);
    track("rate_plan_copy");
    setMessage("Plan copied");
    window.setTimeout(() => setMessage(""), 1800);
  };

  const sharePlan = async () => {
    const query = new URLSearchParams();
    (Object.keys(inputs) as (keyof Inputs)[]).forEach((key) => query.set(key, String(inputs[key])));
    const url = `${window.location.origin}${window.location.pathname}?${query.toString()}#calculator`;
    if (navigator.share) await navigator.share({ title: "My RatePilot plan", text: `My target freelance rate is ${money(result.targetRate)}/hr.`, url });
    else { await navigator.clipboard.writeText(url); setMessage("Share link copied"); window.setTimeout(() => setMessage(""), 1800); }
    track("rate_plan_share");
  };

  const downloadPlan = () => {
    const text = `RATEPILOT — FREELANCE RATE PLAN\n\nTarget hourly rate: ${money(result.targetRate)}/hr\nFloor hourly rate: ${money(result.floorRate)}/hr\nHigh-risk / rush rate: ${money(result.rushRate)}/hr\nDay rate: ${money(result.targetRate * 8)}\nWeekly booking: ${money(result.targetRate * 32)}\nMonthly retainer (64 hours, 5% commitment adjustment): ${money(result.targetRate * 64 * .95)}\n${inputs.projectHours}-hour project with ${inputs.scopeReserve}% scope reserve: ${money(result.projectQuote)}\n\nAnnual revenue target: ${money(result.targetRevenue)}\nBillable capacity: ${Math.round(result.capacity)} hours\nEstimated taxes: ${money(result.taxes)}\nBusiness costs: ${money(result.expenses)}\nBenefits / retirement: ${money(result.annualBenefits)}\nResilience margin: ${money(result.resilience)}\n\nPlanning estimate only. Review with a qualified tax or financial professional.`;
    const anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    anchor.download = "ratepilot-rate-plan.txt";
    anchor.click();
    URL.revokeObjectURL(anchor.href);
    track("rate_plan_download");
  };

  return (
    <div className="shell calculator-wrap">
      <div className="calculator-panel input-panel">
        <div className="panel-top"><div><span className="panel-step">INPUTS</span><h3>Build from your real year</h3></div><span className="autosave autosave--active">● Saved locally</span></div>
        <div className="form-grid">
          <label className="field field--wide"><span className="field-label">Currency</span><small>Currency changes display, not tax rules or exchange rates.</small><span className="select-shell"><select value={inputs.currency} onChange={(event) => update("currency", event.target.value)}>{Object.keys(currencies).map((code) => <option value={code} key={code}>{code} — {currencies[code].symbol}</option>)}</select></span></label>
          <Field label="Annual take-home goal" hint="What you want to keep after tax" prefix={currency.symbol} value={inputs.takeHome} step={1000} onChange={(value) => update("takeHome", value)} />
          <Field label="Monthly business costs" hint="Software, insurance, marketing, office" prefix={currency.symbol} value={inputs.monthlyCosts} step={50} onChange={(value) => update("monthlyCosts", value)} />
          <Field label="Annual one-off costs" hint="Equipment, legal, education, travel" prefix={currency.symbol} value={inputs.annualCosts} step={100} onChange={(value) => update("annualCosts", value)} />
          <Field label="Effective tax rate" hint="Average share of business profit" suffix="%" value={inputs.taxRate} max={70} onChange={(value) => update("taxRate", value)} />
          <Field label="Total work hours / week" hint="Billable and non-billable time" suffix="hrs" value={inputs.workHours} min={1} max={90} onChange={(value) => update("workHours", value)} />
          <Field label="Billable share" hint="Time you can actually invoice" suffix="%" value={inputs.billablePercent} min={5} max={100} onChange={(value) => update("billablePercent", value)} />
          <Field label="Weeks off / year" hint="Vacation, holidays, sick and buffer" suffix="wks" value={inputs.weeksOff} max={20} onChange={(value) => update("weeksOff", value)} />
          <Field label="Benefits + retirement / month" hint="Health cover, pension, paid leave replacement" prefix={currency.symbol} value={inputs.monthlyBenefits} step={50} onChange={(value) => update("monthlyBenefits", value)} />
          <Field label="Resilience margin" hint="Room for growth and slow periods" suffix="%" value={inputs.margin} max={45} onChange={(value) => update("margin", value)} />
        </div>
        <details className="project-settings">
          <summary>Project quote settings <span>+</span></summary>
          <div className="form-grid">
            <Field label="Estimated delivery hours" suffix="hrs" value={inputs.projectHours} min={1} max={2000} onChange={(value) => update("projectHours", value)} />
            <Field label="Scope reserve" hint="Revisions, uncertainty, coordination" suffix="%" value={inputs.scopeReserve} max={75} onChange={(value) => update("scopeReserve", value)} />
            <Field label="Your current rate" hint="Used only for the opportunity-gap check" prefix={currency.symbol} value={inputs.currentRate} onChange={(value) => update("currentRate", value)} />
          </div>
        </details>
        <button className="reset-button" type="button" onClick={() => { track("rate_plan_reset"); setInputs(defaults); }}>Reset example</button>
      </div>

      <div className="calculator-panel result-panel" aria-live="polite">
        <div className="result-hero">
          <div><span className="panel-step">YOUR TARGET RATE</span><div className="main-rate">{money(result.targetRate)}<small>/hour</small></div><p>Built to produce {money(result.targetRevenue)} across {Math.round(result.capacity).toLocaleString()} realistic billable hours.</p></div>
          <span className="status-pill status-pill--large">On plan</span>
        </div>
        <div className="rate-ladder">
          <div><span>Floor</span><strong>{money(result.floorRate)}<small>/hr</small></strong><p>Covers the plan, no resilience margin.</p></div>
          <div className="rate-ladder__active"><span>Target</span><strong>{money(result.targetRate)}<small>/hr</small></strong><p>Default for well-scoped client work.</p></div>
          <div><span>High-risk</span><strong>{money(result.rushRate)}<small>/hr</small></strong><p>Reference for urgent or uncertain work.</p></div>
        </div>
        <div className="quote-grid">
          <div><span>8-hour day</span><strong>{money(result.targetRate * 8)}</strong></div>
          <div><span>32-hour week</span><strong>{money(result.targetRate * 32)}</strong></div>
          <div><span>64-hour retainer</span><strong>{money(result.targetRate * 64 * .95)}</strong><small>5% commitment adjustment</small></div>
          <div className="quote-grid__accent"><span>{inputs.projectHours}-hour project</span><strong>{money(result.projectQuote)}</strong><small>Includes {inputs.scopeReserve}% scope reserve</small></div>
        </div>

        <div className="allocation-card">
          <div className="allocation-title"><div><span>WHERE THE REVENUE GOES</span><strong>{money(result.targetRevenue)} / year</strong></div><span>{money(result.targetRevenue / 12)} / month</span></div>
          <div className="allocation-bar" aria-label="Revenue allocation chart"><i className="bar-income" style={{ width: percent(inputs.takeHome) }} /><i className="bar-tax" style={{ width: percent(result.taxes) }} /><i className="bar-benefits" style={{ width: percent(result.annualBenefits) }} /><i className="bar-costs" style={{ width: percent(result.expenses) }} /><i className="bar-margin" style={{ width: percent(result.resilience) }} /></div>
          <div className="allocation-legend"><span><i className="bar-income" />Take-home <b>{money(inputs.takeHome, true)}</b></span><span><i className="bar-tax" />Tax <b>{money(result.taxes, true)}</b></span><span><i className="bar-benefits" />Benefits <b>{money(result.annualBenefits, true)}</b></span><span><i className="bar-costs" />Costs <b>{money(result.expenses, true)}</b></span><span><i className="bar-margin" />Resilience <b>{money(result.resilience, true)}</b></span></div>
        </div>

        <div className={`gap-card ${result.currentShortfall === 0 ? "gap-card--good" : ""}`}>
          <div><span>{result.currentShortfall > 0 ? "CURRENT-RATE GAP" : "CURRENT RATE STATUS"}</span><strong>{result.currentShortfall > 0 ? `${money(result.currentShortfall)} / year` : "At or above target"}</strong></div>
          <p>{result.currentShortfall > 0 ? `At ${money(inputs.currentRate)}/hr, the plan is short by ${money(result.targetRate - inputs.currentRate)} for every billable hour.` : "Your current rate supports this plan at the capacity entered."}</p>
        </div>

        <details className="formula-details"><summary>Show calculation trail <span>+</span></summary><ol><li><span>Take-home + benefits</span><b>{money(result.ownerGoal)}</b></li><li><span>Profit required before estimated tax</span><b>{money(result.preTaxOwnerProfit)}</b></li><li><span>+ Annual business costs</span><b>{money(result.expenses)}</b></li><li><span>Revenue floor</span><b>{money(result.floorRevenue)}</b></li><li><span>÷ {(100 - inputs.margin)}% after resilience margin</span><b>{money(result.targetRevenue)}</b></li><li><span>÷ {Math.round(result.capacity).toLocaleString()} billable hours</span><b>{money(result.targetRate)}/hr</b></li></ol></details>

        <div className="result-actions"><button type="button" className="button button--primary" onClick={copyPlan}>Copy plan</button><button type="button" className="button button--outline" onClick={sharePlan}>Share link</button><button type="button" className="button button--ghost" onClick={downloadPlan}>Download</button></div>
        <p className="action-message" role="status">{message}</p>
      </div>
    </div>
  );
}
