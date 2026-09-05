"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { question: "What is 1Fi?", answer: "1Fi lets you use your mutual fund portfolio as backing for easy no-cost EMIs on purchases, without taking on a credit-card purchase flow." },
  { question: "Is 1Fi safe and legit?", answer: "Yes. Your holdings remain in your own mutual fund account and the EMI is structured through a regulated lending partner with clear terms and no hidden charges." },
  { question: "Who is the RBI approved lending partner?", answer: "The platform connects you with an RBI-registered lending partner that supports the financing structure for eligible purchases. Details are shared during onboarding." },
  { question: "What documents are needed to take a loan?", answer: "Typically you just need to verify your identity, sign a simple agreement, and provide basic KYC details so we can assess your eligibility." },
  { question: "Are there any hidden fees?", answer: "No. The product is designed to be transparent, and any charges are disclosed before you confirm the plan. There are no surprise add-on fees." },
  { question: "What if markets fall?", answer: "Your mutual funds continue to stay invested, and the financing is structured so your purchase remains protected under the agreed terms. We keep communication clear and simple." },
  { question: "Are there any charges if I pay early to release my pledged mutual fund units?", answer: "Early repayment is generally possible without additional platform charges, and the exact process is explained in your agreement before you proceed." },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
        <div className="divide-y divide-border-subtle">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="px-4 py-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-[14px] font-medium text-text-primary">{faq.question}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <p className="mt-3 text-[13px] leading-5 text-text-secondary">{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
      <button type="button" className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-4 text-[15px] font-semibold text-primary shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
        View all FAQs
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </>
  );
}
