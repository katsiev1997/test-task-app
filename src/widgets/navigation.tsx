import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { ShoppingBag, Users } from "lucide-react";
import { ThemeToggle } from "@/features/theme-toggle/theme-toggle";

export function Navigation() {
	return (
		<nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<Link href="/" className="flex items-center space-x-2">
						<ShoppingBag className="w-6 h-6 text-blue-600" />
						<span className="text-xl font-bold">Appricot</span>
					</Link>

					<div className="flex items-center space-x-4">
						<Link href="/">
							<Button variant="ghost">Products</Button>
						</Link>
						<Link href="/about">
							<Button variant="ghost">
								<Users className="w-4 h-4 mr-2" />
								About
							</Button>
						</Link>
						<ThemeToggle />
					</div>
				</div>
			</div>
		</nav>
	);
}
