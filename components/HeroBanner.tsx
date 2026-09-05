import { ArrowRight, Sparkles } from "lucide-react";

type HeroBannerProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  actionLabel?: string;
  actionHref?: string;
  variant?: "purple" | "dark";
  children?: React.ReactNode;
};

export function HeroBanner({
  title,
  subtitle,
  badge,
  actionLabel,
  actionHref,
  variant = "purple",
  children,
}: HeroBannerProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={isDark ? "relative overflow-hidden rounded-[24px] bg-[linear-gradient(120deg,#0F172A_0%,#1E293B_55%,#164E63_100%)] p-6 text-white" : "relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#4C1D95_0%,#6D28D9_50%,#7C3AED_100%)] p-6 text-white"}
    >
      {badge && (
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          {badge === "NO-COST EMIs" && <Sparkles className="h-3.5 w-3.5" />}
          {badge}
        </div>
      )}
      <div className="relative z-10">
        <h2 className="text-[22px] font-bold leading-[1.25] text-white">{title}</h2>
        {subtitle && <p className="mt-3 text-[13px] text-white/80">{subtitle}</p>}
        {actionLabel && (
          <a
            href={actionHref ?? "/limit"}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-[15px] font-semibold text-text-primary"
          >
            {actionLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        )}
      </div>
      {children}
    </div>
  );
}
