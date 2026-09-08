import { products } from "../data/products";
const wait = (ms=450) => new Promise(resolve => setTimeout(resolve, ms));
export async function getProducts(){ await wait(); return products; }
export async function getProductById(id){ await wait(); return products.find(p => p.id === id) || null; }
