import type { ReactNode } from "react";

type EmptyStateProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  illustration: ReactNode;
};

export function EmptyState({ eyebrow, title, description, action, illustration }: EmptyStateProps) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-8 pb-36 text-center">
      <div className="mb-6">{illustration}</div>
      <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-text-secondary">{eyebrow}</div>
      <h2 className="max-w-[20rem] text-[18px] font-semibold text-text-primary">{title}</h2>
      {description && <p className="mt-3 max-w-[20rem] text-[14px] text-text-secondary">{description}</p>}
      {action && <div className="mt-6 w-full max-w-[280px]">{action}</div>}
    </div>
  );
}
