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
    prompt: 'Photorealistic cinematic wide shot, golden hour. A lone man running away from camera down a winding dirt path through tall Louisiana longleaf pines. Warm golden sunlight streaming through pine trunks, soft morning mist hugging the ground, Spanish moss hanging from branches. Deep earthy warm brown and gold tones, cream and forest green palette. Composition leaves negative space in upper portion for text overlay. No text, no watermarks, no people facing camera. Documentary photography style, shot on full-frame camera, 35mm, natural light.',
  },
  {
    name: 'trail-landscape',
    prompt: 'Photorealistic cinematic landscape. An empty winding dirt trail disappearing into deep Louisiana pine forest at sunrise, Spanish moss draped from tall pines, early morning mist hovering over trail, warm golden light filtering diagonally through trees. Serene, contemplative, no people. Cream, warm earth brown, deep forest green, and gold tones. Horizon lower third of frame, open sky above for text overlay. Natural light, documentary style, 35mm full-frame.',
  },
  {
    name: 'faith-morning',
    prompt: 'Photorealistic still life. Rustic wooden porch table at sunrise, an open leather-bound journal with hand-written pages, a simple white ceramic mug of black coffee with steam rising, a worn Bible, a pen. Soft warm morning sunlight raking across the scene from the side. Louisiana pine trees and Spanish moss visible softly out of focus in background. Warm cream, deep brown leather, golden highlights. Overhead three-quarter angle, shallow depth of field. No people, no text, no logos. Documentary photo, natural light.',
  },
  {
    name: 'garage-gym',
    prompt: 'Photorealistic interior. A clean minimalist home garage gym at sunrise. A single cast iron kettlebell sitting on a black rubber gym mat on polished concrete floor. Gymnastic rings hanging from the ceiling by straps. Simple pullup bar mounted to the wall. Open garage door at far end with warm golden morning sunlight streaming in, dust motes visible in the light. Warm concrete gray, black rubber, golden sun. No people, no text, no brand logos. Composition leaves space in upper third for overlay text. Wide angle, documentary photo style, natural light.',
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
