import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import AnalyticsConsent from "./components/AnalyticsConsent";
import "./globals.css";

const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
const analyticsId = process.env.NEXT_PUBLIC_GA_ID || "G-CYENNL7K9C";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nexypotai.com";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "RatePilot — Freelance Rate Calculator & Pricing Planner",
      template: "%s | RatePilot",
    },
    description:
      "Calculate a sustainable freelance hourly rate, day rate, project quote, and retainer using taxes, overhead, benefits, time off, and real billable capacity.",
    applicationName: "RatePilot",
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      title: "RatePilot — Price freelance work with the full picture",
      description:
        "Turn your income goal, costs, taxes, and capacity into a rate you can defend.",
      images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "RatePilot freelance rate planner" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "RatePilot — Freelance Rate Planner",
      description: "Find your floor, target, and rush rates with transparent math.",
      images: ["/og-v2.png"],
    },
    icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header">
          <div className="shell nav-wrap">
            <Link className="brand" href="/" aria-label="RatePilot home">
              <span className="brand-mark" aria-hidden="true">R</span>
              <span>RatePilot</span>
            </Link>
            <nav aria-label="Primary navigation">
              <Link href="/#calculator">Calculator</Link>
              <Link href="/day-rate-calculator">Day rate</Link>
              <Link href="/salary-to-freelance-rate">Salary converter</Link>
              <Link href="/project-pricing-calculator">Project pricing</Link>
              <Link href="/freelance-rates">Rate playbooks</Link>
              <Link href="/guides">Guides</Link>
            </nav>
            <Link className="nav-cta" href="/#calculator">Plan my rate</Link>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="shell footer-grid">
            <div>
              <Link className="brand brand--footer" href="/"><span className="brand-mark">R</span><span>RatePilot</span></Link>
              <p>Transparent pricing math for independent professionals. No signup, and calculator inputs stay in your browser.</p>
            </div>
            <div>
              <strong>Tools</strong>
              <Link href="/">Hourly rate calculator</Link>
              <Link href="/day-rate-calculator">Day rate calculator</Link>
              <Link href="/salary-to-freelance-rate">Salary converter</Link>
              <Link href="/project-pricing-calculator">Project pricing</Link>
              <Link href="/freelance-rates">Rate playbooks</Link>
            </div>
            <div>
              <strong>Learn</strong>
              <Link href="/guides">All pricing guides</Link>
              <Link href="/guides/freelance-pricing">Complete pricing method</Link>
              <Link href="/about">About the methodology</Link>
              <Link href="/embed">Embed the calculator</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
          <div className="shell footer-bottom">
            <span>© {new Date().getFullYear()} RatePilot</span>
            <span>Educational planning estimates, not tax or financial advice.</span>
          </div>
        </footer>
        {adsenseClient ? (
          <Script
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
          />
        ) : null}
        <Script id="ratepilot-consent-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          var savedConsent = null;
          try { savedConsent = window.localStorage.getItem('ratepilot-analytics-consent'); } catch (error) {}
          gtag('consent', 'default', {
            analytics_storage: savedConsent === 'granted' ? 'granted' : 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
        `}</Script>
        <Script async strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} />
        <Script id="ratepilot-analytics" strategy="afterInteractive">{`
          gtag('js', new Date());
          gtag('config', '${analyticsId}', { anonymize_ip: true });
        `}</Script>
        <AnalyticsConsent />
      </body>
    </html>
  );
}
