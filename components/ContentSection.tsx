import { type ReactNode } from "react";
import BrandPattern from "./BrandPattern";
import PageContainer from "./PageContainer";
import {
  sectionSurfaceClasses,
  type SectionSurface,
} from "@/lib/card-themes";

interface ContentSectionProps {
  children: ReactNode;
  surface?: SectionSurface;
  className?: string;
  pattern?: boolean;
}

export default function ContentSection({
  children,
  surface = "white",
  className = "",
  pattern = false,
}: ContentSectionProps) {
  return (
    <section className={`relative ${sectionSurfaceClasses[surface]} ${className}`}>
      {pattern && <BrandPattern variant="section" />}
      <PageContainer as="div" className={pattern ? "relative" : undefined}>
        {children}
      </PageContainer>
    </section>
  );
}
