import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Shop from "./pages/Shop";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import PlaceholderPage from "./pages/PlaceholderPage";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Shop />}
      />

      <Route
        path="/shop"
        element={<Shop />}
      />

      <Route
        path="/marketplace"
        element={<Marketplace />}
      />

      <Route
        path="/product/:productId"
        element={<ProductDetails />}
      />

      <Route
        path="/top-brands"
        element={
          <PlaceholderPage title="Top Brands" />
        }
      />

      <Route
        path="/nearby-stores"
        element={
          <PlaceholderPage title="Nearby Stores" />
        }
      />

      <Route
        path="*"
        element={
          <Navigate
            to="/shop"
            replace
          />
        }
      />
    </Routes>
  );
}