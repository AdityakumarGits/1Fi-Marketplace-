import { ArrowUpRight, MapPin, Store, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FloatingChat } from "../components/States";
const options=[
 {title:"Top Brands",description:"Explore products from leading brands.",icon:Sparkles,path:"/top-brands"},
 {title:"Nearby Stores",description:"Find participating stores around you.",icon:MapPin,path:"/nearby-stores"},
 {title:"1Fi Marketplace",description:"Browse products and choose an EMI plan.",icon:Store,path:"/marketplace",featured:true}
];
export default function Shop(){return <div className="app"><Navbar/><main className="shop-page"><section className="shop-intro"><span className="eyebrow">Shop</span><h1>Choose how you want to<span> shop with 1Fi.</span></h1><p>Browse products, discover offers and choose a payment plan backed by your mutual fund investments.</p></section><section className="shop-options">{options.map(o=>{const Icon=o.icon;return <Link key={o.title} to={o.path} className={`shop-option ${o.featured?"featured":""}`}><div className="option-icon"><Icon size={24}/></div><div><h2>{o.title}</h2><p>{o.description}</p></div><ArrowUpRight className="option-arrow" size={22}/></Link>})}</section></main><FloatingChat/></div>}
