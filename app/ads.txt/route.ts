export function GET() {
  const publisher = process.env.ADSENSE_PUBLISHER_ID;
  const body = publisher ? `google.com, ${publisher}, DIRECT, f08c47fec0942fa0\n` : "# Advertising seller record will appear here after a verified publisher ID is configured.\n";
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
