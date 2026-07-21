import { type ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  wide?: boolean;
  dense?: boolean;
}

export default function PageContainer({
  children,
  className = "",
  as: Tag = "div",
  wide = false,
  dense = false,
}: PageContainerProps) {
  const width = wide ? "page-shell page-shell-wide" : "page-shell";
  const vertical = dense
    ? "py-10 md:py-14 lg:py-16"
    : "py-14 md:py-20 lg:py-24";

  return (
    <Tag className={`${width} ${vertical} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
