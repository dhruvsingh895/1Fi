type EmiPlan = {
  id: string;
  tenureMonths: number;
  monthlyAmount: number;
  interestRate: number;
  cashbackAmount: number;
  isZeroCost: boolean;
};

type EmiPlanRowProps = {
  plan: EmiPlan;
  selected: boolean;
  onSelect: (planId: string) => void;
};

export function EmiPlanRow({ plan, selected, onSelect }: EmiPlanRowProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(plan.id)}
      className={`flex w-full items-center justify-between rounded-xl border p-4 text-left ${selected ? "border-2 border-primary bg-primary-light/40" : "border-border-subtle bg-white"}`}
    >
      <div className="flex items-start gap-3">
        <span className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border ${selected ? "border-primary bg-primary" : "border-gray-300 bg-white"}`}>
          {selected && <span className="h-2 w-2 rounded-full bg-white" />}
        </span>
        <div>
          <div className="text-[15px] font-semibold text-text-primary">₹{plan.monthlyAmount.toLocaleString("en-IN")} x {plan.tenureMonths} months</div>
          <div className="mt-1 text-[12px] text-text-secondary">{plan.interestRate === 0 ? "0% interest" : `${plan.interestRate}% interest`}</div>
        </div>
      </div>
      {plan.cashbackAmount > 0 && (
        <span className="inline-flex rounded-full bg-[#DCFCE7] px-2 py-1 text-[11px] font-semibold text-[#16A34A]">+₹{plan.cashbackAmount.toLocaleString("en-IN")} cashback</span>
      )}
    </button>
  );
}
