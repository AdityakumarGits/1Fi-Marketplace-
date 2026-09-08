import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card"
    >
      <div>
        <span className="product-badge">
          {product.badge}
        </span>

        <h3>{product.name}</h3>

        <p>{product.emiText}</p>

        <strong>
          ₹{product.price.toLocaleString("en-IN")}
        </strong>
      </div>

      <div className="product-card-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <span className="card-arrow">
        <ArrowUpRight size={17} />
      </span>
    </Link>
  );
}