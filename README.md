# 1Fi Marketplace Assignment

Beginner-friendly, modular React/Vite frontend implementation based on the supplied 1Fi assignment and reference screenshots.

## Included
- Shop page with Top Brands, Nearby Stores and 1Fi Marketplace
- 1Fi-style light/purple visual theme
- Marketplace hero, Featured Products, Best Sellers, Best Deals
- Product listing and product details
- Variant selection
- EMI plan selection
- Proceed CTA
- Mock API/data service
- Loading and error states
- Responsive CSS

## Run
npm install
npm run dev

## Build
npm run build

## Structure
src/components   reusable UI
src/data         mock product data
src/pages        screens/routes
src/services     mock API layer
src/styles       global responsive CSS

Product and EMI data is separated from UI components so a real backend can replace the mock service later.
