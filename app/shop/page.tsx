"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MapPin, Search, Sparkles } from "lucide-react";
import { ProductCard, ProductCardData } from "@/components/ProductCard";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { SegmentedControl } from "@/components/SegmentedControl";

const tabOptions = [
  { value: "top-brands", label: "Top Brands" },
  { value: "nearby-stores", label: "Nearby Stores" },
  { value: "marketplace", label: "1Fi Marketplace" },
];

const topBrands = [
  { name: "Apple", tagline: "No-cost EMIs upto 18 months", logo: "/brands/apple.png" },
  { name: "Samsung", tagline: "No-cost EMIs upto 24 months", logo: "/brands/samsung.png" },
  { name: "Amazon", tagline: "No-cost EMIs upto 12 months", logo: "/brands/amazon.png" },
  { name: "Flipkart", tagline: "No-cost EMIs upto 12 months", logo: "/brands/flipkart.png" },
  { name: "Myntra", tagline: "No-cost EMIs upto 9 months", logo: "/brands/myntra.png" },
  { name: "MakeMyTrip", tagline: "No-cost EMIs upto 12 months", logo: "/brands/makemytrip.png" },
  { name: "Air India", tagline: "No-cost EMIs upto 12 months", logo: "/brands/airindia.png" },
  { name: "Croma", tagline: "No-cost EMIs upto 15 months", logo: "/brands/croma.png" },
  { name: "Paytm", tagline: "No-cost EMIs upto 6 months", logo: "/brands/paytm.png" },
  { name: "Google", tagline: "No-cost EMIs upto 12 months", logo: "/brands/google.png" },
  { name: "OnePlus", tagline: "No-cost EMIs upto 12 months", logo: "/brands/oneplus.png" },
  { name: "Nykaa", tagline: "Beauty & lifestyle EMIs", logo: "/brands/nykaa.png" },
  { name: "Nike", tagline: "Lifestyle & gear EMIs", logo: "/brands/nike.png" },
];

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="px-4 py-8 text-center text-text-secondary">Loading shop...</div>}>
      <ShopPageContent />
    </Suspense>
  );
}

function MarketplaceCatalog() {
  const [products, setProducts] = useState<ProductCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/products", { cache: "no-store", signal: controller.signal });
        if (!res.ok) throw new Error("Failed to load products");
        const data = await res.json();
        setProducts(data.products ?? []);
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        setError(e instanceof Error ? e.message : "Failed to load products");
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="animate-pulse rounded-2xl bg-white p-3 shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
            <div className="mb-3 h-32 rounded-xl bg-gray-200" />
            <div className="mb-2 h-4 w-20 rounded bg-gray-200" />
            <div className="mb-4 h-3 w-12 rounded bg-gray-200" />
            <div className="h-4 w-16 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl bg-white p-6 text-center shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
        <div className="text-[14px] text-text-secondary">Something went wrong while loading products.</div>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-4 rounded-full bg-primary px-4 py-2 text-[14px] font-semibold text-white"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ShopPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") ?? "top-brands";
  const [brandQuery, setBrandQuery] = useState("");
  const filteredBrands = topBrands.filter((brand) => {
    const query = brandQuery.trim().toLowerCase();
    return !query || `${brand.name} ${brand.tagline}`.toLowerCase().includes(query);
  });

  const handleTabChange = (nextTab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", nextTab);
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <main className="space-y-5 px-4 pb-36 pt-4">
      <section className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#4C1D95_0%,#6D28D9_50%,#7C3AED_100%)] p-6">
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
          <Sparkles className="h-3.5 w-3.5" />
          NO-COST EMIs
        </div>
        <h1 className="max-w-[220px] text-[24px] font-bold leading-[1.25] text-white">
          Shop today,
          <span className="block italic">Pay later using</span>
          <span className="block">Mutual funds.</span>
        </h1>
        <p className="mt-3 max-w-[230px] text-[13px] text-white/80">
          No credit score required. No interest. Backed by your investments.
        </p>

        <div className="absolute bottom-0 right-3 flex items-end gap-2">
          <div className="h-16 w-16 rounded-t-[18px] bg-white/10" />
          <div className="h-14 w-14 rounded-t-[18px] bg-white/10" />
          <div className="h-16 w-12 rounded-full bg-white/10" />
          <div className="h-20 w-14 rounded-[20px] bg-white/10" />
        </div>
      </section>

      <SegmentedControl value={tab} options={tabOptions} onChange={handleTabChange} />

      {tab === "top-brands" && (
        <section className="space-y-4">
          <div className="flex h-12 items-center gap-2 rounded-full bg-white px-4 shadow-sm">
            <Search className="h-4 w-4 text-text-secondary" />
            <input
              value={brandQuery}
              onChange={(event) => setBrandQuery(event.target.value)}
              placeholder="Search online stores..."
              aria-label="Search online stores"
              className="w-full border-0 bg-transparent text-[14px] text-text-primary placeholder:text-text-secondary focus:outline-none"
            />
          </div>

          <h2 className="text-[18px] font-bold text-text-primary">Top Brands</h2>

          <div className="space-y-3">
            {filteredBrands.map((brand) => (
              <div key={brand.name} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-7 w-7 object-contain"
                    onError={(event) => {
                      const target = event.currentTarget as HTMLImageElement;
                      target.src = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="48" height="48" rx="12" fill="#EDE9FE"/><text x="50%" y="56%" font-size="18" text-anchor="middle" fill="#6D28D9" font-family="Arial, sans-serif" font-weight="700">${brand.name.charAt(0)}</text></svg>`)}`;
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="text-[15px] font-semibold text-text-primary">{brand.name}</div>
                  <div className="text-[12px] text-text-secondary">{brand.tagline}</div>
                </div>
              </div>
            ))}
            {filteredBrands.length === 0 && (
              <div className="rounded-2xl bg-white p-6 text-center text-[13px] text-text-secondary shadow-sm">
                No stores match “{brandQuery}”.
              </div>
            )}
          </div>
        </section>
      )}

      {tab === "nearby-stores" && (
        <section className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
            <MapPin className="h-7 w-7 text-text-secondary" />
          </div>
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-secondary">COMING SOON</div>
          <h2 className="mt-3 text-[16px] font-semibold text-text-primary">Nearby stores coming soon</h2>
          <p className="mt-2 max-w-[220px] text-[13px] text-text-secondary">
            We&apos;re working on bringing local stores to 1Fi.
          </p>
        </section>
      )}

      {tab === "marketplace" && (
        <section className="space-y-4">
          <SectionEyebrow>1FI MARKETPLACE</SectionEyebrow>
          <div>
            <h2 className="text-[18px] font-bold text-text-primary">Shop on no-cost EMI</h2>
            <p className="mt-1 text-[13px] text-text-secondary">Backed by your mutual funds. No credit pull, no charges.</p>
          </div>
          <MarketplaceCatalog />
        </section>
      )}
    </main>
  );
}
