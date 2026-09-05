import { Percent, ScanSearch, TrendingUp, Zap } from "lucide-react";

const items = [
  {
    icon: TrendingUp,
    iconColor: "bg-[#DCFCE7] text-[#16A34A]",
    title: "Keep growing",
    description: "No tax, no exit load.",
  },
  {
    icon: Percent,
    iconColor: "bg-[#EDE9FE] text-primary",
    title: "0% interest",
    description: "Repay only what you spend.",
  },
  {
    icon: ScanSearch,
    iconColor: "bg-[#DBEAFE] text-[#2563EB]",
    title: "Quickest approvals",
    description: "Instant eligibility check.",
  },
  {
    icon: Zap,
    iconColor: "bg-[#FEF3C7] text-[#F59E0B]",
    title: "Zero charges",
    description: "No fees, nothing hidden.",
  },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map(({ icon: Icon, iconColor, title, description }) => (
        <div key={title} className="rounded-2xl bg-white p-4 shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
          <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${iconColor}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="text-[15px] font-semibold text-text-primary">{title}</div>
          <div className="mt-1 text-[12px] text-text-secondary">{description}</div>
        </div>
      ))}
    </div>
  );
}
