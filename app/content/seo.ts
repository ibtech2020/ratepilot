export type ContentSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ContentEntry = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  sections: ContentSection[];
  takeaway: string;
  related: { href: string; label: string }[];
};

export const professionEntries: ContentEntry[] = [
  {
    slug: "web-developer",
    title: "Freelance web developer rates: build a price that survives the whole project",
    eyebrow: "RATE PLAYBOOK / WEB DEVELOPMENT",
    description: "Plan a sustainable freelance web developer rate using delivery time, technical risk, support, tooling, and realistic billable capacity.",
    intro: "Development is rarely just the hours spent writing code. Discovery, architecture, testing, deployment, documentation, client communication, and post-launch support all consume capacity. A defensible rate makes that invisible work visible before the estimate becomes a promise.",
    sections: [
      { heading: "Start with your delivery system, not a market average", paragraphs: ["Your internal hourly floor should fund compensation, tax, software, equipment, insurance, learning, and sales time across the hours you can actually invoice. A specialist with a mature delivery system may complete work faster, but that efficiency should improve the business—not automatically reduce the project value."], bullets: ["Include discovery, estimation, QA, deployment, and handover time.", "Budget for hosting, testing services, devices, and developer tooling.", "Separate build work from maintenance and response-time commitments."] },
      { heading: "Choose a pricing model that matches uncertainty", paragraphs: ["Use hourly pricing for open-ended debugging or changing backlogs. Use a day rate for focused build sessions and workshops. Use a fixed fee when the acceptance criteria, dependencies, and revision path are clear. A phased discovery engagement is often safer when the client cannot yet define the system."], bullets: ["Quote third-party integrations as explicit assumptions.", "Define browser, device, accessibility, and performance targets.", "Price rush launches and inherited codebases for their opportunity cost and risk."] },
      { heading: "Worked planning example", paragraphs: ["Suppose your annual revenue plan is $144,000 and you expect 1,200 billable hours. Your internal floor is $120 per hour. A 70-hour build starts at $8,400. Adding a 20% delivery reserve produces a $10,080 planning checkpoint before any value, urgency, licensing, or ongoing support adjustment. This is an illustration, not a market benchmark."], bullets: ["Labor base: 70 × $120 = $8,400", "Delivery reserve: $1,680", "Planning checkpoint: $10,080"] },
      { heading: "Protect the quote with scope language", paragraphs: ["List the supplied content, environments, integrations, acceptance process, revision rounds, launch responsibility, warranty window, and support boundary. When a dependency changes, use a documented change request instead of absorbing it into the original fee."] },
    ],
    takeaway: "Price the complete delivery responsibility, not only the visible coding hours.",
    related: [{ href: "/project-pricing-calculator", label: "Build a project quote" }, { href: "/guides/freelance-proposal-pricing", label: "Write a priced proposal" }],
  },
  {
    slug: "graphic-designer",
    title: "Freelance graphic designer rates: price concepts, revisions, and usage",
    eyebrow: "RATE PLAYBOOK / GRAPHIC DESIGN",
    description: "Build a freelance graphic design rate that covers concepts, revision control, production, licensing, and non-billable creative work.",
    intro: "A design fee pays for more than the final file. Research, concept development, presentation, refinement, production setup, asset management, and the rights granted to the client all affect the engagement. Rate planning should separate your cost floor from the value and usage of the work.",
    sections: [
      { heading: "Calculate a sustainable internal rate", paragraphs: ["Start with annual owner compensation, business costs, tax planning, time off, and realistic billable hours. Include fonts, stock assets, hardware, color proofs, portfolio work, and the unbilled time required to win and manage projects."], bullets: ["Treat creative direction and presentation as delivery work.", "Include production checks and export variants in the estimate.", "Keep pass-through purchases separate and require approval."] },
      { heading: "Price the engagement, then define the license", paragraphs: ["Hourly pricing can fit production support. Fixed fees work well for a clear set of deliverables and revision rounds. Brand systems and campaign assets may also need a usage discussion: geography, duration, media, exclusivity, and transfer of source files can materially change the value granted."], bullets: ["Specify how many initial concepts are included.", "Define consolidated feedback and revision rounds.", "State whether editable source files and third-party licenses transfer."] },
      { heading: "Worked planning example", paragraphs: ["At an internal target of $95 per hour, a project estimated at 32 hours has a $3,040 labor base. Six additional hours reserved for feedback and production bring the checkpoint to $3,610. Any licensing, printing, stock, rush delivery, or broad usage adjustment is considered separately. This example demonstrates the method, not a typical design fee."], bullets: ["Core work: 32 × $95 = $3,040", "Revision and production reserve: 6 × $95 = $570", "Planning checkpoint: $3,610"] },
      { heading: "Handle feedback without creating conflict", paragraphs: ["Ask the client to name one feedback owner and return one consolidated response per round. Distinguish corrections from new direction. If the brief changes, present the added cost and timeline before continuing so both sides can make an informed decision."] },
    ],
    takeaway: "Your fee should reflect the creative process, production burden, and rights delivered—not the number of files alone.",
    related: [{ href: "/guides/value-based-pricing", label: "Add value context" }, { href: "/guides/raise-freelance-rates", label: "Plan a rate increase" }],
  },
  {
    slug: "marketing-consultant",
    title: "Freelance marketing consultant rates: price decisions, execution, and accountability",
    eyebrow: "RATE PLAYBOOK / MARKETING",
    description: "Plan marketing consulting rates for strategy, execution, reporting, retainers, and access without promising outcomes you cannot control.",
    intro: "Marketing engagements combine diagnosis, decisions, coordination, production, and measurement. The client may value growth, but the consultant rarely controls product quality, sales follow-up, budget, seasonality, or platform changes. A strong price makes responsibilities and decision rights explicit.",
    sections: [
      { heading: "Separate strategy, execution, and media spend", paragraphs: ["Build your internal floor from compensation, tax, tools, research, professional development, insurance, and billable capacity. Then distinguish your fee from ad spend, contractors, production, travel, and software purchased for the client."], bullets: ["Price audit and strategy as defined deliverables.", "Set a separate cadence and capacity for execution.", "Keep media budgets and vendor costs visible rather than financing them yourself."] },
      { heading: "Use retainers for access with boundaries", paragraphs: ["A retainer works when the client needs a recurring decision rhythm and a reserved slice of your capacity. Define included channels, meetings, deliverables, response times, rollover rules, overages, and who approves work. Avoid an unlimited label; it converts predictability into unmanaged demand."], bullets: ["Reserve a specific monthly capacity or output.", "Name inputs the client must provide on time.", "Review the retainer when priorities or channel count changes."] },
      { heading: "Worked planning example", paragraphs: ["If your target is $150 per hour and a monthly program reserves 24 hours, the capacity value is $3,600. Add $600 of reporting tools and specialist support, then apply a 10% coordination and variability reserve to reach a $4,620 planning checkpoint. Media spend remains outside the fee. The numbers are illustrative."], bullets: ["Reserved capacity: 24 × $150 = $3,600", "Direct program costs: $600", "Coordination reserve: $420", "Planning checkpoint: $4,620"] },
      { heading: "Report contribution without guaranteeing revenue", paragraphs: ["Define leading and lagging indicators, attribution limitations, the test calendar, and what decisions follow from the data. Connect the fee to the quality and speed of the decision system rather than guaranteeing a business result affected by variables outside your control."] },
    ],
    takeaway: "Price a clear operating system for marketing decisions, with media, access, and outcome risk separated.",
    related: [{ href: "/guides/freelance-retainers", label: "Design a retainer" }, { href: "/guides/value-based-pricing", label: "Use value responsibly" }],
  },
  {
    slug: "copywriter",
    title: "Freelance copywriter rates: price research, messaging, and usage",
    eyebrow: "RATE PLAYBOOK / COPYWRITING",
    description: "Calculate a freelance copywriting rate for research, interviews, drafts, revisions, usage, and measurable business context.",
    intro: "Copy may be delivered as words on a page, but the work includes customer research, interviews, message architecture, competitive review, drafting, editing, stakeholder alignment, and sometimes performance analysis. Word count alone is a weak proxy for that responsibility.",
    sections: [
      { heading: "Build the rate from the work around the words", paragraphs: ["Your annual plan should include compensation, tax, software, research subscriptions, insurance, portfolio development, sales time, and a realistic invoiceable capacity. Estimate interviews, source review, calls, revisions, and content entry—not only drafting."], bullets: ["Separate research depth from deliverable length.", "Account for the number of reviewers and approval rounds.", "Clarify whether strategy, SEO research, or CMS entry is included."] },
      { heading: "Choose units that support quality", paragraphs: ["Hourly rates fit advisory work and changing editorial backlogs. Per-project fees fit a defined page set or campaign. Retainers fit a recurring publishing rhythm. Per-word pricing can work for standardized production, but it often underrepresents short, high-stakes conversion copy."], bullets: ["Define the brief and source material before estimating.", "State usage, exclusivity, byline, and portfolio rights.", "Price rush work for schedule disruption, not as punishment."] },
      { heading: "Worked planning example", paragraphs: ["At a $105 internal target, a landing-page engagement with 18 hours of research, interviews, writing, and review starts at $1,890. A four-hour stakeholder reserve brings the planning checkpoint to $2,310 before any rush or broad campaign-usage adjustment. This is method math, not a market average."], bullets: ["Core engagement: 18 × $105 = $1,890", "Stakeholder reserve: 4 × $105 = $420", "Planning checkpoint: $2,310"] },
      { heading: "Define completion before the first draft", paragraphs: ["Agree on one decision owner, one consolidated feedback document, the number of revision rounds, and what counts as a new direction. If performance testing is included, specify the test owner, traffic requirement, measurement window, and what optimization capacity is reserved."] },
    ],
    takeaway: "Price the research and decision work that makes the copy useful, not merely the final word count.",
    related: [{ href: "/guides/freelance-proposal-pricing", label: "Scope the proposal" }, { href: "/project-pricing-calculator", label: "Check the fixed fee" }],
  },
  {
    slug: "data-analyst",
    title: "Freelance data analyst rates: price ambiguity, data quality, and decision support",
    eyebrow: "RATE PLAYBOOK / DATA ANALYSIS",
    description: "Plan a freelance data analyst rate that covers discovery, cleaning, validation, dashboards, documentation, and decision risk.",
    intro: "Analysis time is shaped less by the number of charts than by the condition of the data and the clarity of the question. Access delays, inconsistent definitions, missing records, validation, and stakeholder interpretation can dominate the engagement. Price discovery before committing to a fixed result.",
    sections: [
      { heading: "Fund the technical and communication workload", paragraphs: ["Include compensation, tax, compute, data tools, secure storage, insurance, training, sales, and non-billable administration in your annual plan. Delivery estimates should cover extraction, cleaning, validation, analysis, visualization, meetings, documentation, and handover."], bullets: ["Make data access and quality explicit assumptions.", "Budget for definition alignment with domain experts.", "Include reproducibility and documentation in the deliverable."] },
      { heading: "Use a paid diagnostic when uncertainty is high", paragraphs: ["A short discovery phase can inventory sources, test access, profile quality, define metrics, and produce a delivery plan. After that, quote the analysis or dashboard as a fixed phase. Hourly support is often better for exploratory questions that will evolve with each finding."], bullets: ["Define who owns source-system fixes.", "Set privacy, retention, and access requirements.", "State refresh frequency and ongoing maintenance separately."] },
      { heading: "Worked planning example", paragraphs: ["At a $130 target rate, a 12-hour data diagnostic starts at $1,560. If the subsequent dashboard is estimated at 54 hours, its labor base is $7,020. Adding a 25% reserve for documented source uncertainty produces an $8,775 delivery checkpoint. These are illustrative planning figures."], bullets: ["Diagnostic: 12 × $130 = $1,560", "Dashboard labor: 54 × $130 = $7,020", "Uncertainty reserve: $1,755", "Dashboard checkpoint: $8,775"] },
      { heading: "Price the decision system, not a decorative dashboard", paragraphs: ["Document the decisions each metric should support, the owner of those decisions, acceptable latency, definitions, data caveats, and validation steps. A dashboard without adoption and governance may create activity without improving decisions."] },
    ],
    takeaway: "Reduce unknowns through paid discovery, then price the verified delivery and its decision responsibility.",
    related: [{ href: "/guides/billable-hours", label: "Model realistic capacity" }, { href: "/guides/value-based-pricing", label: "Frame decision value" }],
  },
  {
    slug: "ux-designer",
    title: "Freelance UX designer rates: price research, facilitation, and product risk",
    eyebrow: "RATE PLAYBOOK / UX DESIGN",
    description: "Build a freelance UX design rate for research, workshops, interaction design, testing, stakeholder alignment, and product uncertainty.",
    intro: "UX work moves a team from assumptions toward evidence. Recruiting, interviews, synthesis, flows, prototypes, testing, facilitation, and design-system alignment each consume different kinds of capacity. A project fee should describe the learning and decisions included, not imply unlimited iteration.",
    sections: [
      { heading: "Calculate capacity across the whole research cycle", paragraphs: ["Your internal target should fund compensation, tax, tools, participant incentives you cover, insurance, equipment, learning, sales, and non-billable operations. In estimates, include recruiting coordination, session preparation, synthesis, readouts, and artifact maintenance."], bullets: ["Separate participant incentives and recruiting vendors.", "Count facilitation and stakeholder preparation time.", "Specify prototype fidelity and design-system expectations."] },
      { heading: "Price phases around decisions", paragraphs: ["Discovery, research, concept design, validation, and handoff can be priced as separate phases with go/no-go decisions between them. That structure limits speculative commitments and lets the next scope reflect what the team has learned."], bullets: ["Define participant count and audience criteria.", "Name the decisions each phase is meant to inform.", "State revision rounds and what constitutes a new product direction."] },
      { heading: "Worked planning example", paragraphs: ["At a $125 target rate, a research sprint estimated at 46 hours has a $5,750 labor base. Add $1,000 for recruiting and incentives plus a 15% coordination reserve on the combined cost, producing a $7,762.50 planning checkpoint. Round deliberately in the client quote. This is an illustration."], bullets: ["Labor: 46 × $125 = $5,750", "Research costs: $1,000", "Coordination reserve: $1,012.50", "Planning checkpoint: $7,762.50"] },
      { heading: "Keep outcomes honest", paragraphs: ["Promise a rigorous process, clear evidence, and decision-ready recommendations—not guaranteed adoption or revenue. Product performance depends on implementation, traffic, market conditions, and choices made after your engagement."] },
    ],
    takeaway: "Anchor the scope to learning objectives and decisions, then price every phase required to produce credible evidence.",
    related: [{ href: "/guides/freelance-proposal-pricing", label: "Structure a phased proposal" }, { href: "/guides/value-based-pricing", label: "Discuss product value" }],
  },
  {
    slug: "virtual-assistant",
    title: "Freelance virtual assistant rates: price capacity, systems, and response time",
    eyebrow: "RATE PLAYBOOK / VIRTUAL ASSISTANCE",
    description: "Plan virtual assistant rates for recurring support, reserved capacity, tools, response times, and specialized operational responsibility.",
    intro: "Administrative support is often priced as if every hour were interchangeable. In practice, the value and workload change with response expectations, system complexity, confidentiality, decision authority, and the cost of switching between clients. A sustainable offer defines capacity and service level together.",
    sections: [
      { heading: "Build a floor that includes coordination time", paragraphs: ["Your annual plan should include compensation, tax, software, equipment, insurance, training, sales, and unpaid administration. Billable capacity should reflect client switching, inbox checks, scheduling gaps, and the time needed to maintain reliable systems."], bullets: ["Include recurring account and process maintenance.", "Price specialized tools or certifications into the service.", "Reserve time for your own operations and pipeline."] },
      { heading: "Package access without promising unlimited work", paragraphs: ["Monthly packages can reserve a number of hours, a defined task queue, or a service outcome. State business hours, response target, communication channel, task priority, rollover, overages, approval limits, and emergency availability."], bullets: ["Use a minimum booking size for fragmented requests.", "Charge separately for after-hours or urgent coverage.", "Review packages when task complexity or meeting load changes."] },
      { heading: "Worked planning example", paragraphs: ["At a $55 internal target, a 30-hour monthly capacity block has a $1,650 value. Add $120 in client-specific tools and a 10% coordination reserve for a $1,947 planning checkpoint. Whether you round, bundle, or adjust that price depends on commitment quality and service level. This is illustrative."], bullets: ["Reserved capacity: 30 × $55 = $1,650", "Client-specific tools: $120", "Coordination reserve: $177", "Planning checkpoint: $1,947"] },
      { heading: "Increase rates by increasing clarity", paragraphs: ["Track recurring workflows, document the systems you improve, and report time saved, errors prevented, or response reliability. Specialized operations, bookkeeping coordination, launch support, or executive assistance may justify a different offer from general task execution."] },
    ],
    takeaway: "Sell a clear capacity and response promise, then protect it with priority, hours, and overage rules.",
    related: [{ href: "/guides/freelance-retainers", label: "Build a monthly package" }, { href: "/guides/raise-freelance-rates", label: "Reprice existing clients" }],
  },
  {
    slug: "business-consultant",
    title: "Freelance business consultant rates: price diagnosis, decisions, and change",
    eyebrow: "RATE PLAYBOOK / BUSINESS CONSULTING",
    description: "Plan business consulting rates for diagnosis, workshops, recommendations, implementation support, and executive access.",
    intro: "Consulting value often comes from improving a consequential decision, but the delivery still requires research, facilitation, analysis, communication, and implementation support. A strong fee uses cost-based economics as a guardrail and value context as a separate judgment.",
    sections: [
      { heading: "Know your internal economics before discussing value", paragraphs: ["Calculate the annual revenue required for compensation, tax, insurance, research, travel, tools, professional development, business development, and realistic client capacity. Senior consulting often carries substantial unbilled preparation and pipeline time."], bullets: ["Estimate preparation and follow-up for every workshop.", "Separate travel days and reimbursable expenses.", "Account for partner or specialist support."] },
      { heading: "Structure engagements around decisions", paragraphs: ["A diagnostic, recommendation, and implementation phase can each have a clear question, evidence base, deliverable, and decision gate. Day rates fit workshops and working sessions. Fixed fees fit defined decision projects. Retainers fit ongoing executive access only when cadence and boundaries are explicit."], bullets: ["Name the decision owner and required stakeholders.", "Define data and access the client must provide.", "Describe implementation support separately from advice."] },
      { heading: "Worked planning example", paragraphs: ["At a $225 target rate, 40 hours of interviews, analysis, facilitation, and recommendations creates a $9,000 labor base. Add $1,500 of specialist review and a 20% delivery-risk reserve for a $12,600 planning checkpoint. Value context may move the final proposal, but the checkpoint protects delivery economics. Figures are illustrative."], bullets: ["Core delivery: 40 × $225 = $9,000", "Specialist review: $1,500", "Risk reserve: $2,100", "Planning checkpoint: $12,600"] },
      { heading: "Avoid performance promises you cannot govern", paragraphs: ["Define the decisions, implementation responsibilities, assumptions, and success measures. If part of the fee depends on results, specify baseline, attribution, data access, time horizon, payment mechanics, and what happens when the client does not implement the agreed plan."] },
    ],
    takeaway: "Use your cost floor as a guardrail, then price the decision responsibility and implementation burden transparently.",
    related: [{ href: "/guides/value-based-pricing", label: "Use value-based pricing" }, { href: "/guides/freelance-proposal-pricing", label: "Frame the proposal" }],
  },
];

