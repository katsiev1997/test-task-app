import { Button } from "@/shared/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<main className="container mx-auto px-4 py-8">
			<div className="text-center py-12">
				<div className="mb-6">
					<h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
					<h2 className="text-2xl font-semibold text-gray-900 mb-2">
						Page Not Found
					</h2>
					<p className="text-gray-600 mb-6 max-w-md mx-auto">
						The page you&apos;re looking for doesn&apos;t exist.
					</p>
				</div>

				<div className="space-y-4">
					<Link href="/">
						<Button size="lg">
							<Home className="w-4 h-4 mr-2" />
							Go Home
						</Button>
					</Link>

					<div className="text-sm text-gray-500">
						<p>Return to our homepage to continue browsing</p>
					</div>
				</div>
			</div>
		</main>
	);
}
