import { guidePaths, professionPaths } from "../content/seo";

export const dynamic = "force-static";

const paths = ["/", "/day-rate-calculator", "/salary-to-freelance-rate", "/project-pricing-calculator", "/freelance-rates", "/guides", "/guides/freelance-pricing", ...professionPaths, ...guidePaths, "/about", "/embed", "/privacy", "/terms"];

export function GET() {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://nexypotai.com";
  const urls = paths.map((path) => `<url><loc>${origin}${path}</loc><lastmod>2026-07-18</lastmod><changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq><priority>${path === "/" ? "1.0" : path.includes("calculator") || path.includes("salary") || path === "/guides" || path === "/freelance-rates" ? "0.8" : "0.7"}</priority></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
