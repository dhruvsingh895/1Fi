import Link from "next/link";

export type ProductCardData = {
  id: string;
  slug: string;
  name: string;
  isNew: boolean;
  thumbnail: string;
  variantSummary: string;
  mrp: number;
  price: number;
  lowestMonthly: number;
};

export function ProductCard({ product }: { product: ProductCardData }) {
  return (
    <Link href={`/marketplace/products/${product.slug}`} className="rounded-2xl bg-white p-3 shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
      <div className="mb-3 overflow-hidden rounded-xl bg-gray-50 p-3">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="aspect-square w-full object-contain"
          onError={(event) => {
            const target = event.currentTarget as HTMLImageElement;
            target.src = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="420" height="420"><rect width="420" height="420" fill="#F3F4F6"/><rect x="24" y="24" width="372" height="372" rx="24" fill="#EDE9FE"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="28" fill="#6D28D9" font-family="Arial, sans-serif" font-weight="700">${product.name}</text></svg>`)}`;
          }}
        />
      </div>
      <div className="truncate text-[14px] font-semibold text-text-primary">{product.name}</div>
      <div className="mt-1 text-[12px] text-text-secondary">{product.variantSummary}</div>
      <div className="mt-3 flex items-center gap-2">
        <span className="text-[15px] font-bold text-text-primary">₹{product.price.toLocaleString("en-IN")}</span>
        <span className="text-[12px] text-text-secondary line-through">₹{product.mrp.toLocaleString("en-IN")}</span>
      </div>
      <div className="mt-3 inline-flex rounded-full bg-[#DCFCE7] px-2.5 py-1 text-[11px] font-semibold text-[#16A34A]">
        From ₹{product.lowestMonthly.toLocaleString("en-IN")}/mo
      </div>
    </Link>
  );
}
