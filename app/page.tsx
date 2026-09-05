"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Users,
} from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FeatureGrid } from "@/components/FeatureGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { SectionEyebrow } from "@/components/SectionEyebrow";

const offers = [
  {
    eyebrow: "ELECTRONICS SALE",
    title: "Shop Big at Croma for Everyday Electronics",
    bullets: ["Gadgets on easy EMIs"],
    gradient: "bg-[linear-gradient(120deg,#0F172A_0%,#1E293B_55%,#164E63_100%)]",
  },
  {
    eyebrow: "TRAVEL OFFERS",
    title: "Book flights and stays with flexible EMIs",
    bullets: ["Zero credit pull", "Flexible plans"],
    gradient: "bg-[linear-gradient(135deg,#3B0764_0%,#7C3AED_50%,#4F46E5_100%)]",
  },
  {
    eyebrow: "HOME NEEDS",
    title: "Upgrade appliances without stretching your budget",
    bullets: ["Fast approvals", "No charges"],
    gradient: "bg-[linear-gradient(135deg,#1E293B_0%,#334155_50%,#0F766E_100%)]",
  },
];

const brands = [
  { name: "Apple", logo: "/brands/apple.png" },
  { name: "Samsung", logo: "/brands/samsung.png" },
  { name: "Amazon", logo: "/brands/amazon.png" },
  { name: "Flipkart", logo: "/brands/flipkart.png" },
  { name: "Myntra", logo: "/brands/myntra.png" },
  { name: "MakeMyTrip", logo: "/brands/makemytrip.png" },
  { name: "Air India", logo: "/brands/airindia.png" },
  { name: "Croma", logo: "/brands/croma.png" },
  { name: "Paytm", logo: "/brands/paytm.png" },
  { name: "Google", logo: "/brands/google.png" },
  { name: "OnePlus", logo: "/brands/oneplus.png" },
  { name: "Nykaa", logo: "/brands/nykaa.png" },
  { name: "Nike", logo: "/brands/nike.png" },
];

export default function HomePage() {
  return (
    <main className="space-y-6 px-4 pb-36 pt-4">
      <section className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#4C1D95_0%,#6D28D9_50%,#7C3AED_100%)] p-6">
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
        <div className="relative z-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/70">GET STARTED</p>
          <h1 className="mt-4 max-w-[200px] text-[24px] font-bold leading-[1.2] text-white">
            Shop on <span className="text-accent-gold">no-cost EMI</span>
          </h1>
          <p className="mt-3 max-w-[260px] text-[13px] leading-5 text-white/80">
            Backed by your mutual funds, No credit pull, No charges, & quick approval.
          </p>
          <Link href="/limit" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-[15px] font-semibold text-text-primary">
            Check eligibility
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="absolute -right-5 bottom-3 -rotate-[18deg] text-[52px] font-black leading-none tracking-[-0.08em] text-white/15">
          0%
          <div className="mt-1 text-[12px] font-bold uppercase tracking-[0.2em] text-accent-gold">INTEREST</div>
        </div>
        <div className="absolute right-10 top-10 h-2 w-2 rounded-full bg-accent-gold" />
        <div className="absolute right-16 top-14 h-1.5 w-1.5 rounded-full bg-accent-gold" />
        <div className="absolute right-20 bottom-16 h-2.5 w-2.5 rounded-full bg-accent-gold/90" />
        <div className="absolute right-24 bottom-28 h-3 w-3 rotate-45 bg-accent-gold/80" />
      </section>

      <section className="space-y-3">
        <SectionEyebrow>OFFERS</SectionEyebrow>
        <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x gap-3">
            {offers.map((offer) => (
              <div key={offer.title} className={`min-w-full snap-center rounded-[24px] p-5 ${offer.gradient}`}>
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.08em] text-accent-orange">{offer.eyebrow}</div>
                <h3 className="max-w-[240px] text-[22px] font-bold leading-[1.25] text-white">{offer.title}</h3>
                <ul className="mt-4 space-y-2 text-[13px] text-white/90">
                  {offer.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="mb-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white/10">
                        <Check className="h-3 w-3" />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-end justify-between">
                  <div className="flex gap-2">
                    <div className="h-16 w-12 rounded-t-2xl bg-white/10" />
                    <div className="h-20 w-12 rounded-t-2xl bg-white/15" />
                    <div className="h-14 w-12 rounded-t-2xl bg-white/10" />
                  </div>
                  <div className="flex items-end gap-2">
                    <div className="h-20 w-16 rounded-[18px] bg-white/10" />
                    <div className="h-12 w-12 rounded-full bg-white/15" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 pt-1">
          <span className="h-2 w-6 rounded-full bg-primary" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
        </div>
      </section>

      <section className="space-y-3">
        <SectionEyebrow>SHOP USING 1FI AT TOP BRANDS</SectionEyebrow>
        <div className="overflow-x-auto pb-1">
          <div className="flex gap-3">
            {brands.map((brand) => (
              <div key={brand.name} className="flex w-16 min-w-[64px] flex-col items-center gap-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-8 w-8 object-contain"
                    onError={(event) => {
                      const target = event.currentTarget as HTMLImageElement;
                      target.src = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" rx="16" fill="#EDE9FE"/><text x="50%" y="54%" font-size="20" text-anchor="middle" fill="#6D28D9" font-family="Arial, sans-serif" font-weight="700">${brand.name.charAt(0)}</text></svg>`)}`;
                    }}
                  />
                </div>
                <div className="text-[11px] text-text-secondary">{brand.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <SectionEyebrow>WHY PAY WITH 1FI</SectionEyebrow>
        <FeatureGrid />
      </section>

      <section className="space-y-3">
        <SectionEyebrow>HOW 1FI WORKS</SectionEyebrow>
        <HowItWorks />
      </section>

      <section className="overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#4C1D95_0%,#6D28D9_50%,#7C3AED_100%)] p-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-3 py-1.5 text-[11px] font-bold uppercase text-white">
          <Users className="h-3.5 w-3.5" />
          INVITE
        </div>
        <h3 className="max-w-[260px] text-[20px] font-bold leading-[1.3] text-white">
          Get upto <span className="text-accent-gold">₹1000</span> for every friend.
        </h3>
        <p className="mt-2 text-[13px] text-white/80">Plus they&apos;ll also get rewards.</p>
        <div className="mt-4 flex items-center justify-end text-[34px] font-black uppercase italic text-white/90">
          <div className="leading-none tracking-[-0.08em]">
            REFER
            <div>AND</div>
            <div>EARN</div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <SectionEyebrow>FREQUENTLY ASKED QUESTIONS</SectionEyebrow>
        <FaqAccordion />
      </section>
    </main>
  );
}
