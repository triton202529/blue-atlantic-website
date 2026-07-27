export type PlatformAvailabilityKind =
  | "available-now"
  | "coming-soon"
  | "intelligence-system"
  | "core-company";

export const platformAvailabilityLabels: Record<
  PlatformAvailabilityKind,
  string
> = {
  "available-now": "Available Now",
  "coming-soon": "Coming Soon",
  "intelligence-system": "Intelligence System",
  "core-company": "Core Company",
};

export function platformAvailabilityClass(
  kind: PlatformAvailabilityKind,
): string {
  switch (kind) {
    case "available-now":
      return "ba-availability-badge ba-availability-badge--available";
    case "coming-soon":
      return "ba-availability-badge ba-availability-badge--coming-soon";
    case "intelligence-system":
    case "core-company":
    default:
      return "ba-availability-badge ba-availability-badge--neutral";
  }
}
