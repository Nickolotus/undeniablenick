const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Canvas: 1080x1080, icon in center 500x500 safe zone
// Display: ~161px circle on Instagram profile
// Rules: solid filled icons, 40-50% of canvas width, centered

const SIZE = 1080;
const CX = SIZE / 2;
const CY = SIZE / 2;
const FOREST = "#2D4A3E";
const GOLDEN = "#D4943A";
const CIRCLE_R = 380;
const CIRCLE_STROKE = 8;
const ICON_SIZE = 480; // icon area fills ~44% of canvas
const ICON_OFFSET = (SIZE - ICON_SIZE) / 2;

const outDir = path.join(__dirname, "highlight-covers");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

// All paths are from Material Design Icons (Apache 2.0), viewBox 0 0 24 24
const icons = {
  // MDI "run" / "directions-run"
  running: "M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z",

  // Clean 4-tine fork (custom path, 24x24 viewBox)
  grub: "M7 1h2v8H7V1zM10.33 1h2v8h-2V1zM13.66 1h2v8h-2V1zM17 1h2v8h-2V1zM6.5 9.5h13c0 3.5-3 5.5-5.5 6L13.5 23h-1l-.5-7.5c-2.5-.5-5.5-2.5-5.5-6z",

  // Christian cross with proper proportions (custom, taller vertical)
  faith: "M10.25 0h3.5v7.5h7v3.5h-7V24h-3.5V11h-7V7.5h7z",

  // MDI "kettlebell" (filled solid)
  training: "M16.2 10.7l.6-2.4c.1-.3.5-1.7-.3-2.9C15.9 4.5 14.7 4 13 4h-2c-1.7 0-2.9.5-3.5 1.4c-.8 1.2-.4 2.5-.3 2.9l.6 2.4C6.7 11.8 6 13.3 6 15c0 2.1 1.1 3.9 2.7 5h6.6c1.6-1.1 2.7-2.9 2.7-5c0-1.7-.7-3.2-1.8-4.3M9.6 9.5l-.5-1.7v-.1s-.2-.7.1-1.1Q9.5 6 11 6h2c.9 0 1.6.2 1.9.5c.3.4.1 1.1.1 1.1l-.5 1.9c-.8-.3-1.6-.5-2.5-.5s-1.7.2-2.4.5",
};

function createSVG(iconPath, scale = 1) {
  const s = ICON_SIZE * scale;
  const o = (SIZE - s) / 2;
  return `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${SIZE}" height="${SIZE}" fill="${FOREST}"/>
  <circle cx="${CX}" cy="${CY}" r="${CIRCLE_R}" fill="none" stroke="${GOLDEN}" stroke-width="${CIRCLE_STROKE}"/>
  <g transform="translate(${o}, ${o}) scale(${s / 24})">
    <path d="${iconPath}" fill="${GOLDEN}"/>
  </g>
</svg>`;
}

async function main() {
  const entries = [
    { name: "running", path: icons.running },
    { name: "grub", path: icons.grub },
    { name: "faith", path: icons.faith },
    { name: "training", path: icons.training, scale: 1.35 },
  ];

  for (const entry of entries) {
    const svg = createSVG(entry.path, entry.scale || 1);
    const outPath = path.join(outDir, `highlight-${entry.name}.png`);
    await sharp(Buffer.from(svg)).resize(SIZE, SIZE).png().toFile(outPath);
    console.log(`Created: ${outPath}`);
  }

  console.log("\nDone!");
}

main();
