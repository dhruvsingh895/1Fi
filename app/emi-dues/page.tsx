import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EmiDuesPage() {
  return (
    <main className="px-8 pb-36 pt-4">
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <div className="relative mb-6 flex h-28 w-28 items-center justify-center rounded-[18px] bg-white shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" className="text-text-secondary" aria-hidden="true">
            <path d="M31 20h30a6 6 0 0 1 6 6v38a6 6 0 0 1-6 6H31a6 6 0 0 1-6-6V26a6 6 0 0 1 6-6Z" fill="white" stroke="#D1D5DB" strokeWidth="2"/>
            <path d="M35 30h20M35 40h20M35 50h14" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
            <path d="M31 66h28" stroke="#F4B740" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="66" cy="23" r="11" fill="#6D28D9" />
            <path d="M66 18v10M61 23h10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <span className="absolute left-4 top-2 h-2 w-2 rounded-full bg-primary" />
          <span className="absolute right-3 top-4 h-2 w-2 rounded-full bg-accent-gold" />
        </div>

        <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-secondary">NOTHING DUE YET</div>
        <h1 className="mt-3 max-w-[280px] text-[18px] font-semibold leading-6 text-text-primary">
          Looks like you haven&apos;t shopped yet with 1Fi
        </h1>

        <Link href="/limit" className="mt-6 flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-[15px] font-semibold text-white">
          Check eligibility
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
