const nodes = [
  { label: "Tropicash", x: "18%", y: "22%", delay: "0ms" },
  { label: "EliteHire", x: "72%", y: "18%", delay: "80ms" },
  { label: "TRITON", x: "78%", y: "58%", delay: "160ms" },
  { label: "Sentinel", x: "22%", y: "62%", delay: "240ms" },
  { label: "Capital / IRD", x: "50%", y: "78%", delay: "320ms" },
];

export default function EcosystemVisual() {
  return (
    <div
      className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-brand-navy-light/60 shadow-brand-lg backdrop-blur-sm lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(42,108,184,0.15)_0%,_transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="200"
          y1="200"
          x2="72"
          y2="88"
          stroke="rgba(42,108,184,0.4)"
          strokeWidth="1"
        />
        <line
          x1="200"
          y1="200"
          x2="288"
          y2="72"
          stroke="rgba(42,108,184,0.4)"
          strokeWidth="1"
        />
        <line
          x1="200"
          y1="200"
          x2="312"
          y2="232"
          stroke="rgba(42,108,184,0.4)"
          strokeWidth="1"
        />
        <line
          x1="200"
          y1="200"
          x2="88"
          y2="248"
          stroke="rgba(42,108,184,0.4)"
          strokeWidth="1"
        />
        <line
          x1="200"
          y1="200"
          x2="200"
          y2="312"
          stroke="rgba(42,108,184,0.4)"
          strokeWidth="1"
        />
        <circle cx="200" cy="200" r="28" fill="rgba(30,77,140,0.5)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <text
          x="200"
          y="204"
          textAnchor="middle"
          fill="rgba(255,255,255,0.9)"
          fontSize="11"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
        >
          BA
        </text>
      </svg>

      {nodes.map((node) => (
        <div
          key={node.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: node.x, top: node.y }}
        >
          <div className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1.5 backdrop-blur-sm">
            <span className="whitespace-nowrap text-[10px] font-medium tracking-wide text-white/90 sm:text-xs">
              {node.label}
            </span>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-sm">
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
