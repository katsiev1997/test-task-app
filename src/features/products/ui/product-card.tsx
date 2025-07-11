import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/shared/ui/card";
import type { Product } from "../model/types/product";
import Image from "next/image";

interface ProductCardProps {
	product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
	return (
		<Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
			<CardHeader className="p-0">
				<div className="aspect-square overflow-hidden bg-gray-200 flex items-center justify-center">
					<Image
						src={product.images[0]}
						alt={product.title}
						width={400}
						height={400}
						className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
						onError={() => {
							console.error("Failed to load image:", product.images[0]);
						}}
					/>
				</div>
			</CardHeader>
			<CardContent className="p-4">
				<Link href={`/products/${product.id}`} className="block group">
					<h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
						{product.title}
					</h3>
				</Link>
				<p className="text-gray-600 text-sm mb-3 line-clamp-2">
					{product.description}
				</p>
				<div className="flex items-center justify-between">
					<span className="text-2xl font-bold text-green-600">
						${product.price}
					</span>
					<span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
						{product.category.name}
					</span>
				</div>
			</CardContent>
		</Card>
	);
}
