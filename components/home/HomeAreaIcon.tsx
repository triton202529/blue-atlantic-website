import type { SVGProps } from "react";

type HomeIconName = "wallet" | "workforce" | "intelligence" | "infrastructure";

interface HomeAreaIconProps extends SVGProps<SVGSVGElement> {
  name: HomeIconName;
}

export default function HomeAreaIcon({
  name,
  className = "",
  ...props
}: HomeAreaIconProps) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
    className: `shrink-0 text-brand-atlantic ${className}`,
    ...props,
  };

  switch (name) {
    case "wallet":
      return (
        <svg {...common}>
          <rect
            x="3"
            y="6"
            width="18"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3 10H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="16.5" cy="14" r="1.25" fill="currentColor" />
        </svg>
      );
    case "workforce":
      return (
        <svg {...common}>
          <circle
            cx="9"
            cy="8"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="16"
            cy="9"
            r="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
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
          <path
            d="M10 20.5H14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "infrastructure":
      return (
        <svg {...common}>
          <rect
            x="4"
            y="4"
            width="7"
            height="7"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="13"
            y="4"
            width="7"
            height="7"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="4"
            y="13"
            width="7"
            height="7"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="13"
            y="13"
            width="7"
            height="7"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    default:
      return null;
  }
}
