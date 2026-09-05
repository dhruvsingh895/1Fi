import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "asc" },
      include: {
        variants: true,
        emiPlans: true,
      },
    });

    return NextResponse.json({
      products: products.map((product) => {
        const lowestMonthly = product.emiPlans.length > 0
          ? product.emiPlans.reduce((min, plan) => Math.min(min, plan.monthlyAmount), Number.POSITIVE_INFINITY)
          : 0;

        return {
          id: product.id,
          slug: product.slug,
          name: product.name,
          isNew: product.isNew,
          thumbnail: product.thumbnail,
          variantSummary: product.variants
            .filter((variant) => variant.type === "storage")
            .map((variant) => variant.label)
            .slice(0, 1)
            .join("") || "",
          mrp: product.mrp,
          price: product.price,
          lowestMonthly,
        };
      }),
    });
  } catch (error) {
    console.error("Failed to load product catalog", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
