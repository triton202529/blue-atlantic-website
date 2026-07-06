import BrandSeal from "@/components/BrandSeal";

const nodes = [
  { label: "Tropicash", x: "14%", y: "20%" },
  { label: "EliteHire", x: "78%", y: "16%" },
  { label: "TRITON", x: "82%", y: "56%" },
  { label: "Sentinel", x: "16%", y: "58%" },
  { label: "Capital / IRD", x: "50%", y: "82%" },
];

export default function EcosystemVisual() {
  return (
    <div
      className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-brand-navy-light/50 shadow-brand-xl backdrop-blur-md lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(42,108,184,0.18)_0%,_transparent_65%)]" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[
          [200, 200, 58, 88],
          [200, 200, 288, 72],
          [200, 200, 312, 232],
          [200, 200, 88, 248],
          [200, 200, 200, 312],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(42,108,184,0.35)"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-full border border-white/15 bg-white/5 p-3 shadow-brand-lg backdrop-blur-sm">
          <BrandSeal size="hero" priority className="drop-shadow-lg" />
        </div>
      </div>

      {nodes.map((node) => (
        <div
          key={node.label}
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ left: node.x, top: node.y }}
        >
          <div className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1.5 backdrop-blur-sm">
            <span className="whitespace-nowrap text-[10px] font-medium tracking-wide text-white/90 sm:text-xs">
              {node.label}
            </span>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-4 right-4 z-20 rounded-lg border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-sm">
        <p className="text-[10px] font-medium uppercase tracking-widest text-blue-200/70">
          Ecosystem architecture
        </p>
        <p className="mt-0.5 text-xs text-white/60">
          Parent company · Platform portfolio
        </p>
      </div>
    </div>
  );
}
