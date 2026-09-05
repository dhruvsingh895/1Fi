"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { EmiPlanRow } from "@/components/EmiPlanRow";
import { VariantSelector } from "@/components/VariantSelector";

type ProductVariant = {
  id: string;
  type: string;
  label: string;
  swatchHex: string | null;
  extraPrice: number;
};

type EmiPlan = {
  id: string;
  tenureMonths: number;
  monthlyAmount: number;
  interestRate: number;
  cashbackAmount: number;
  isZeroCost: boolean;
};

type ProductDetail = {
  id: string;
  slug: string;
  name: string;
  isNew: boolean;
  description: string;
  images: {
    default: string;
    byVariant?: Record<string, string>;
  };
  mrp: number;
  price: number;
  variants: ProductVariant[];
  emiPlans: EmiPlan[];
};

export default function ProductDetailPage() {
  const pathname = usePathname();
  const router = useRouter();
  const slug = pathname.split("/").filter(Boolean).pop() ?? "";
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);
  const [selectedStorageId, setSelectedStorageId] = useState<string | null>(null);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/products/${slug}`, { cache: "no-store", signal: controller.signal });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || "Product not found");
        }
        const data = await res.json();
        setProduct(data);

        const colors = data.variants.filter((v: ProductVariant) => v.type === "color" || v.type === "finish");
        const storage = data.variants.filter((v: ProductVariant) => v.type === "storage");
        setSelectedColorId(colors[0]?.id ?? null);
        setSelectedStorageId(storage[0]?.id ?? null);
        setSelectedPlanId(data.emiPlans[0]?.id ?? null);
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        setError(e instanceof Error ? e.message : "Failed to load product");
      } finally {
        setLoading(false);
      }
    }

    if (slug) load();
    return () => controller.abort();
  }, [slug]);

  const selectedVariantIds = useMemo(() => {
    if (!product) return { color: null, storage: null };

    const color = product.variants.find((v) => v.id === selectedColorId) ?? product.variants.find((v) => v.type === "color" || v.type === "finish") ?? null;
    const storage = product.variants.find((v) => v.id === selectedStorageId) ?? product.variants.find((v) => v.type === "storage") ?? null;
    return { color, storage };
  }, [product, selectedColorId, selectedStorageId]);

  const currentImage = useMemo(() => {
    if (!product) return "/";
    if (selectedVariantIds.color && product.images.byVariant) {
      const key = selectedVariantIds.color.label.toLowerCase().replace(/\s+/g, "-");
      const mapped = product.images.byVariant[key];
      if (mapped) return mapped;
    }
    return product.images.default || "/";
  }, [product, selectedVariantIds.color]);

  const selectedPlan = product?.emiPlans.find((plan) => plan.id === selectedPlanId) ?? product?.emiPlans[0] ?? null;

  if (loading) {
    return <div className="px-4 py-8 text-center text-text-secondary">Loading product...</div>;
  }

  if (error || !product) {
    return (
      <main className="px-4 pb-36 pt-8">
        <div className="rounded-2xl bg-white p-6 text-center shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
          <h1 className="text-[20px] font-bold text-text-primary">Product unavailable</h1>
          <p className="mt-2 text-[13px] text-text-secondary">{error || "We could not find this product."}</p>
          <Link href="/shop?tab=marketplace" className="mt-6 inline-flex rounded-full bg-primary px-4 py-2 text-[14px] font-semibold text-white">
            Back to 1Fi Marketplace
          </Link>
        </div>
      </main>
    );
  }

  const currentColorLabel = selectedVariantIds.color?.label ?? "Select a color";
  const currentStorageLabel = selectedVariantIds.storage?.label ?? "Select storage";
  const saveAmount = product.mrp - product.price;

  return (
    <main className="px-4 pb-36 pt-4">
      <div className="space-y-6">
        <section>
          <div className="relative">
            {product.isNew && (
              <div className="absolute left-3 top-3 z-10 rounded-md bg-danger px-2 py-0.5 text-[10px] font-bold uppercase text-white">NEW</div>
            )}
            <div className="rounded-2xl bg-white p-6 shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
              <img
                src={currentImage}
                alt={`${product.name} in ${currentColorLabel}`}
                className="aspect-square w-full rounded-xl bg-gray-50 object-contain"
                onError={(event) => {
                  const target = event.currentTarget as HTMLImageElement;
                  target.src = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="640" height="640"><rect width="640" height="640" fill="#F3F4F6"/><rect x="40" y="40" width="560" height="560" rx="32" fill="#EDE9FE"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="38" fill="#6D28D9" font-family="Arial, sans-serif" font-weight="700">${product.name}</text></svg>`)}`;
                }}
              />
            </div>
          </div>

          <div className="mt-4">
            <VariantSelector
              variants={product.variants}
              selected={selectedColorId ?? selectedStorageId}
              onSelect={(id) => {
                const v = product.variants.find((variant) => variant.id === id);
                if (!v) return;
                if (v.type === "color" || v.type === "finish") setSelectedColorId(id);
                if (v.type === "storage") setSelectedStorageId(id);
              }}
            />
          </div>
        </section>

        <section>
          <div className="mt-2 text-[22px] font-bold text-text-primary">{product.name}</div>
          <div className="mt-1 text-[13px] text-text-secondary">{currentColorLabel} / {currentStorageLabel}</div>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-[26px] font-bold text-text-primary">₹{product.price.toLocaleString("en-IN")}</span>
            <span className="text-[14px] text-text-secondary line-through">₹{product.mrp.toLocaleString("en-IN")}</span>
            {saveAmount > 0 && <span className="rounded-full bg-[#DCFCE7] px-2 py-1 text-[11px] font-semibold text-[#16A34A]">Save ₹{saveAmount.toLocaleString("en-IN")}</span>}
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span className="h-3.5 w-[3px] rounded-full bg-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-primary">EMI plans backed by mutual funds</span>
          </div>

          <div className="mt-4 space-y-3">
            {product.emiPlans.map((plan) => (
              <EmiPlanRow key={plan.id} plan={plan} selected={selectedPlanId === plan.id} onSelect={setSelectedPlanId} />
            ))}
          </div>
        </section>
      </div>

      <div className="mt-6">
        <div className="mx-auto max-w-md rounded-full bg-white p-2 shadow-[0_8px_28px_rgba(17,24,39,0.14)]">
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-[15px] font-semibold text-white"
            onClick={() => {
              const plan = product.emiPlans.find((item) => item.id === selectedPlanId) ?? product.emiPlans[0];
              const query = new URLSearchParams({
                planId: plan.id,
                productSlug: product.slug,
              }).toString();
              router.push(`/marketplace/products/${product.slug}/confirm?${query}`);
            }}
          >
            Proceed — ₹{(selectedPlan?.monthlyAmount ?? product.emiPlans[0]?.monthlyAmount ?? 0).toLocaleString("en-IN")}/mo
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </main>
  );
}
