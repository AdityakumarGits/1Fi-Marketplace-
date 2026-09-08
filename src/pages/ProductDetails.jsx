import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import VariantSelector from "../components/VariantSelector";
import EmiPlanCard from "../components/EmiPlanCard";
import { LoadingState, ErrorState, FloatingChat } from "../components/States";
import { getProductById } from "../services/marketplaceApi";
export default function ProductDetails() {
  const { productId } = useParams(),
    navigate = useNavigate();
  const [product, setProduct] = useState(null),
   [variantId, setVariantId] = useState(""),
    [emiId, setEmiId] = useState(""),
    [loading, setLoading] = useState(true),
    [error, setError] = useState("");
  useEffect(() => {
    getProductById(productId)
      .then((p) => {
        if (!p) {
          setError("Product not found.");
          return;
        }
        setProduct(p);
        setVariantId(p.variants[0].id);
        setEmiId(p.emiPlans[1]?.id || p.emiPlans[0].id);
      })
      .catch(() => setError("Please try again."))
      .finally(() => setLoading(false));
  }, [productId]);
  const variant = useMemo(
    () => product?.variants.find((v) => v.id === variantId),
    [product, variantId],
  );
  const emi = useMemo(
    () => product?.emiPlans.find((e) => e.id === emiId),
    [product, emiId],
  );
  if (loading)
    return (
      <div className="app">
        <Navbar />
        <LoadingState />
      </div>
    );
  if (error || !product)
    return (
      <div className="app">
        <Navbar />
        <ErrorState message={error} />
      </div>
    );
  return (
    <div className="app">
      <Navbar />
      <main className="details-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} /> Back to Marketplace
        </button>
        <section className="details-layout">
          <div className="details-image-wrap">
            <span className="product-badge large-badge">{product.badge}</span>
            <img src={product.image} alt={product.name} />
          </div>
          <div className="details-content">
            <span className="eyebrow">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="details-description">{product.description}</p>
            <div className="price-row">
              <div>
                <small>Selected price</small>
                <strong>
                  ₹
                  {(product.price + (variant?.extraPrice || 0)).toLocaleString(
                    "en-IN",
                  )}
                </strong>
              </div>
              <span className="zero-interest">
                <Check size={16} /> 0% interest
              </span>
            </div>
            <div className="selection-block">
              <div className="selection-heading">
                <h2>Choose variant</h2>
                <span>{variant?.label}</span>
              </div>
              <VariantSelector
                variants={product.variants}
                selectedId={variantId}
                onSelect={setVariantId}
              />
            </div>
            <div className="selection-block">
              <div className="selection-heading">
                <h2>Choose EMI plan</h2>
                <span>No-cost EMI</span>
              </div>
              <div className="emi-list">
                {product.emiPlans.map((plan) => (
                  <EmiPlanCard
                    key={plan.id}
                    plan={plan}
                    selected={emiId === plan.id}
                    onSelect={() => setEmiId(plan.id)}
                  />
                ))}
              </div>
            </div>
            <div className="selected-summary">
              <div>
                <small>Your selected plan</small>
                <strong>
                  {emi?.label} • ₹{emi?.monthly.toLocaleString("en-IN")}/month
                </strong>
              </div>
              <span>0% interest</span>
            </div>
            <button className="button proceed-button">
              Proceed with selected plan <ArrowUpRight size={19} />
            </button>
            <p className="disclaimer">
              Final eligibility and terms are subject to the applicable 1Fi
              approval process.
            </p>
          </div>
        </section>
      </main>
      <FloatingChat />
    </div>
  );
}
