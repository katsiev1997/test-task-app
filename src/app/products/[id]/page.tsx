import { notFound } from "next/navigation";
import { getProductServer } from "@/features/products/model/api/products";
import { Button } from "@/shared/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

interface ProductPageProps {
	params: Promise<{ id: string }>;
}

export async function generateMetadata({
	params,
}: ProductPageProps): Promise<Metadata> {
	const { id } = await params;
	const product = await getProductServer(Number(id));

	if (!product) {
		return {
			title: "Product Not Found",
			description: "The requested product could not be found.",
		};
	}

	return {
		title: `${product.title} - Appricot`,
		description: product.description,
		openGraph: {
			title: product.title,
			description: product.description,
			images: product.images,
		},
	};
}

export default async function ProductPage({ params }: ProductPageProps) {
	const { id } = await params;
	const product = await getProductServer(Number(id));

	if (!product) {
		notFound();
	}

	return (
		<main className="container mx-auto px-4 py-8">
			<div className="mb-6">
				<Link href="/">
					<Button variant="ghost" className="mb-4">
						<ArrowLeft className="w-4 h-4 mr-2" />
						Back to Products
					</Button>
				</Link>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Product Images */}
				<div className="space-y-4">
					<div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
						<Image
							src={product.images[0]}
							alt={product.title}
							width={600}
							height={600}
							className="w-full h-full object-cover"
							priority
						/>
					</div>
					{product.images.length > 1 && (
						<div className="grid grid-cols-4 gap-2">
							{product.images.slice(1).map((image, index) => (
								<div
									key={index}
									className="aspect-square overflow-hidden rounded-lg"
								>
									<Image
										src={image}
										alt={`${product.title} ${index + 2}`}
										width={150}
										height={150}
										className="w-full h-full object-cover hover:scale-105 transition-transform duration-200 cursor-pointer"
									/>
								</div>
							))}
						</div>
					)}
				</div>

				{/* Product Details */}
				<div className="space-y-6">
					<div>
						<h1 className="text-3xl font-bold text-gray-900 mb-2">
							{product.title}
						</h1>
						<div className="flex items-center gap-4 mb-4">
							<span className="text-3xl font-bold text-green-600">
								${product.price}
							</span>
							<span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
								{product.category.name}
							</span>
						</div>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">
							Description
						</h3>
						<p className="text-gray-600 leading-relaxed">
							{product.description}
						</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">
							Category
						</h3>
						<p className="text-gray-600">{product.category.name}</p>
					</div>

					<div className="pt-6">
						<Button size="lg" className="w-full">
							Add to Cart
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
