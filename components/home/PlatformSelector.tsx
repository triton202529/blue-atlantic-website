"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  homePlatforms,
  homePlatformStatusClasses,
} from "@/lib/homepage";
import {
  ecosystemLogoTreatmentClasses,
  getEcosystemLogo,
} from "@/lib/ecosystem-brand";

/** Intrinsic Image dimensions; visual weight is controlled in CSS. */
function logoIntrinsicSize(companyId: string): { width: number; height: number } {
  const logo = getEcosystemLogo(companyId);
  if (!logo) {
    return { width: 120, height: 48 };
  }

  const scale =
    companyId === "elitehire-solutions"
      ? 2
      : companyId === "sentinel"
        ? 1.85
        : companyId === "tropicash"
          ? 1.35
          : 1.55;

  return {
    width: Math.round(logo.size.maxWidth * scale),
    height: Math.round(logo.size.maxHeight * scale),
  };
}

function tabLabel(name: string): string {
  if (name.includes("EliteHire")) {
    return "EliteHire";
  }
  return name;
}

export default function PlatformSelector({
  caption = "Platform selector",
  hideCaption = false,
}: {
  caption?: string;
  hideCaption?: boolean;
}) {
  const labelId = useId();
  const panelId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [selectedId, setSelectedId] = useState(homePlatforms[0].id);
  const [reduceMotion, setReduceMotion] = useState(false);

  const selectedIndex = homePlatforms.findIndex(
    (platform) => platform.id === selectedId
  );
  const platform = homePlatforms[selectedIndex] ?? homePlatforms[0];
  const logo = getEcosystemLogo(platform.id);
  const featureLogoSize = logoIntrinsicSize(platform.id);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const selectByIndex = (index: number) => {
    const next = homePlatforms[index];
    if (!next) {
      return;
    }
    setSelectedId(next.id);
    tabRefs.current[index]?.focus();
  };

  const onTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const last = homePlatforms.length - 1;
    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = index === last ? 0 : index + 1;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = index === 0 ? last : index - 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = last;
        break;
      default:
        break;
    }

    if (nextIndex === null) {
      return;
    }

    event.preventDefault();
    selectByIndex(nextIndex);
  };

  return (
    <div className="ba-platform-selector">
      <p
        id={labelId}
        className={
          hideCaption
            ? "sr-only"
            : "type-caption font-semibold text-brand-atlantic"
        }
      >
        {caption}
      </p>

      <div
        className="ba-platform-selector-rail mt-3"
        role="tablist"
        aria-labelledby={labelId}
      >
        {homePlatforms.map((item, index) => {
          const itemLogo = getEcosystemLogo(item.id);
          const selected = item.id === selectedId;
          const tileSize = logoIntrinsicSize(item.id);

          return (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`${labelId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => setSelectedId(item.id)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className={`ba-platform-selector-tab ba-platform-selector-tab--${item.id}`}
            >
              <span
                className={`ba-platform-selector-stage ${
                  itemLogo
                    ? ecosystemLogoTreatmentClasses[itemLogo.treatment]
                    : "bg-brand-soft"
                }`}
              >
                {itemLogo ? (
                  <Image
                    src={itemLogo.src}
                    alt={itemLogo.alt}
                    width={tileSize.width}
                    height={tileSize.height}
                    className={`ba-selector-logo ba-selector-logo--${item.id}`}
                  />
                ) : null}
              </span>
              <span className="ba-platform-selector-label">
                {tabLabel(item.name)}
              </span>
              <span className="ba-platform-selector-indicator" aria-hidden="true" />
              {selected ? <span className="sr-only">Selected</span> : null}
            </button>
          );
        })}
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${labelId}-tab-${platform.id}`}
        className={`ba-platform-feature mt-3 ${
          reduceMotion ? "" : "ba-platform-feature-motion"
        }`}
        key={platform.id}
      >
        <div
          className={`ba-platform-feature-logo ${
            logo ? ecosystemLogoTreatmentClasses[logo.treatment] : "bg-brand-soft"
          }`}
        >
          {logo ? (
            <Image
              src={logo.src}
              alt={logo.alt}
              width={featureLogoSize.width}
              height={featureLogoSize.height}
              className={`ba-feature-logo ba-feature-logo--${platform.id}`}
            />
          ) : null}
        </div>

        <div className="ba-platform-feature-copy">
          <div className="ba-platform-feature-meta">
            <span className="ba-platform-feature-category">
              {platform.category}
            </span>
            <span
              className={`ba-platform-feature-status ${homePlatformStatusClasses(platform.status)}`}
            >
              {platform.status}
            </span>
          </div>
          <h3 className="ba-platform-feature-title">{platform.name}</h3>
          <p className="ba-platform-feature-desc">{platform.description}</p>
          <div className="ba-platform-feature-actions">
            {platform.externalLink ? (
              <a
                href={platform.externalLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ba-platform-feature-cta ba-platform-feature-cta--primary"
              >
                {platform.externalLink.label}
              </a>
            ) : null}
            <Link
              href={platform.href}
              className="ba-platform-feature-cta ba-platform-feature-cta--secondary"
            >
              View on Platforms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
