import type { SVGProps } from "react";

export type HomeIconName =
  | "wallet"
  | "workforce"
  | "intelligence"
  | "infrastructure"
  | "systems"
  | "platforms"
  | "partnership"
  | "about"
  | "region"
  | "discipline"
  | "institution"
  | "arrow";

type HomeIconSize = "sm" | "md" | "lg";

interface HomeAreaIconProps extends SVGProps<SVGSVGElement> {
  name: HomeIconName;
  size?: HomeIconSize;
}

const sizeMap: Record<HomeIconSize, number> = {
  sm: 18,
  md: 22,
  lg: 26,
};

export default function HomeAreaIcon({
  name,
  size = "md",
  className = "",
  ...props
}: HomeAreaIconProps) {
  const dimension = sizeMap[size];
  const common = {
    width: dimension,
    height: dimension,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
    className: `ba-home-icon shrink-0 text-brand-atlantic ${className}`,
    ...props,
  };

  switch (name) {
    case "wallet":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="16.5" cy="14" r="1.25" fill="currentColor" />
        </svg>
      );
    case "workforce":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M4 18.5C4.8 15.8 6.7 14.5 9 14.5C11.3 14.5 13.2 15.8 14 18.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14.2 14.8C15.1 14.3 16 14.1 17 14.2C18.6 14.4 19.8 15.4 20.3 17.2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "intelligence":
      return (
        <svg {...common}>
          <path
            d="M12 3.5C8.5 3.5 6 6.1 6 9.2C6 11.4 7.2 13.3 9 14.3V17.5H15V14.3C16.8 13.3 18 11.4 18 9.2C18 6.1 15.5 3.5 12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M10 20.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "infrastructure":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "systems":
      return (
        <svg {...common}>
          <path d="M4 8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 16H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "platforms":
      return (
        <svg {...common}>
          <rect x="3.5" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="13.5" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="8.5" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "partnership":
      return (
        <svg {...common}>
          <path
            d="M8 12C8 10.3 9.3 9 11 9H13C14.7 9 16 10.3 16 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="8" cy="8" r="2.25" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="8" r="2.25" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M4.5 18.5C5.2 16.2 6.8 15 9 15H15C17.2 15 18.8 16.2 19.5 18.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "about":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 10.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="7.75" r="1" fill="currentColor" />
        </svg>
      );
    case "region":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M12 3.75C10 6.5 9 9.2 9 12C9 14.8 10 17.5 12 20.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 3.75C14 6.5 15 9.2 15 12C15 14.8 14 17.5 12 20.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "discipline":
      return (
        <svg {...common}>
          <path
            d="M5 7.5L12 4L19 7.5V12.5C19 16.2 16.4 19.4 12 20.5C7.6 19.4 5 16.2 5 12.5V7.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M9 12L11.2 14.2L15.5 9.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "institution":
      return (
        <svg {...common}>
          <path d="M4 10L12 5L20 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 10V18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 10V18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 10V18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18 10V18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4.5 18.5H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}
