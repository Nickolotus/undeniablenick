import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const DIR = 'public';
const TARGETS = ['hero-outdoor', 'trail-landscape', 'faith-morning', 'garage-gym'];

for (const name of TARGETS) {
  const inPath = path.join(DIR, `${name}.png`);
  const outPath = path.join(DIR, `${name}.webp`);
  const pngStat = await fs.stat(inPath);
  await sharp(inPath).webp({ quality: 82, effort: 6 }).toFile(outPath);
  const webpStat = await fs.stat(outPath);
  const pngKb = Math.round(pngStat.size / 1024);
  const webpKb = Math.round(webpStat.size / 1024);
  const pct = Math.round((1 - webpStat.size / pngStat.size) * 100);
  console.log(`${name}: ${pngKb}KB -> ${webpKb}KB (${pct}% smaller)`);
}
