type Variant = {
  id: string;
  type: string;
  label: string;
  swatchHex?: string | null;
  extraPrice: number;
};

type VariantSelectorProps = {
  variants: Variant[];
  selected: string | null;
  onSelect: (variantId: string) => void;
};

export function VariantSelector({ variants, selected, onSelect }: VariantSelectorProps) {
  const colorVariants = variants.filter((v) => v.type === "color" || v.type === "finish");
  const storageVariants = variants.filter((v) => v.type === "storage");

  return (
    <div className="space-y-4">
      {colorVariants.length > 0 && (
        <div>
          <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-text-secondary">Color</div>
          <div className="flex flex-wrap gap-3">
            {colorVariants.map((variant) => {
              const isSelected = selected === variant.id;
              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => onSelect(variant.id)}
                  className={`h-7 w-7 rounded-full border-2 ${isSelected ? "ring-2 ring-primary ring-offset-2" : "border-white"}`}
                  style={{ background: variant.swatchHex ?? "#E5E7EB" }}
                  aria-label={variant.label}
                  title={variant.label}
                />
              );
            })}
          </div>
        </div>
      )}

      {storageVariants.length > 0 && (
        <div>
          <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-text-secondary">Storage</div>
          <div className="flex flex-wrap gap-2">
            {storageVariants.map((variant) => {
              const isSelected = selected === variant.id;
              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => onSelect(variant.id)}
                  className={`rounded-full px-3 py-2 text-[13px] font-medium ${
                    isSelected ? "bg-primary text-white" : "border border-border-subtle bg-white text-text-secondary"
                  }`}
                >
                  {variant.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="text-[12px] text-text-secondary">
        Available in {variants.filter((v) => v.type !== "storage").length || variants.length} {variants.some((v) => v.type === "color" || v.type === "finish") ? "finishes" : "options"}
      </div>
    </div>
  );
}
