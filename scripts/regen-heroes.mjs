import fs from 'node:fs/promises';
import path from 'node:path';

const envText = await fs.readFile('C:/Users/chias/Claude Work/NATE/.env', 'utf8');
const OPENAI_API_KEY = envText.match(/^OPENAI_API_KEY=(.+)$/m)?.[1]?.trim();
if (!OPENAI_API_KEY) throw new Error('OPENAI_API_KEY not found');

const OUT_DIR = 'public';
const SIZE = '1536x1024';
const MODEL = 'gpt-image-1';
const QUALITY = 'high';

const IMAGES = [
  {
    name: 'hero-outdoor',
    prompt: 'Phone photograph from the edge of a Louisiana pine forest on an early overcast morning, looking out from the treeline across a wide open grass field. The left third of the frame is dominated by the trunks of real longleaf pines with ordinary underbrush and pine needles on the ground. The right two-thirds open up into a gently rolling grass field with tall dry grass, some wildflowers and weeds, and a barbed-wire fence line visible far in the distance. Flat diffuse natural daylight, no sunbeams, no mist, no god rays, no lens flare. Natural muted greens, tans, and earth tones, unedited, no color grading, no HDR. Slightly off-center handheld composition. The top third of the frame is pale gray overcast sky. No people, no animals, no text, no watermarks, no logos.',
  },
  {
    name: 'trail-landscape',
    prompt: 'Phone photograph of an empty dirt footpath curving gently into a Louisiana pine forest. Shot on a plain overcast morning. Flat diffuse natural light, no sun, no mist, no fog, no light rays, no lens flare. Real pine trees in irregular spacing with ordinary underbrush, pine needles and twigs scattered on the path, uneven dirt. The path takes up the bottom third of the frame, tree trunks fill the middle, a small strip of pale gray sky visible through the canopy at the top. Slightly off-center composition, like a handheld phone photo someone took on a walk. Natural muted green and tan color. No filter, no HDR, no color grading, unedited. No people. No text. No watermarks.',
  },
  {
    name: 'faith-morning',
    prompt: 'Phone photograph of a plain wooden kitchen table near a window on an overcast morning. On the table: an open cloth-bound journal with visible handwritten pages, a plain white ceramic mug about two-thirds full of black coffee (no steam), a worn leather-bound Bible closed with a ribbon bookmark, a standard black ballpoint pen. Objects are arranged casually, not symmetrically, like someone just stepped away. Soft flat sidelight from the window. Shot from a three-quarter overhead angle as if taken by someone standing at the edge of the table with their phone. Slight crumbs visible, a small water ring on the wood, small imperfections in the wood grain. Background softly out of focus: pale wall, edge of a chair back. No direct sunbeams, no warm glow, no shallow-depth-of-field cinematic look. Natural warm-white indoor light. No filter, unedited, no color grading. No text on the pages readable as words, no brand logos on the mug. No people.',
  },
  {
    name: 'garage-gym',
    prompt: 'Phone photograph of a single-car residential garage set up as a home workout space, shot on an overcast morning with the garage door open at the far end letting in flat gray outdoor light. In the foreground: one black cast-iron kettlebell sitting on a black rubber mat on a concrete floor. A simple pullup bar mounted in the door frame to one side. A pair of plain gymnastic rings hanging from a ceiling joist on black straps, the straps hanging slightly unevenly. Ordinary garage details visible: a plastic storage bin in one corner, a broom leaning against the wall, some dust on the concrete, small cracks in the floor, a wall hook with a jump rope and a towel. No sunbeams, no dust motes lit up, no warm glow, no lens flare. Natural overcast daylight only. Shot handheld on a phone, slightly imperfect composition, a bit of the ceiling visible at the top of the frame. Muted concrete gray, black rubber, off-white drywall. No filter, no HDR, unedited, no color grading. No people. No brand logos on any equipment. No text.',
  },
];

async function generate(img) {
  console.log(`\n[${img.name}] generating ${SIZE} ${QUALITY}...`);
  const t0 = Date.now();
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      prompt: img.prompt,
      size: SIZE,
      quality: QUALITY,
      n: 1,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API ${res.status}: ${err.slice(0, 500)}`);
  }
  const data = await res.json();
  const b64 = data.data?.[0]?.b64_json;
  if (!b64) throw new Error(`no image in response: ${JSON.stringify(data).slice(0, 300)}`);
  const buf = Buffer.from(b64, 'base64');
  const outPng = path.join(OUT_DIR, `${img.name}.png`);
  await fs.writeFile(outPng, buf);
  const kb = Math.round(buf.length / 1024);
  const secs = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`[${img.name}] wrote ${outPng} (${kb}KB) in ${secs}s`);
  return outPng;
}

const name = process.argv[2];
const targets = name ? IMAGES.filter(i => i.name === name) : IMAGES;
if (targets.length === 0) throw new Error(`no images match "${name}"`);

for (const img of targets) {
  try {
    await generate(img);
  } catch (e) {
    console.error(`[${img.name}] FAILED:`, e.message);
  }
}
console.log('\nDone.');
