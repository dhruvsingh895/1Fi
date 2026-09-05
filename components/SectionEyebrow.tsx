import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function SectionEyebrow({ children, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-primary ${className}`}>
      <span className="h-3.5 w-[3px] rounded-full bg-primary" />
      <span>{children}</span>
    </div>
  );
}
