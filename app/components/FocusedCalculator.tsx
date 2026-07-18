"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Mode = "day" | "salary" | "project";

const format = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Number.isFinite(value) ? value : 0);

function NumberField({ label, value, suffix, onChange }: { label: string; value: number; suffix?: string; onChange: (value: number) => void }) {
  return <label className="field"><span className="field-label">{label}</span><span className="input-shell"><b>{suffix ? "" : "$"}</b><input type="number" min="0" value={value} onChange={(event) => onChange(Number(event.target.value))} />{suffix ? <b>{suffix}</b> : null}</span></label>;
}

export default function FocusedCalculator({ mode }: { mode: Mode }) {
  const mounted = useRef(false);
  const tracked = useRef(false);
  const [hourly, setHourly] = useState(110);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [bookingDiscount, setBookingDiscount] = useState(0);
  const [salary, setSalary] = useState(90000);
  const [benefits, setBenefits] = useState(18000);
  const [costs, setCosts] = useState(12000);
  const [tax, setTax] = useState(27);
  const [billableHours, setBillableHours] = useState(1200);
  const [projectHours, setProjectHours] = useState(60);
  const [externalCosts, setExternalCosts] = useState(1200);
  const [reserve, setReserve] = useState(20);
  const [valueAdjustment, setValueAdjustment] = useState(15);

  const output = useMemo(() => {
    if (mode === "day") {
      const day = hourly * hoursPerDay * (1 - bookingDiscount / 100);
      return { main: day, unit: "/day", metrics: [["Half-day minimum", format(day * .65)], ["5-day booking", format(day * 5 * .95)], ["Monthly capacity (12 days)", format(day * 12)], ["Effective hourly", format(day / Math.max(1, hoursPerDay))]] };
    }
    if (mode === "salary") {
      const ownerGoal = salary + benefits;
      const preTax = ownerGoal / Math.max(.3, 1 - tax / 100);
      const revenue = preTax + costs;
      const rate = revenue / Math.max(1, billableHours);
      return { main: rate, unit: "/hour", metrics: [["Revenue to replace salary", format(revenue)], ["Monthly revenue", format(revenue / 12)], ["Tax reserve", format(preTax - ownerGoal)], ["Billable hours", Math.round(billableHours).toLocaleString()]] };
    }
    const labor = hourly * projectHours;
    const scopeAdjusted = (labor + externalCosts) * (1 + reserve / 100);
    const quote = scopeAdjusted * (1 + valueAdjustment / 100);
    return { main: quote, unit: " fixed fee", metrics: [["Labor base", format(labor)], ["External costs", format(externalCosts)], ["Scope reserve", format(scopeAdjusted - labor - externalCosts)], ["Value / risk adjustment", format(quote - scopeAdjusted)]] };
  }, [mode, hourly, hoursPerDay, bookingDiscount, salary, benefits, costs, tax, billableHours, projectHours, externalCosts, reserve, valueAdjustment]);

  useEffect(() => {
    if (!mounted.current) { mounted.current = true; return; }
    if (!tracked.current) {
      window.gtag?.("event", "focused_calculator_used", { tool: `${mode}_calculator` });
      tracked.current = true;
    }
  }, [mode, hourly, hoursPerDay, bookingDiscount, salary, benefits, costs, tax, billableHours, projectHours, externalCosts, reserve, valueAdjustment]);

  return <section className="mini-tool" aria-label={`${mode} calculator`}>
    <div className="mini-tool__inputs">
      <p className="panel-step">QUICK INPUTS</p>
      <h2>{mode === "day" ? "Set a booking rate" : mode === "salary" ? "Replace the full package" : "Build a fixed fee"}</h2>
      {mode === "day" ? <><NumberField label="Sustainable hourly rate" value={hourly} onChange={setHourly} /><NumberField label="Billable hours in a day" value={hoursPerDay} suffix="hrs" onChange={setHoursPerDay} /><NumberField label="Multi-day booking adjustment" value={bookingDiscount} suffix="%" onChange={setBookingDiscount} /></> : null}
      {mode === "salary" ? <><NumberField label="Employee salary to replace" value={salary} onChange={setSalary} /><NumberField label="Benefits and paid leave value" value={benefits} onChange={setBenefits} /><NumberField label="Annual business costs" value={costs} onChange={setCosts} /><NumberField label="Effective tax estimate" value={tax} suffix="%" onChange={setTax} /><NumberField label="Billable hours per year" value={billableHours} suffix="hrs" onChange={setBillableHours} /></> : null}
      {mode === "project" ? <><NumberField label="Target hourly rate" value={hourly} onChange={setHourly} /><NumberField label="Delivery + management hours" value={projectHours} suffix="hrs" onChange={setProjectHours} /><NumberField label="External project costs" value={externalCosts} onChange={setExternalCosts} /><NumberField label="Scope and revision reserve" value={reserve} suffix="%" onChange={setReserve} /><NumberField label="Value / risk adjustment" value={valueAdjustment} suffix="%" onChange={setValueAdjustment} /></> : null}
    </div>
    <div className="mini-tool__result" aria-live="polite">
      <p className="panel-step">PLANNING RESULT</p>
      <div className="mini-result">{format(output.main)}<small>{output.unit}</small></div>
      <p>{mode === "day" ? "A day booking should reserve enough of your capacity to justify turning down other work." : mode === "salary" ? "This is the approximate hourly rate needed to replace compensation, costs, and estimated taxes at the capacity entered." : "Use this as a pricing checkpoint, then test the quote against client value, market alternatives, and your contract terms."}</p>
      <div className="mini-metrics">{output.metrics.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
      <p className="example-note">Educational estimate only. Taxes, benefits, and scope vary.</p>
    </div>
  </section>;
}
