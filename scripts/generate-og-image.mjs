import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const brandDir = path.join(root, "public", "brand");

async function generateOgImage() {
  const ogSvg = path.join(brandDir, "blue-atlantic-og.svg");
  const logoPath = path.join(brandDir, "blue-atlantic-company-logo-display.png");
  const outputPath = path.join(brandDir, "blue-atlantic-og.png");

  const base = await sharp(ogSvg).resize(1200, 630).png().toBuffer();

  const logo = await sharp(logoPath)
    .resize(260, 260, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  await sharp(base)
    .composite([{ input: logo, top: 185, left: 860 }])
    .png({ quality: 92 })
    .toFile(outputPath);

  const meta = await sharp(outputPath).metadata();
  console.log("OG image created:", outputPath);
  console.log("Dimensions:", meta.width, "x", meta.height);
}

await generateOgImage();
