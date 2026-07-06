/** @deprecated Public-facing brand uses BrandLogo/BrandSeal. Retained for favicon/internal fallback only. */
interface BrandMarkProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light" | "onDark";
  showWordmark?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { box: "h-8 w-8", text: "text-sm", wordmark: "text-sm" },
  md: { box: "h-10 w-10", text: "text-xs", wordmark: "text-base" },
  lg: { box: "h-12 w-12", text: "text-sm", wordmark: "text-lg" },
};

export default function BrandMark({
  size = "md",
  variant = "default",
  showWordmark = true,
  className = "",
}: BrandMarkProps) {
  const s = sizeMap[size];

  const boxStyles = {
    default: "bg-brand-navy border-brand-atlantic/30",
    light: "bg-white border-brand-border",
    onDark: "bg-white/10 border-white/20 backdrop-blur-sm",
  }[variant];

  const letterStyles = {
    default: "text-white",
    light: "text-brand-navy",
    onDark: "text-white",
  }[variant];

  const wordmarkStyles = {
    default: "text-brand-navy",
    light: "text-brand-navy",
    onDark: "text-white",
  }[variant];

  const accentStyles = {
    default: "bg-brand-atlantic",
    light: "bg-brand-atlantic",
    onDark: "bg-brand-atlantic-light",
  }[variant];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border ${boxStyles} ${s.box}`}
        aria-hidden="true"
      >
        <div
          className={`absolute bottom-0 left-0 right-0 h-[3px] ${accentStyles}`}
        />
        <div className="absolute bottom-[3px] left-0 right-0 h-px bg-white/10" />
        <span
          className={`relative font-semibold leading-none tracking-tighter ${letterStyles} ${s.text}`}
        >
          BA
        </span>
      </div>
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-semibold tracking-tight ${wordmarkStyles} ${s.wordmark}`}
          >
            Blue Atlantic
          </span>
          {size === "lg" && (
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-brand-muted">
              Enterprise Group
            </span>
          )}
        </div>
      )}
    </div>
  );
}
