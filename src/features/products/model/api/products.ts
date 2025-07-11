import { apiClient } from "./api-client";
import type { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
	const response = await apiClient.get("products").json<Product[]>();
	return response;
};

// Server-side function for SSR
export const getProductServer = async (id: number): Promise<Product | null> => {
	try {
		const response = await apiClient.get(`products/${id}`).json<Product>();
		return response;
	} catch {
		return null;
	}
};
