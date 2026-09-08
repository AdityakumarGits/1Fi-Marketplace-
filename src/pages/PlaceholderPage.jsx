import React from "react";
import Navbar from "../components/Navbar";

export default function PlaceholderPage({ title }) {
  return (
    <div className="app">
      <Navbar />

      <main className="placeholder-page">
        <span className="eyebrow">Shop</span>

        <h1>{title}</h1>

        <p>
          No implementation is required for this section.
        </p>
      </main>
    </div>
  );
}