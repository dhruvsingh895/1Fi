# 1Fi

1Fi is a mobile-first fintech experience for shopping with mutual-fund-backed,
no-cost EMI plans. It includes the core 1Fi screens plus a Prisma-backed
marketplace catalog and purchase flow.

## Features

- Home dashboard with offers, benefits, FAQs, and partner brands
- Shop tabs for top brands, nearby stores, and **1Fi Marketplace**
- Dynamic product catalog loaded from `/api/products`
- Product detail pages with:
  - Real local product photography
  - Color and storage selection
  - Color-specific image switching
  - EMI plan selection
- Confirmation flow that validates the selected product and EMI plan through the API
- EMI dues, eligibility/limit, and profile screens
- Responsive mobile-first layout with shared bottom navigation
- Loading, empty, retry, invalid-link, and API error states

## Tech stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL (Neon-compatible)
- Lucide React

## Project structure

```text
app/
  api/products/                 Product catalog APIs
  marketplace/products/[slug]/ Product detail and confirmation flow
  shop/                         Brand and marketplace browsing
  page.tsx                      Home screen
components/                     Shared UI components
lib/prisma.ts                   Prisma client singleton
prisma/schema.prisma            Product, variant, and EMI models
prisma/seed.ts                  Marketplace seed data
public/brands/                  Local brand logo assets
public/images/                  Local product and variant photography
```

## Requirements

- Node.js 20 or newer
- npm

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create or update `.env` with your Neon PostgreSQL connection string:

   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST/DB?sslmode=require"
   ```

3. Generate the Prisma client:

   ```bash
   npx prisma generate
   ```

4. Create/update the database schema:

   ```bash
   npm run db:push
   ```

5. Seed the six-product marketplace catalog:

   ```bash
   npm run db:seed
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000).

Run the database setup and seed commands again after cloning the repository or
when connecting a new Neon database.

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```

## API reference

### `GET /api/products`

Returns catalog cards with product pricing, the default local thumbnail,
variant summary, and the lowest available monthly EMI amount.

Example:

```json
{
  "products": [
    {
      "id": "product-id",
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

### `GET /api/products/:slug`

Returns a complete product with variant image mappings and EMI plans.

```json
{
  "id": "product-id",
  "slug": "iphone-17-pro",
  "name": "iPhone 17 Pro",
  "isNew": true,
  "description": "A high-end smartphone.",
  "images": {
    "default": "/images/iphone-17-pro-orange.jpg",
    "byVariant": {
      "orange": "/images/iphone-17-pro-orange.jpg",
      "silver": "/images/iphone-17-pro-silver.jpg",
      "deep-blue": "/images/iphone-17-pro-blue.jpg"
    }
  },
  "mrp": 134900,
  "price": 127400,
  "variants": [],
  "emiPlans": []
}
```

Unknown product slugs return `404`. Unexpected server failures return `500`.

## Marketplace data model

The marketplace is backed by three Prisma models:

- `Product`: name, category, pricing, thumbnail, and description
- `ProductVariant`: color/storage options, swatches, image paths, and price adjustments
- `EmiPlan`: tenure, monthly amount, interest rate, cashback, and zero-cost status

Product and EMI data is seeded in [`prisma/seed.ts`](./prisma/seed.ts), not
hardcoded in the marketplace UI. Product detail and confirmation screens read
their data from the API.

## Asset handling

All critical logos and product images are stored locally under `public/`.
This avoids runtime failures from remote image providers and makes the
marketplace usable in restricted or offline development environments.

When adding a product:

1. Add its image files to `public/images/`.
2. Add variant-specific paths to `prisma/seed.ts`.
3. Run `npx tsx prisma/seed.ts`.
4. Confirm the API returns valid local paths.

## Validation

Run the production build and lint checks before publishing changes:

```bash
npm run build
npm run lint
```

## Notes

- This is a frontend/product prototype; payment processing, authentication,
  eligibility underwriting, and order fulfillment are not connected to live
  financial services.
- EMI and cashback values are seeded demonstration data.
- Neon database credentials must be configured as Vercel environment variables.
