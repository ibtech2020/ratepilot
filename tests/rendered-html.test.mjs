import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the RatePilot calculator", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /RatePilot/);
  assert.match(html, /Your rate should fund your life/);
  assert.match(html, /BUILD YOUR RATE PLAN/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("renders focused calculator pages", async () => {
  for (const path of ["/day-rate-calculator", "/salary-to-freelance-rate", "/project-pricing-calculator"]) {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(await response.text(), /QUICK INPUTS/);
  }
});

test("serves the standalone embed without ads", async () => {
  const response = await render("/embed/freelance-rate-calculator");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /SUSTAINABLE FLOOR/);
  assert.match(html, /utm_source=embed/);
  assert.doesNotMatch(html, /adsbygoogle|googlesyndication/);
});

test("renders original guide and profession hubs", async () => {
  for (const [path, phrase] of [["/guides", "Better pricing decisions"], ["/freelance-rates", "Price the work behind the deliverable"]]) {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(await response.text(), new RegExp(phrase));
  }
});

test("renders the static long-form content library", async () => {
  for (const [path, phrase] of [["/guides/value-based-pricing", "Keep cost, market, and value"], ["/freelance-rates/web-developer", "Start with your delivery system"]]) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(phrase));
    assert.match(html, /application\/ld\+json/);
  }
});

test("publishes the expanded sitemap", async () => {
  const response = await render("/sitemap.xml");
  assert.equal(response.status, 200);
  const xml = await response.text();
  assert.match(xml, /freelance-rates\/web-developer/);
  assert.match(xml, /guides\/raise-freelance-rates/);
  assert.equal((xml.match(/<url>/g) || []).length, 25);
});