export const guideEntries: ContentEntry[] = [
  {
    slug: "billable-hours",
    title: "How to calculate realistic freelance billable hours",
    eyebrow: "FIELD GUIDE / CAPACITY",
    description: "Estimate freelance billable hours from working weeks, utilization, admin, sales, and delivery patterns instead of dividing by 2,080.",
    intro: "The denominator in your rate formula is often more important than a small expense change. Total working time includes selling, planning, administration, learning, and gaps. Billable capacity counts only the time clients can actually be invoiced.",
    sections: [
      { heading: "Use a capacity equation you can audit", paragraphs: ["Start with weekly working hours, subtract full weeks away, then multiply by the share of remaining time you expect to invoice. For example, 40 hours × 47 working weeks × 62% billable time produces about 1,166 billable hours."], bullets: ["Total capacity: 40 × 47 = 1,880 hours", "Billable capacity: 1,880 × 62% ≈ 1,166 hours", "Non-billable capacity: approximately 714 hours"] },
      { heading: "Count all the work clients do not see", paragraphs: ["Sales calls, proposals, follow-ups, marketing, bookkeeping, scheduling, training, internal tools, portfolio upkeep, and gaps between projects still require time. Treating them as nonexistent shifts their cost onto the hours that remain billable."], bullets: ["Track delivery and client communication separately.", "Track sales and proposal time by opportunity.", "Review write-offs and unbilled revisions after each project."] },
      { heading: "Model three scenarios", paragraphs: ["Create conservative, expected, and strong-pipeline cases. Your floor should survive the expected case without depending on perfect utilization. The conservative case shows how much cash reserve or price flexibility the business needs during a slower period."] },
      { heading: "Update the assumption with evidence", paragraphs: ["Review trailing three-, six-, and twelve-month utilization. A short strong month is not a new annual baseline. Adjust for planned leave, seasonality, large internal projects, and changes in service mix."] },
    ],
    takeaway: "Price across the hours you can realistically invoice, not every hour on the calendar.",
    related: [{ href: "/#calculator", label: "Model your billable capacity" }, { href: "/guides/raise-freelance-rates", label: "Review your rate" }],
  },
  {
    slug: "freelance-tax-rate",
    title: "How to include taxes in a freelance rate without guessing",
    eyebrow: "FIELD GUIDE / TAX PLANNING",
    description: "Use an effective tax planning estimate in your freelance rate while keeping jurisdiction-specific tax advice separate.",
    intro: "Taxes are part of the revenue requirement, not an amount to discover after the client pays. RatePilot uses an estimated effective rate to gross up the owner-compensation goal. The input is a planning assumption—not a tax return calculation or legal recommendation.",
    sections: [
      { heading: "Understand effective versus marginal rates", paragraphs: ["A marginal rate applies to the next slice of taxable income. An effective rate is the average share of taxable profit paid across the whole amount. Business structure, location, deductions, social contributions, filing status, and other income can change both."], bullets: ["Use last year’s actual total tax divided by the relevant profit as a starting reference.", "Adjust for known changes with a qualified professional.", "Keep sales tax or VAT collected for authorities separate from your revenue."] },
      { heading: "Gross up instead of adding the percentage", paragraphs: ["If you need to retain $80,000 after an estimated 25% effective tax, dividing by 0.75 gives about $106,667 before tax. Simply adding 25% produces $100,000, which would retain only $75,000 after the same assumption."], bullets: ["Gross-up formula: after-tax goal ÷ (1 − effective rate)", "Illustration: $80,000 ÷ 0.75 = $106,667", "Then add business costs and divide by billable capacity."] },
      { heading: "Keep the estimate conservative and reviewable", paragraphs: ["Maintain a separate tax reserve, review the percentage as profit changes, and avoid treating the calculator as jurisdiction-specific advice. If your structure or location changes, rebuild the assumption before repricing long engagements."] },
      { heading: "Do not send tax assumptions to analytics", paragraphs: ["RatePilot keeps calculator inputs in your browser. Its analytics events describe tool usage without attaching your entered income, cost, or tax amounts. Shared calculator links are different: they can contain the values in the URL, so treat them as sensitive."] },
    ],
    takeaway: "Use an evidence-based effective-rate estimate to plan revenue, then confirm the assumption with a qualified local adviser.",
    related: [{ href: "/privacy", label: "Read the privacy policy" }, { href: "/salary-to-freelance-rate", label: "Model salary replacement" }],
  },
  {
    slug: "value-based-pricing",
    title: "Value-based pricing for freelancers: a practical, honest method",
    eyebrow: "FIELD GUIDE / VALUE",
    description: "Use value-based pricing alongside a cost floor, with clear outcomes, alternatives, risk, and scope rather than arbitrary markups.",
    intro: "Value-based pricing does not mean guessing the client’s budget and charging the largest number possible. It means understanding the decision, the credible economic or strategic impact, the alternatives, and the share of responsibility your work carries—while keeping your own delivery economics protected.",
    sections: [
      { heading: "Keep cost, market, and value as separate lenses", paragraphs: ["Your cost floor answers whether the engagement can sustain the business. Market context shows how clients compare alternatives. Value context explores the importance of the outcome. A good proposal considers all three without pretending one formula produces an objectively correct fee."], bullets: ["Cost floor: can you deliver sustainably?", "Alternatives: what else can the client do?", "Value: what decision or outcome becomes possible?", "Risk: what uncertainty and responsibility are you accepting?"] },
      { heading: "Ask questions that reveal decision context", paragraphs: ["Explore the current problem, why it matters now, what happens if nothing changes, how success will be measured, who owns implementation, and which alternatives are being considered. Look for a credible range, not a theatrical promise."], bullets: ["What decision will this work change?", "What is the cost of delay or continued failure?", "Which outcomes are actually within your influence?", "What evidence will be available afterward?"] },
      { heading: "Offer choices that change scope and responsibility", paragraphs: ["A useful three-option proposal changes the level of diagnosis, delivery, access, speed, or implementation support. It should not present the same workload at three arbitrary prices. Each option needs a clear buyer, outcome, boundary, and tradeoff."] },
      { heading: "Avoid false precision and unsupported guarantees", paragraphs: ["If the client’s upside is large but uncertain, describe assumptions and attribution limits. Performance fees require clear baselines, data access, time horizons, implementation duties, and payment mechanics. Never promise a result controlled by product, sales, traffic, or market conditions outside your authority."] },
    ],
    takeaway: "Use value to shape the offer and responsibility—not to hide weak scope or invent certainty.",
    related: [{ href: "/guides/freelance-proposal-pricing", label: "Turn value into proposal options" }, { href: "/project-pricing-calculator", label: "Protect the delivery floor" }],
  },
  {
    slug: "freelance-retainers",
    title: "Freelance retainer pricing: reserve capacity without selling unlimited work",
    eyebrow: "FIELD GUIDE / RETAINERS",
    description: "Build a freelance retainer with reserved capacity, response times, rollover, overages, boundaries, and a healthy monthly price.",
    intro: "A retainer is an operating agreement, not merely a recurring invoice. The client receives predictable access or output; you receive demand visibility and a clearer schedule. The exchange works only when capacity, priority, and boundaries are explicit.",
    sections: [
      { heading: "Choose what the client is reserving", paragraphs: ["Retainers can reserve hours, a task queue, defined deliverables, an advisory cadence, or a service level. Pick one primary model and explain how requests enter, who prioritizes them, and when work is considered delivered."], bullets: ["Capacity: a defined number of hours or days.", "Output: a repeatable set of deliverables.", "Access: a meeting and response-time cadence.", "Service level: a managed operational responsibility with clear exclusions."] },
      { heading: "Price from capacity and operating cost", paragraphs: ["Start with the capacity value at your target rate, add client-specific tools and coordination, then consider whether the commitment genuinely reduces sales risk or scheduling waste. A discount is not mandatory. Priority access or a fast response promise may justify a premium."], bullets: ["State whether unused capacity expires or rolls over.", "Define overage approval and rate.", "Separate pass-through costs and subcontractors.", "Set a review date for changing demand."] },
      { heading: "Create an intake and priority system", paragraphs: ["Name one client owner, one request channel, and a priority rule. Limit simultaneous work. A retainer with five stakeholders, daily interruptions, and no queue can consume more capacity than the recorded task hours suggest."] },
      { heading: "Design the exit before the start", paragraphs: ["Document term, renewal, cancellation notice, transition support, access removal, final asset handoff, and outstanding overages. A clear exit protects both parties and makes the commitment easier to approve."] },
    ],
    takeaway: "Sell a defined operating promise—capacity, access, or output—and price the coordination required to keep it reliable.",
    related: [{ href: "/#calculator", label: "Calculate a retainer checkpoint" }, { href: "/guides/raise-freelance-rates", label: "Reprice a retainer" }],
  },
  {
    slug: "freelance-proposal-pricing",
    title: "How to present freelance pricing in a proposal",
    eyebrow: "FIELD GUIDE / PROPOSALS",
    description: "Present freelance pricing with outcomes, scope, assumptions, options, payment terms, and change control that clients can evaluate.",
    intro: "A proposal should help a buyer make a decision. It connects the client’s situation to a recommended engagement, makes the boundaries legible, and states the commercial terms without forcing the reader to reverse-engineer your estimate.",
    sections: [
      { heading: "Lead with the decision and desired change", paragraphs: ["Summarize the current situation, the consequence of leaving it unresolved, the outcome the engagement should support, and the evidence that will show progress. Confirm what you heard rather than filling the opening with credentials."], bullets: ["Situation and trigger", "Desired outcome and success evidence", "Recommended approach", "Client responsibilities and dependencies"] },
      { heading: "Make scope testable", paragraphs: ["List deliverables, phases, revision or review process, included meetings, technical or content assumptions, exclusions, and acceptance. Use ordinary language. If a reasonable person could interpret a bullet three different ways, tighten it before attaching a price."], bullets: ["Name the artifact or decision delivered.", "Name the completion condition.", "Name what the client supplies and by when.", "Name the change process."] },
      { heading: "Use options to clarify tradeoffs", paragraphs: ["Options should change speed, depth, access, scope, implementation support, or risk—not merely the number beside identical work. Recommend one option and explain why it fits the stated decision."], bullets: ["Essential: the narrowest complete route to the outcome.", "Recommended: the best balance of evidence and implementation.", "Extended: additional speed, access, coverage, or rollout support."] },
      { heading: "State commercial terms beside the fee", paragraphs: ["Include currency, taxes, payment schedule, deposit, expenses, late payment, quote validity, scheduling assumptions, cancellation, intellectual property, and signature method. Milestones should follow delivery risk and cash flow rather than arbitrary calendar thirds."] },
    ],
    takeaway: "Make the outcome, boundary, and buying tradeoff easy to understand before asking for a signature.",
    related: [{ href: "/project-pricing-calculator", label: "Build the fee checkpoint" }, { href: "/guides/value-based-pricing", label: "Frame the value context" }],
  },
  {
    slug: "raise-freelance-rates",
    title: "How to raise freelance rates with evidence and a transition plan",
    eyebrow: "FIELD GUIDE / RATE REVIEW",
    description: "Raise freelance rates by reviewing realized economics, reshaping scope, communicating clearly, and planning client transitions.",
    intro: "A rate increase is easier to manage when it is part of a regular business review rather than an emergency response to burnout. The goal is not to justify your worth as a person; it is to keep the service economically viable as costs, capacity, demand, and responsibility change.",
    sections: [
      { heading: "Review realized economics, not only the posted rate", paragraphs: ["Compare your collected revenue with the true hours required for delivery, communication, revisions, sales, and write-offs. Track client concentration, payment delays, scope drift, utilization, expenses, and the services that create the clearest outcomes."], bullets: ["Realized rate = collected fee ÷ actual total engagement hours.", "Review billable percentage and pipeline gaps.", "Identify unpriced meetings, revisions, and urgent requests.", "Rebuild the annual revenue plan."] },
      { heading: "Choose the right lever", paragraphs: ["You can raise the unit rate, increase minimum engagements, narrow included scope, charge for priority, separate strategy from production, reduce discounts, or retire an offer. Sometimes the healthiest increase is a clearer package rather than a higher number on the same loose agreement."] },
      { heading: "Give existing clients a clear transition", paragraphs: ["State the new price, effective date, what remains included, and any options. Provide reasonable notice consistent with the contract and relationship. Avoid a long apology; explain the operational change plainly and invite a scope conversation if the budget no longer fits."], bullets: ["Confirm current commitments and renewal dates.", "Apply the change consistently unless there is a deliberate reason not to.", "Offer a smaller scope instead of silently preserving old economics.", "Get the updated agreement in writing."] },
      { heading: "Measure what happens next", paragraphs: ["Track acceptance, churn, realized rate, workload, lead quality, and whether the change actually improved capacity. A higher nominal rate with more unpaid coordination may not improve the business. Review again after a full delivery cycle."] },
    ],
    takeaway: "Raise rates as part of a repeatable operating review, with evidence, boundaries, notice, and a measured follow-through.",
    related: [{ href: "/#calculator", label: "Rebuild your target rate" }, { href: "/guides/billable-hours", label: "Audit your capacity" }],
  },
];

export const professionPaths = professionEntries.map((entry) => `/freelance-rates/${entry.slug}`);
export const guidePaths = guideEntries.map((entry) => `/guides/${entry.slug}`);

export const getProfession = (slug: string) => professionEntries.find((entry) => entry.slug === slug);
export const getGuide = (slug: string) => guideEntries.find((entry) => entry.slug === slug);
