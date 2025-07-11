"use client";

import { useProducts } from "@/features/products";
import { ProductsList } from "@/features/products/ui/product-list";

export default function Home() {
	const { products, isLoading, error } = useProducts();

	return (
		<main className="container mx-auto px-4 py-8">
			<div className="mb-8">
				<h1 className="text-4xl font-bold text-foreground mb-2">
					Our Products
				</h1>
				<p className="text-muted-foreground text-lg">
					Discover amazing products from our collection
				</p>
			</div>

			<ProductsList products={products} isLoading={isLoading} error={error} />
		</main>
	);
}
