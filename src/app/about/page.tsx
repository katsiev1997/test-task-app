import { Badge } from "@/shared/ui/badge";

export const metadata = {
	title: "About Us - Appricot",
	description:
		"Learn more about Appricot - our mission, values, and the team behind our amazing products.",
};

export default function AboutPage() {
	// Получаем текущее время генерации страницы
	const generationTime = new Date().toLocaleString("ru-RU", {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		timeZone: "Europe/Moscow",
	});

	return (
		<main className="container mx-auto px-4 py-8">
			{/* Hero Section */}
			<div className="text-center mb-16">
				<Badge variant="secondary" className="mb-4">
					About Appricot
				</Badge>
				<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
					We&apos;re Building the Future of
					<span className="text-blue-600"> Shopping</span>
				</h1>
				<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
					At Appricot, we believe that great products should be accessible to
					everyone. Our mission is to curate and deliver exceptional products
					that enhance your daily life.
				</p>
				<div className="mt-4 text-sm text-muted-foreground">
					Страница сгенерирована: {generationTime}
				</div>
			</div>
		</main>
	);
}
