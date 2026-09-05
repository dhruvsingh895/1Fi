# 1Fi

A mobile-first fintech web app built with Next.js 16, TypeScript, Tailwind CSS, and SQLite via Prisma.

## Tech stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- SQLite database
- Lucide React icons

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Generate Prisma client and initialize SQLite:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
3. Seed the marketplace catalog:
   ```bash
   npx tsx prisma/seed.ts
   ```
4. Start the app:
   ```bash
   npm run dev -- --hostname 0.0.0.0
   ```
5. Open `http://localhost:3000`

## API docs

### GET /api/products

```json
{
  "products": [
    {
      "id": "iphone-17-pro",
      "slug": "iphone-17-pro",
      "name": "iPhone 17 Pro",
      "isNew": true,
      "thumbnail": "/images/iphone-17-pro-orange.jpg",
      "variantSummary": "256GB",
      "mrp": 134900,
      "price": 127400,
      "lowestMonthly": 2842
    }
  ]
}
```

### GET /api/products/:slug

```json
{
  "id": "iphone-17-pro",
  "slug": "iphone-17-pro",
  "name": "iPhone 17 Pro",
  "isNew": true,
  "description": "A high-end smartphone.",
  "images": {
    "default": "/images/iphone-17-pro-orange.jpg",
    "byVariant": {
      "orange": "/images/iphone-17-pro-orange.jpg",
      "silver": "/images/iphone-17-pro-silver.jpg",
      "blue": "/images/iphone-17-pro-blue.jpg"
    }
  },
  "mrp": 134900,
  "price": 127400,
  "variants": [
    { "id": "v1", "type": "color", "label": "Orange", "swatchHex": "#D9622B", "extraPrice": 0 },
    { "id": "v2", "type": "color", "label": "Silver", "swatchHex": "#E5E7EB", "extraPrice": 0 },
    { "id": "v3", "type": "color", "label": "Deep Blue", "swatchHex": "#1E3A8A", "extraPrice": 0 },
    { "id": "v4", "type": "storage", "label": "256GB", "swatchHex": null, "extraPrice": 0 },
    { "id": "v5", "type": "storage", "label": "512GB", "swatchHex": null, "extraPrice": 15000 }
  ],
  "emiPlans": [
    { "id": "p1", "tenureMonths": 3,  "monthlyAmount": 44967, "interestRate": 0,    "cashbackAmount": 7500, "isZeroCost": true },
    { "id": "p2", "tenureMonths": 6,  "monthlyAmount": 22483, "interestRate": 0,    "cashbackAmount": 7500, "isZeroCost": true },
    { "id": "p3", "tenureMonths": 12, "monthlyAmount": 11242, "interestRate": 0,    "cashbackAmount": 7500, "isZeroCost": true },
    { "id": "p4", "tenureMonths": 24, "monthlyAmount": 5621,  "interestRate": 0,    "cashbackAmount": 7500, "isZeroCost": true },
    { "id": "p5", "tenureMonths": 36, "monthlyAmount": 4297,  "interestRate": 10.5, "cashbackAmount": 7500, "isZeroCost": false },
    { "id": "p6", "tenureMonths": 48, "monthlyAmount": 3385,  "interestRate": 10.5, "cashbackAmount": 7500, "isZeroCost": false },
    { "id": "p7", "tenureMonths": 60, "monthlyAmount": 2842,  "interestRate": 10.5, "cashbackAmount": 7500, "isZeroCost": false }
  ]
}
```

Unknown slug responses return `404 { "error": "Product not found" }` and unexpected failures return `500 { "error": "Something went wrong" }`.

## Prisma schema

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Product {
  id          String   @id @default(cuid())
  slug        String   @unique
  name        String
  category    String
  isNew       Boolean  @default(false)
  description String?
  mrp         Int
  price       Int
  thumbnail   String
  createdAt   DateTime @default(now())
  variants    ProductVariant[]
  emiPlans    EmiPlan[]
}

model ProductVariant {
  id         String  @id @default(cuid())
  productId  String
  product    Product @relation(fields: [productId], references: [id])
  type       String
  label      String
  swatchHex  String?
  imageUrl   String?
  extraPrice Int     @default(0)
}

model EmiPlan {
  id             String  @id @default(cuid())
  productId      String
  product        Product @relation(fields: [productId], references: [id])
  tenureMonths   Int
  monthlyAmount  Int
  interestRate   Float
  cashbackAmount Int     @default(0)
  isZeroCost     Boolean @default(false)
}
```
