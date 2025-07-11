import { Button } from "@/shared/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProductNotFound() {
	return (
		<main className="container mx-auto px-4 py-8">
			<div className="text-center py-12">
				<div className="mb-6">
					<h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
					<h2 className="text-2xl font-semibold text-gray-900 mb-2">
						Product Not Found
					</h2>
					<p className="text-gray-600 mb-6 max-w-md mx-auto">
						The product you&apos;re looking for doesn&apos;t exist or has been
						removed.
					</p>
				</div>

				<div className="space-y-4">
					<Link href="/">
						<Button size="lg">
							<ArrowLeft className="w-4 h-4 mr-2" />
							Back to Products
						</Button>
					</Link>

					<div className="text-sm text-gray-500">
						<p>Try browsing our other products instead</p>
					</div>
				</div>
			</div>
		</main>
	);
}
