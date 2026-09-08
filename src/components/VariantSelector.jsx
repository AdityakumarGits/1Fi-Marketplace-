import React from "react";

export default function VariantSelector({
  variants,
  selectedId,
  onSelect,
}) {
  return (
    <div className="variant-list">
      {variants.map((variant) => (
        <button
          key={variant.id}
          type="button"
          className={`variant ${
            selectedId === variant.id
              ? "selected"
              : ""
          }`}
          onClick={() => onSelect(variant.id)}
        >
          {variant.label}
        </button>
      ))}
    </div>
  );
}