import React from "react";
import ProductCard from "./ProductCard";

export default function MarketplaceProductGrid({ products }) {
  return (
    <div className="marketplace-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}