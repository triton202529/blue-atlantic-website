import {
  platformAvailabilityClass,
  platformAvailabilityLabels,
  type PlatformAvailabilityKind,
} from "@/lib/platform-availability";

interface PlatformAvailabilityBadgeProps {
  kind: PlatformAvailabilityKind;
  className?: string;
}

export default function PlatformAvailabilityBadge({
  kind,
  className = "",
}: PlatformAvailabilityBadgeProps) {
  return (
    <span className={`${platformAvailabilityClass(kind)} ${className}`.trim()}>
      {platformAvailabilityLabels[kind]}
    </span>
  );
}
