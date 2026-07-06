import { type ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}

export default function PageContainer({
  children,
  className = "",
  as: Tag = "div",
}: PageContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-6xl px-6 py-14 md:px-8 md:py-20 lg:py-24 ${className}`}
    >
      {children}
    </Tag>
  );
}
