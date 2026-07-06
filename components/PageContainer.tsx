import { type ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 py-12 md:px-8 md:py-16 lg:py-20 ${className}`}>
      {children}
    </div>
  );
}
