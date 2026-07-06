import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const inputPath = path.join(
  root,
  "public",
  "brand",
  "blue-atlantic-company-logo.png"
);
const outputPath = path.join(
  root,
  "public",
  "brand",
  "blue-atlantic-company-logo-display.png"
);

const WHITE_THRESHOLD = 248;
const EDGE_PADDING = 2;

async function createDisplayLogo() {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const pixels = Buffer.from(data);

  for (let i = 0; i < pixels.length; i += channels) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) {
      pixels[i + 3] = 0;
    }
  }

  const transparent = await sharp(pixels, {
    raw: { width, height, channels },
  })
    .png()
    .toBuffer();

  await sharp(transparent)
    .trim({ threshold: 10 })
    .extend({
      top: EDGE_PADDING,
      bottom: EDGE_PADDING,
      left: EDGE_PADDING,
      right: EDGE_PADDING,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .resize(512, 512, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9, quality: 95 })
    .toFile(outputPath);

  const meta = await sharp(outputPath).metadata();
  console.log("Display logo created:", outputPath);
  console.log("Dimensions:", meta.width, "x", meta.height);
  console.log("Has alpha:", meta.hasAlpha);
}

await createDisplayLogo();
