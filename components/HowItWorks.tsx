import { Lock, ScanSearch, ShoppingBag } from "lucide-react";

const steps = [
  { icon: ScanSearch, label: "CONNECT YOUR PORTFOLIO", number: "1" },
  { icon: Lock, label: "UNLOCK YOUR LIMIT", number: "2" },
  { icon: ShoppingBag, label: "SHOP & PAY LATER", number: "3" },
];

export function HowItWorks() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
      <div className="relative mx-auto flex max-w-md items-start justify-between pt-4">
        <div className="absolute left-10 right-10 top-7 border-t-2 border-dashed border-gray-300" />
        {steps.map(({ icon: Icon, label, number }) => (
          <div key={label} className="relative z-10 flex w-1/3 flex-col items-center">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary">
              <Icon className="h-6 w-6 text-white" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-gray-800 bg-white text-[10px] font-bold text-text-primary">
                {number}
              </span>
            </div>
            <div className="mt-3 text-center text-[11px] font-bold uppercase leading-relaxed text-text-primary">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
