export const dynamic = "force-static";

export function GET() {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://ratepilot-ibtech2020.pages.dev";
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
