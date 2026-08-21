// Capture a product screenshot of the training app for the Coaching page.
// Loads the live app, waits for it to pull state from the sync endpoint, then
// shoots the session card. Rerun this whenever the app UI changes.

import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "public", "training-app.png");

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 3 });
await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "dark" }]);
await page.goto("https://undeniable-rebuild.netlify.app", { waitUntil: "networkidle0" });

// the app pulls its log from the server on load; give it a beat to land and repaint
await new Promise((r) => setTimeout(r, 2500));

await page.evaluate(() => {
  // land the first lift card just under the sticky header, no clipped text on top
  const el = document.querySelector('[data-lift="0"]');
  const header = document.querySelector(".top");
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo(0, top - (header ? header.offsetHeight : 0) - 10);
  }
  const t = document.getElementById("treset");
  if (t) t.click();
});
await new Promise((r) => setTimeout(r, 600));

await page.screenshot({ path: OUT });
console.log("wrote", OUT);
await browser.close();
