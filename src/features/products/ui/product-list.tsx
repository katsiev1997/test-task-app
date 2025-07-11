import { Product } from "../model/types/product";
import { ProductCard } from "./product-card";
import { Skeleton } from "@/shared/ui/skeleton";

type Props = {
	products: Product[] | null;
	isLoading: boolean;
	error: string | null;
};

export function ProductsList({ products, isLoading, error }: Props) {
	if (isLoading) {
		return (
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{Array.from({ length: 8 }).map((_, index) => (
					<div key={index} className="space-y-4">
						<Skeleton className="aspect-square w-full" />
						<div className="space-y-2">
							<Skeleton className="h-4 w-3/4" />
							<Skeleton className="h-4 w-1/2" />
							<Skeleton className="h-6 w-1/3" />
						</div>
					</div>
				))}
			</div>
		);
	}

	if (error) {
		return (
			<div className="text-center py-12">
				<h2 className="text-xl font-semibold text-destructive mb-2">
					Error loading products
				</h2>
				<p className="text-muted-foreground">Please try again later.</p>
			</div>
		);
	}

	if (!products || products.length === 0) {
		return (
			<div className="text-center py-12">
				<h2 className="text-xl font-semibold text-muted-foreground mb-2">
					No products found
				</h2>
				<p className="text-muted-foreground">
					There are no products available at the moment.
				</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}
