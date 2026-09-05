"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function LimitPage() {
  const [isEligible, setIsEligible] = useState(false);

  if (isEligible) {
    return (
      <main className="px-4 pb-36 pt-8">
        <div className="rounded-[24px] bg-white p-6 shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
          <div className="flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
              <Check className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-5 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-text-secondary">ELIGIBILITY CHECKED</div>
          <h2 className="mt-2 text-center text-[20px] font-bold text-text-primary">You&apos;re eligible for up to ₹2,00,000</h2>
          <p className="mt-2 text-center text-[13px] text-text-secondary">You can unlock a higher purchasing power backed by your mutual funds.</p>
          <Link href="/shop?tab=marketplace" className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-[15px] font-semibold text-white">
            Continue
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="px-8 pb-36 pt-4">
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <div className="relative mb-6 flex h-28 w-28 items-center justify-center rounded-[24px] bg-[linear-gradient(135deg,#4C1D95_0%,#6D28D9_50%,#7C3AED_100%)] shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
          <svg width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true">
            <path d="M32 38V32a16 16 0 0 1 32 0v6" stroke="#1F2937" strokeWidth="5" strokeLinecap="round"/>
            <rect x="22" y="38" width="52" height="42" rx="12" fill="white" opacity="0.15"/>
            <path d="M48 44c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12s12-5.4 12-12V56c0-6.6-5.4-12-12-12Z" fill="white" opacity="0.7"/>
            <circle cx="48" cy="61" r="3.5" fill="#6D28D9" />
          </svg>
          <span className="absolute left-4 top-4 h-2 w-2 rounded-full bg-primary" />
          <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-accent-gold" />
          <span className="absolute left-10 bottom-3 h-2 w-2 rounded-full bg-gray-200" />
        </div>

        <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-secondary">ELIGIBILITY NOT CHECKED</div>
        <h1 className="mt-3 text-[18px] font-semibold text-text-primary">Looks like you haven&apos;t unlocked your limit</h1>

        <button
          type="button"
          onClick={() => setIsEligible(true)}
          className="mt-6 flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-[15px] font-semibold text-white"
        >
          Check eligibility
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </main>
  );
}
