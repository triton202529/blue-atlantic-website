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
  containerClassName?: string;
  pattern?: boolean;
  dense?: boolean;
  wide?: boolean;
}

export default function ContentSection({
  children,
  surface = "white",
  className = "",
  containerClassName = "",
  pattern = false,
  dense = false,
  wide = false,
}: ContentSectionProps) {
  return (
    <section className={`relative ${sectionSurfaceClasses[surface]} ${className}`}>
      {pattern && <BrandPattern variant="section" />}
      <PageContainer
        as="div"
        dense={dense}
        wide={wide}
        className={`${pattern ? "relative" : ""} ${containerClassName}`.trim()}
      >
        {children}
      </PageContainer>
    </section>
  );
}
