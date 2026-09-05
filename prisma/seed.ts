import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type SeedVariant = {
  type: string;
  label: string;
  swatchHex: string | null;
  imageUrl?: string;
  extraPrice: number;
};

type SeedProduct = {
  slug: string;
  name: string;
  category: string;
  isNew: boolean;
  description: string;
  mrp: number;
  price: number;
  thumbnail: string;
  variants: SeedVariant[];
  emiPlans: { tenureMonths: number; monthlyAmount: number; interestRate: number; cashbackAmount: number; isZeroCost: boolean }[];
};

const products: SeedProduct[] = [
  {
    slug: "iphone-17-pro",
    name: "iPhone 17 Pro",
    category: "Smartphones",
    isNew: true,
    description: "A high-end smartphone.",
    mrp: 134900,
    price: 127400,
    thumbnail: "/images/iphone-17-pro-orange.jpg",
    variants: [
      { type: "color", label: "Orange", swatchHex: "#D9622B", extraPrice: 0, imageUrl: "/images/iphone-17-pro-orange.jpg" },
      { type: "color", label: "Silver", swatchHex: "#E5E7EB", extraPrice: 0, imageUrl: "/images/iphone-17-pro-silver.jpg" },
      { type: "color", label: "Deep Blue", swatchHex: "#1E3A8A", extraPrice: 0, imageUrl: "/images/iphone-17-pro-blue.jpg" },
      { type: "storage", label: "256GB", swatchHex: null, extraPrice: 0 },
      { type: "storage", label: "512GB", swatchHex: null, extraPrice: 15000 },
    ],
    emiPlans: [
      { tenureMonths: 3, monthlyAmount: 44967, interestRate: 0, cashbackAmount: 7500, isZeroCost: true },
      { tenureMonths: 6, monthlyAmount: 22483, interestRate: 0, cashbackAmount: 7500, isZeroCost: true },
      { tenureMonths: 12, monthlyAmount: 11242, interestRate: 0, cashbackAmount: 7500, isZeroCost: true },
      { tenureMonths: 24, monthlyAmount: 5621, interestRate: 0, cashbackAmount: 7500, isZeroCost: true },
      { tenureMonths: 36, monthlyAmount: 4297, interestRate: 10.5, cashbackAmount: 7500, isZeroCost: false },
      { tenureMonths: 48, monthlyAmount: 3385, interestRate: 10.5, cashbackAmount: 7500, isZeroCost: false },
      { tenureMonths: 60, monthlyAmount: 2842, interestRate: 10.5, cashbackAmount: 7500, isZeroCost: false },
    ],
  },
  {
    slug: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    category: "Smartphones",
    isNew: true,
    description: "A premium Android flagship.",
    mrp: 129999,
    price: 119999,
    thumbnail: "/images/samsung-s24-ultra-black.jpg",
    variants: [
      { type: "color", label: "Titanium Black", swatchHex: "#1F2937", extraPrice: 0, imageUrl: "/images/samsung-s24-ultra-black.jpg" },
      { type: "color", label: "Titanium Gray", swatchHex: "#9CA3AF", extraPrice: 0, imageUrl: "/images/samsung-s24-ultra-gray.jpg" },
      { type: "color", label: "Titanium Violet", swatchHex: "#7C3AED", extraPrice: 0, imageUrl: "/images/samsung-s24-ultra-black.jpg" },
      { type: "storage", label: "256GB", swatchHex: null, extraPrice: 0 },
      { type: "storage", label: "512GB", swatchHex: null, extraPrice: 12000 },
    ],
    emiPlans: [
      { tenureMonths: 3, monthlyAmount: 41999, interestRate: 0, cashbackAmount: 5000, isZeroCost: true },
      { tenureMonths: 6, monthlyAmount: 21000, interestRate: 0, cashbackAmount: 5000, isZeroCost: true },
      { tenureMonths: 12, monthlyAmount: 10500, interestRate: 0, cashbackAmount: 5000, isZeroCost: true },
      { tenureMonths: 24, monthlyAmount: 5250, interestRate: 0, cashbackAmount: 5000, isZeroCost: true },
      { tenureMonths: 36, monthlyAmount: 4010, interestRate: 9.5, cashbackAmount: 5000, isZeroCost: false },
      { tenureMonths: 48, monthlyAmount: 3150, interestRate: 9.5, cashbackAmount: 5000, isZeroCost: false },
      { tenureMonths: 60, monthlyAmount: 2650, interestRate: 9.5, cashbackAmount: 5000, isZeroCost: false },
    ],
  },
  {
    slug: "macbook-air-m4",
    name: "MacBook Air M4",
    category: "Laptops",
    isNew: false,
    description: "A portable laptop with a crisp display.",
    mrp: 134900,
    price: 129900,
    thumbnail: "/images/macbook-air-m4-midnight.jpg",
    variants: [
      { type: "color", label: "Midnight", swatchHex: "#1E293B", extraPrice: 0, imageUrl: "/images/macbook-air-m4-midnight.jpg" },
      { type: "color", label: "Starlight", swatchHex: "#F5F1E8", extraPrice: 0, imageUrl: "/images/macbook-air-m4-starlight.jpg" },
      { type: "color", label: "Sky Blue", swatchHex: "#93C5FD", extraPrice: 0, imageUrl: "/images/macbook-air-m4-starlight.jpg" },
      { type: "storage", label: "256GB", swatchHex: null, extraPrice: 0 },
      { type: "storage", label: "512GB", swatchHex: null, extraPrice: 20000 },
    ],
    emiPlans: [
      { tenureMonths: 3, monthlyAmount: 43300, interestRate: 0, cashbackAmount: 6000, isZeroCost: true },
      { tenureMonths: 6, monthlyAmount: 21650, interestRate: 0, cashbackAmount: 6000, isZeroCost: true },
      { tenureMonths: 12, monthlyAmount: 10825, interestRate: 0, cashbackAmount: 6000, isZeroCost: true },
      { tenureMonths: 24, monthlyAmount: 5413, interestRate: 0, cashbackAmount: 6000, isZeroCost: true },
      { tenureMonths: 36, monthlyAmount: 4120, interestRate: 10, cashbackAmount: 6000, isZeroCost: false },
      { tenureMonths: 48, monthlyAmount: 3240, interestRate: 10, cashbackAmount: 6000, isZeroCost: false },
      { tenureMonths: 60, monthlyAmount: 2715, interestRate: 10, cashbackAmount: 6000, isZeroCost: false },
    ],
  },
  {
    slug: "sony-wh1000xm5",
    name: "Sony WH-1000XM5",
    category: "Audio",
    isNew: true,
    description: "Wireless noise-cancelling headphones for travel and work.",
    mrp: 34990,
    price: 29990,
    thumbnail: "/images/sony-wh1000xm5-black.jpg",
    variants: [
      { type: "color", label: "Black", swatchHex: "#111827", extraPrice: 0, imageUrl: "/images/sony-wh1000xm5-black.jpg" },
      { type: "color", label: "Silver", swatchHex: "#D1D5DB", extraPrice: 0, imageUrl: "/images/sony-wh1000xm5-black.jpg" },
      { type: "finish", label: "Premium", swatchHex: "#F4B740", extraPrice: 0 },
      { type: "storage", label: "Standard", swatchHex: null, extraPrice: 0 },
      { type: "storage", label: "Travel Case", swatchHex: null, extraPrice: 2500 },
    ],
    emiPlans: [
      { tenureMonths: 3, monthlyAmount: 10497, interestRate: 0, cashbackAmount: 1500, isZeroCost: true },
      { tenureMonths: 6, monthlyAmount: 5249, interestRate: 0, cashbackAmount: 1500, isZeroCost: true },
      { tenureMonths: 12, monthlyAmount: 2633, interestRate: 0, cashbackAmount: 1500, isZeroCost: true },
      { tenureMonths: 24, monthlyAmount: 1317, interestRate: 0, cashbackAmount: 1500, isZeroCost: true },
      { tenureMonths: 36, monthlyAmount: 1030, interestRate: 9.5, cashbackAmount: 1500, isZeroCost: false },
      { tenureMonths: 48, monthlyAmount: 820, interestRate: 9.5, cashbackAmount: 1500, isZeroCost: false },
      { tenureMonths: 60, monthlyAmount: 680, interestRate: 9.5, cashbackAmount: 1500, isZeroCost: false },
    ],
  },
  {
    slug: "canon-eos-r10",
    name: "Canon EOS R10",
    category: "Cameras",
    isNew: false,
    description: "A compact mirrorless camera for creators.",
    mrp: 87990,
    price: 79990,
    thumbnail: "/images/canon-eos-r10-black.jpg",
    variants: [
      { type: "color", label: "Black", swatchHex: "#111827", extraPrice: 0, imageUrl: "/images/canon-eos-r10-black.jpg" },
      { type: "color", label: "Silver", swatchHex: "#E5E7EB", extraPrice: 0, imageUrl: "/images/canon-eos-r10-silver.jpg" },
      { type: "storage", label: "Body Only", swatchHex: null, extraPrice: 0 },
      { type: "storage", label: "Kit Lens", swatchHex: null, extraPrice: 15000 },
    ],
    emiPlans: [
      { tenureMonths: 3, monthlyAmount: 27330, interestRate: 0, cashbackAmount: 3500, isZeroCost: true },
      { tenureMonths: 6, monthlyAmount: 13665, interestRate: 0, cashbackAmount: 3500, isZeroCost: true },
      { tenureMonths: 12, monthlyAmount: 6833, interestRate: 0, cashbackAmount: 3500, isZeroCost: true },
      { tenureMonths: 24, monthlyAmount: 3417, interestRate: 0, cashbackAmount: 3500, isZeroCost: true },
      { tenureMonths: 36, monthlyAmount: 2760, interestRate: 10, cashbackAmount: 3500, isZeroCost: false },
      { tenureMonths: 48, monthlyAmount: 2190, interestRate: 10, cashbackAmount: 3500, isZeroCost: false },
      { tenureMonths: 60, monthlyAmount: 1830, interestRate: 10, cashbackAmount: 3500, isZeroCost: false },
    ],
  },
  {
    slug: "dell-xps-13",
    name: "Dell XPS 13",
    category: "Laptops",
    isNew: true,
    description: "A sleek ultrabook for productivity on the move.",
    mrp: 122990,
    price: 109990,
    thumbnail: "/images/dell-xps-13-graphite.jpg",
    variants: [
      { type: "color", label: "Platinum", swatchHex: "#E5E7EB", extraPrice: 0, imageUrl: "/images/dell-xps-13-graphite.jpg" },
      { type: "color", label: "Graphite", swatchHex: "#374151", extraPrice: 0, imageUrl: "/images/dell-xps-13-graphite.jpg" },
      { type: "storage", label: "512GB", swatchHex: null, extraPrice: 0 },
      { type: "storage", label: "1TB", swatchHex: null, extraPrice: 18000 },
    ],
    emiPlans: [
      { tenureMonths: 3, monthlyAmount: 37000, interestRate: 0, cashbackAmount: 4000, isZeroCost: true },
      { tenureMonths: 6, monthlyAmount: 18500, interestRate: 0, cashbackAmount: 4000, isZeroCost: true },
      { tenureMonths: 12, monthlyAmount: 9250, interestRate: 0, cashbackAmount: 4000, isZeroCost: true },
      { tenureMonths: 24, monthlyAmount: 4620, interestRate: 0, cashbackAmount: 4000, isZeroCost: true },
      { tenureMonths: 36, monthlyAmount: 3740, interestRate: 9.5, cashbackAmount: 4000, isZeroCost: false },
      { tenureMonths: 48, monthlyAmount: 2950, interestRate: 9.5, cashbackAmount: 4000, isZeroCost: false },
      { tenureMonths: 60, monthlyAmount: 2460, interestRate: 9.5, cashbackAmount: 4000, isZeroCost: false },
    ],
  },
] as const;

async function main() {
  await prisma.emiPlan.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.product.deleteMany();

  for (const product of products) {
    const created = await prisma.product.create({
      data: {
        slug: product.slug,
        name: product.name,
        category: product.category,
        isNew: product.isNew,
        description: product.description,
        mrp: product.mrp,
        price: product.price,
        thumbnail: product.thumbnail,
        variants: {
          create: product.variants.map((variant) => ({
            type: variant.type,
            label: variant.label,
            swatchHex: variant.swatchHex,
            imageUrl: variant.imageUrl ?? null,
            extraPrice: variant.extraPrice,
          })),
        },
        emiPlans: {
          create: product.emiPlans.map((plan) => ({
            tenureMonths: plan.tenureMonths,
            monthlyAmount: plan.monthlyAmount,
            interestRate: plan.interestRate,
            cashbackAmount: plan.cashbackAmount,
            isZeroCost: plan.isZeroCost,
          })),
        },
      },
    });

    console.log(`Seeded ${created.name}`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
