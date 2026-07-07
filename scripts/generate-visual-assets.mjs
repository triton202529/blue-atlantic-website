import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const imagesDir = path.join(root, "public", "images");

const palette = {
  navy: "#0a1628",
  navyLight: "#142240",
  atlantic: "#1e4d8c",
  atlanticLight: "#2a6cb8",
  soft: "#eef3f9",
  gold: "#c9a227",
};

async function renderSvg(svg, width, height, outputName) {
  const outputPath = path.join(imagesDir, outputName);
  await sharp(Buffer.from(svg)).resize(width, height).png({ quality: 88 }).toFile(outputPath);
  const meta = await sharp(outputPath).metadata();
  console.log(`Created ${outputName} (${meta.width}x${meta.height})`);
}

function horizonSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" fill="none">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${palette.navy}"/>
        <stop offset="45%" stop-color="${palette.navyLight}"/>
        <stop offset="100%" stop-color="${palette.atlantic}"/>
      </linearGradient>
      <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${palette.atlantic}"/>
        <stop offset="100%" stop-color="${palette.navy}"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="600" fill="url(#sky)"/>
    <rect y="320" width="1200" height="280" fill="url(#sea)" opacity="0.95"/>
    <path d="M0 320 Q300 290 600 320 T1200 310 L1200 600 L0 600 Z" fill="${palette.atlantic}" opacity="0.35"/>
    <path d="M0 340 Q400 310 800 340 T1200 330 L1200 600 L0 600 Z" fill="${palette.navyLight}" opacity="0.5"/>
    <ellipse cx="900" cy="120" rx="180" ry="60" fill="white" opacity="0.04"/>
    <line x1="0" y1="320" x2="1200" y2="320" stroke="white" stroke-width="1" opacity="0.12"/>
    ${Array.from({ length: 8 }, (_, i) => `<line x1="${150 * i}" y1="360" x2="${150 * i + 80}" y2="360" stroke="white" stroke-width="1" opacity="0.06"/>`).join("")}
  </svg>`;
}

function enterpriseMapSvg() {
  const nodes = [
    [180, 280], [320, 200], [480, 240], [620, 180], [760, 260], [920, 220],
    [260, 380], [420, 420], [580, 360], [740, 400], [880, 340],
  ];
  const lines = [
    [0, 2], [1, 3], [2, 4], [3, 5], [0, 6], [2, 8], [4, 10], [6, 7], [7, 9], [8, 10], [1, 7], [3, 9],
  ];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" fill="none">
    <rect width="960" height="540" fill="${palette.navy}"/>
    <ellipse cx="480" cy="300" rx="340" ry="200" stroke="${palette.atlanticLight}" stroke-width="1" opacity="0.15"/>
    <ellipse cx="480" cy="300" rx="220" ry="130" stroke="${palette.atlanticLight}" stroke-width="1" opacity="0.1"/>
    ${lines.map(([a, b]) => {
      const [x1, y1] = nodes[a];
      const [x2, y2] = nodes[b];
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${palette.atlanticLight}" stroke-width="1" opacity="0.25"/>`;
    }).join("")}
    ${nodes.map(([cx, cy], i) => `<circle cx="${cx}" cy="${cy}" r="${i < 6 ? 6 : 4}" fill="${palette.atlanticLight}" opacity="${i < 6 ? 0.7 : 0.45}"/>`).join("")}
    <path d="M120 400 Q480 460 840 380" stroke="${palette.atlantic}" stroke-width="2" opacity="0.2" fill="none"/>
  </svg>`;
}

function systemsSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" fill="none">
    <rect width="960" height="540" fill="${palette.navyLight}"/>
    <rect x="80" y="80" width="800" height="60" rx="4" fill="${palette.atlantic}" opacity="0.25"/>
    <rect x="80" y="180" width="360" height="120" rx="4" fill="${palette.atlantic}" opacity="0.2"/>
    <rect x="480" y="180" width="400" height="120" rx="4" fill="${palette.atlanticLight}" opacity="0.15"/>
    <rect x="80" y="340" width="240" height="100" rx="4" fill="${palette.atlantic}" opacity="0.18"/>
    <rect x="360" y="340" width="240" height="100" rx="4" fill="${palette.atlantic}" opacity="0.18"/>
    <rect x="640" y="340" width="240" height="100" rx="4" fill="${palette.atlanticLight}" opacity="0.12"/>
    <line x1="440" y1="240" x2="480" y2="240" stroke="white" stroke-width="2" opacity="0.2"/>
    <line x1="320" y1="300" x2="320" y2="340" stroke="white" stroke-width="2" opacity="0.15"/>
    <line x1="600" y1="300" x2="600" y2="340" stroke="white" stroke-width="2" opacity="0.15"/>
    <line x1="760" y1="240" x2="760" y2="340" stroke="white" stroke-width="2" opacity="0.12"/>
  </svg>`;
}

function portfolioSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" fill="none">
    <rect width="960" height="540" fill="${palette.navy}"/>
    <rect x="120" y="100" width="200" height="140" rx="6" stroke="${palette.atlanticLight}" stroke-width="1.5" fill="${palette.navyLight}" opacity="0.9"/>
    <rect x="380" y="100" width="200" height="140" rx="6" stroke="${palette.atlanticLight}" stroke-width="1.5" fill="${palette.navyLight}" opacity="0.9"/>
    <rect x="640" y="100" width="200" height="140" rx="6" stroke="${palette.atlanticLight}" stroke-width="1.5" fill="${palette.navyLight}" opacity="0.9"/>
    <rect x="250" y="300" width="200" height="140" rx="6" stroke="${palette.atlanticLight}" stroke-width="1.5" fill="${palette.navyLight}" opacity="0.9"/>
    <rect x="510" y="300" width="200" height="140" rx="6" stroke="${palette.atlanticLight}" stroke-width="1.5" fill="${palette.navyLight}" opacity="0.9"/>
    <line x1="320" y1="170" x2="380" y2="170" stroke="${palette.atlanticLight}" stroke-width="1" opacity="0.4"/>
    <line x1="580" y1="170" x2="640" y2="170" stroke="${palette.atlanticLight}" stroke-width="1" opacity="0.4"/>
    <line x1="220" y1="240" x2="350" y2="300" stroke="${palette.atlanticLight}" stroke-width="1" opacity="0.3"/>
    <line x1="740" y1="240" x2="610" y2="300" stroke="${palette.atlanticLight}" stroke-width="1" opacity="0.3"/>
    <line x1="450" y1="370" x2="510" y2="370" stroke="${palette.atlanticLight}" stroke-width="1" opacity="0.4"/>
    <circle cx="480" cy="270" r="28" stroke="${palette.gold}" stroke-width="1.5" fill="${palette.navyLight}" opacity="0.8"/>
  </svg>`;
}

function patternSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
    <rect width="512" height="512" fill="${palette.soft}"/>
    ${Array.from({ length: 16 }, (_, row) =>
      Array.from({ length: 16 }, (_, col) => {
        const x = col * 32 + 16;
        const y = row * 32 + 16;
        return `<circle cx="${x}" cy="${y}" r="1.5" fill="${palette.atlantic}" opacity="0.12"/>`;
      }).join("")
    ).join("")}
    ${Array.from({ length: 8 }, (_, i) => `<line x1="0" y1="${i * 64}" x2="512" y2="${i * 64}" stroke="${palette.atlantic}" stroke-width="0.5" opacity="0.06"/>`).join("")}
  </svg>`;
}

function researchSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" fill="none">
    <rect width="960" height="540" fill="${palette.navy}"/>
    <rect x="100" y="360" width="760" height="2" fill="white" opacity="0.08"/>
    ${[140, 220, 300, 380, 460, 540, 620, 700, 780].map((x, i) =>
      `<rect x="${x}" y="${360 - (i % 5) * 28 - 40}" width="24" height="${(i % 5) * 28 + 40}" fill="${palette.atlanticLight}" opacity="${0.15 + (i % 3) * 0.08}"/>`
    ).join("")}
    <path d="M100 360 L860 360" stroke="${palette.atlanticLight}" stroke-width="1" opacity="0.2"/>
    <line x1="100" y1="120" x2="860" y2="120" stroke="white" stroke-width="1" opacity="0.06"/>
    <text x="100" y="90" fill="white" opacity="0.25" font-family="Arial,sans-serif" font-size="14" letter-spacing="3">INSTITUTIONAL RESEARCH</text>
  </svg>`;
}

await mkdir(imagesDir, { recursive: true });

await renderSvg(horizonSvg(), 1200, 600, "blue-atlantic-horizon.png");
await renderSvg(enterpriseMapSvg(), 960, 540, "blue-atlantic-enterprise-map.png");
await renderSvg(systemsSvg(), 960, 540, "blue-atlantic-systems.png");
await renderSvg(portfolioSvg(), 960, 540, "blue-atlantic-portfolio.png");
await renderSvg(patternSvg(), 512, 512, "blue-atlantic-pattern.png");
await renderSvg(researchSvg(), 960, 540, "blue-atlantic-research.png");

console.log("Visual assets generated.");
