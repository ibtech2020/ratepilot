const paths = ["/", "/day-rate-calculator", "/salary-to-freelance-rate", "/project-pricing-calculator", "/guides/freelance-pricing", "/about", "/embed", "/privacy", "/terms"];

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const urls = paths.map((path) => `<url><loc>${origin}${path}</loc><changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq><priority>${path === "/" ? "1.0" : path.includes("calculator") || path.includes("salary") ? "0.8" : "0.6"}</priority></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
