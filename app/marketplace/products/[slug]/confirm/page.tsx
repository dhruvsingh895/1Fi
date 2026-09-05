"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

type ConfirmationData = {
  productName: string;
  monthlyAmount: number;
  tenureMonths: number;
};

export default function ConfirmPage() {
  return (
    <Suspense fallback={<div className="px-4 py-8 text-center text-text-secondary">Loading confirmation...</div>}>
      <ConfirmContent />
    </Suspense>
  );
}

function ConfirmContent() {
  const searchParams = useSearchParams();
  const productSlug = searchParams.get("productSlug");
  const planId = searchParams.get("planId");
  const [confirmation, setConfirmation] = useState<ConfirmationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadConfirmation() {
      if (!productSlug || !planId) {
        setError("This confirmation link is incomplete.");
        return;
      }

      try {
        const response = await fetch(`/api/products/${encodeURIComponent(productSlug)}`, {
          cache: "no-store",
          signal: controller.signal,
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Unable to load product details.");
        }

        const plan = data.emiPlans?.find((item: { id: string }) => item.id === planId);
        if (!plan) {
          throw new Error("The selected EMI plan is no longer available.");
        }

        setConfirmation({
          productName: data.name,
          monthlyAmount: plan.monthlyAmount,
          tenureMonths: plan.tenureMonths,
        });
      } catch (loadError) {
        if (loadError instanceof DOMException && loadError.name === "AbortError") return;
        setError(loadError instanceof Error ? loadError.message : "Unable to load confirmation details.");
      }
    }

    loadConfirmation();
    return () => controller.abort();
  }, [productSlug, planId]);

  if (error) {
    return (
      <main className="px-4 pb-36 pt-8">
        <div className="rounded-[24px] bg-white p-6 text-center shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
          <h1 className="text-[20px] font-bold text-text-primary">Confirmation unavailable</h1>
          <p className="mt-2 text-[14px] text-text-secondary">{error}</p>
          <Link href="/shop?tab=marketplace" className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-primary px-5 text-[15px] font-semibold text-white">
            Back to 1Fi Marketplace
          </Link>
        </div>
      </main>
    );
  }

  if (!confirmation) {
    return <div className="px-4 py-8 text-center text-text-secondary">Loading confirmation...</div>;
  }

  return (
    <main className="px-4 pb-36 pt-8">
      <div className="rounded-[24px] bg-white p-6 text-center shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
          <Check className="h-6 w-6" />
        </div>
        <h1 className="mt-5 text-[24px] font-bold text-text-primary">You&apos;re all set!</h1>
        <p className="mt-2 text-[14px] text-text-secondary">
          Your {confirmation.productName} purchase is ready with a {confirmation.tenureMonths} month EMI plan of ₹{confirmation.monthlyAmount.toLocaleString("en-IN")}/mo.
        </p>
        <Link href="/shop?tab=marketplace" className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-primary px-5 text-[15px] font-semibold text-white">
          Back to 1Fi Marketplace
        </Link>
      </div>
    </main>
  );
}
