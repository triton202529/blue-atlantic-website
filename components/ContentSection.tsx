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
}

export default function ContentSection({
  children,
  surface = "white",
  className = "",
  containerClassName = "",
  pattern = false,
  dense = false,
}: ContentSectionProps) {
  const densePadding = dense ? "!py-10 md:!py-14 lg:!py-16" : "";

  return (
    <section className={`relative ${sectionSurfaceClasses[surface]} ${className}`}>
      {pattern && <BrandPattern variant="section" />}
      <PageContainer
        as="div"
        className={`${pattern ? "relative" : ""} ${densePadding} ${containerClassName}`.trim()}
      >
        {children}
      </PageContainer>
    </section>
  );
}
