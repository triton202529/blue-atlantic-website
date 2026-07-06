import { type ReactNode } from "react";
import PageContainer from "./PageContainer";
import {
  sectionSurfaceClasses,
  type SectionSurface,
} from "@/lib/card-themes";

interface ContentSectionProps {
  children: ReactNode;
  surface?: SectionSurface;
  className?: string;
}

export default function ContentSection({
  children,
  surface = "white",
  className = "",
}: ContentSectionProps) {
  return (
    <section className={`${sectionSurfaceClasses[surface]} ${className}`}>
      <PageContainer as="div">{children}</PageContainer>
    </section>
  );
}
