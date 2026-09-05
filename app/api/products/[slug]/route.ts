import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const product = await prisma.product.findUnique({
      where: { slug },
      include: {
        variants: true,
        emiPlans: true,
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: product.id,
      slug: product.slug,
      name: product.name,
      isNew: product.isNew,
      description: product.description ?? "",
      images: {
        default: product.thumbnail,
        byVariant: Object.fromEntries(
          product.variants
            .filter((variant) => variant.type === "color" || variant.type === "finish")
            .map((variant) => [variant.label.toLowerCase().replace(/\s+/g, "-"), variant.imageUrl ?? product.thumbnail])
        ),
      },
      mrp: product.mrp,
      price: product.price,
      variants: product.variants.map((variant) => ({
        id: variant.id,
        type: variant.type,
        label: variant.label,
        swatchHex: variant.swatchHex,
        extraPrice: variant.extraPrice,
      })),
      emiPlans: product.emiPlans.map((plan) => ({
        id: plan.id,
        tenureMonths: plan.tenureMonths,
        monthlyAmount: plan.monthlyAmount,
        interestRate: plan.interestRate,
        cashbackAmount: plan.cashbackAmount,
        isZeroCost: plan.isZeroCost,
      })),
    });
  } catch (error) {
    console.error("Failed to load product details", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
