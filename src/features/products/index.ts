// shared
export { ProductCard } from "./ui/product-card";
export { ProductsList } from "./ui/product-list";

// Hooks
export { useProducts } from "./model/hooks/use-products";

// Types
export type {
	Product,
	Category,
	ProductsResponse,
} from "./model/types/product";

// API
export { getProducts, getProductServer } from "./model/api/products";
