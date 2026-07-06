import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const brandDir = path.join(root, "public", "brand");
const appDir = path.join(root, "app");

async function generateWithSharp() {
  const sharp = (await import("sharp")).default;

  const sealSvg = await readFile(
    path.join(brandDir, "blue-atlantic-seal.svg")
  );
  const markSvg = await readFile(
    path.join(brandDir, "blue-atlantic-mark.svg")
  );
  const ogSvg = await readFile(path.join(brandDir, "blue-atlantic-og.svg"));

  await sharp(sealSvg).png({ quality: 90 }).toFile(
    path.join(brandDir, "blue-atlantic-seal.png")
  );
  await sharp(sealSvg).webp({ quality: 88 }).toFile(
    path.join(brandDir, "blue-atlantic-seal.webp")
  );
  await sharp(sealSvg).resize(512, 512).png().toFile(
    path.join(brandDir, "blue-atlantic-seal-512.png")
  );

  await sharp(markSvg).resize(256, 256).png().toFile(
    path.join(brandDir, "blue-atlantic-mark.png")
  );

  await sharp(ogSvg).resize(1200, 630).png({ quality: 90 }).toFile(
    path.join(brandDir, "blue-atlantic-og.png")
  );

  await sharp(markSvg).resize(32, 32).png().toFile(path.join(appDir, "icon.png"));
  await sharp(markSvg)
    .resize(180, 180)
    .png()
    .toFile(path.join(appDir, "apple-icon.png"));

  console.log("Brand assets generated with sharp.");
}

async function copySvgFallbacks() {
  const markSvg = await readFile(
    path.join(brandDir, "blue-atlantic-mark.svg")
  );
  await writeFile(path.join(appDir, "icon.svg"), markSvg);
  console.log("SVG fallbacks written. Install sharp and rerun for PNG/WebP.");
}

await mkdir(brandDir, { recursive: true });

try {
  await generateWithSharp();
} catch (error) {
  console.warn("Sharp unavailable or failed:", error.message);
  await copySvgFallbacks();
}
