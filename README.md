# RatePilot

An advanced freelance rate and pricing planner built for useful organic search traffic, repeat use, and policy-conscious monetization.

## Product features

- Floor, target, and high-risk hourly rates
- Seven display currencies
- Taxes, benefits, retirement, recurring costs, one-off costs, time off, and billable capacity
- Day, weekly, retainer, and fixed-project equivalents
- Current-rate annual shortfall check
- Revenue allocation and full calculation trail
- Local autosave, shareable pre-filled links, copied summaries, and downloadable plans
- Focused day-rate, salary-conversion, and project-pricing calculators
- Advertising-free embeddable calculator with attributed referral links
- Long-form pricing guide, transparent methodology, privacy, and terms pages
- Canonical-aware sitemap and robots files generated for the production host
- Open Graph social card and structured data
- Optional Google Analytics and AdSense hooks that remain inactive until real IDs are supplied

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Cloudflare Pages deployment

RatePilot supports a fully static production export for Cloudflare Pages. Static assets do not invoke Pages Functions.

Use these settings when connecting `ibtech2020/ratepilot` to Cloudflare Pages:

- Production branch: `main`
- Build command: `npm run build:pages`
- Build output directory: `out`
- Environment variable: `NEXT_PUBLIC_SITE_URL=https://nexypotai.com`
- Node.js version: `22.13.0` or newer

Cloudflare's Git integration rebuilds and deploys the production site after every push to `main`. Pull request branches receive isolated preview deployments.

## Optional measurement and advertising

The site works without third-party scripts. To activate integrations, configure real values before building:

- `NEXT_PUBLIC_GA_ID` — Google Analytics measurement ID
- `NEXT_PUBLIC_ADSENSE_CLIENT` — AdSense client such as `ca-pub-...`
- `NEXT_PUBLIC_ADSENSE_SLOT_HOME_AFTER_CALCULATOR` — responsive unit after the main calculator
- `ADSENSE_PUBLISHER_ID` — seller ID used by `/ads.txt`, such as `pub-...`

Do not invent IDs or activate advertising before account approval. Review consent requirements for the visitor’s location and update the privacy policy when processors change.

## Search launch checklist

1. Add the production property to Google Search Console and Bing Webmaster Tools.
2. Submit `/sitemap.xml` and request indexing for the four calculator pages.
3. Connect analytics and review calculator share, download, and embed-code events.
4. Publish original examples or research only when it adds first-hand value; avoid mass-generated profession pages.
5. Earn relevant links through freelancer communities, accounting partners, newsletters, and embeddable educational resources.
6. Add ads only after the site has useful traffic, approved accounts, and a consent solution where required.

## Important

The calculators provide educational planning estimates, not tax, legal, accounting, or financial advice. Traffic, ad approval, and revenue are not guaranteed.
