import ProductCard from "./ProductCard";
export default function MarketplaceProductGrid({products}){return <div className="marketplace-grid">{products.map(p=><ProductCard key={p.id} product={p}/>)}</div>}
