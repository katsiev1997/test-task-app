"use client";

import { useState, useEffect } from "react";
import { getProducts } from "../api/products";
import type { Product } from "../types/product";

export const useProducts = () => {
	const [products, setProducts] = useState<Product[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchProducts = async () => {
		try {
			setIsLoading(true);
			setError(null);
			const data = await getProducts();
			setProducts(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to fetch products");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return {
		products,
		isLoading,
		error,
		refetch: fetchProducts,
	};
};
