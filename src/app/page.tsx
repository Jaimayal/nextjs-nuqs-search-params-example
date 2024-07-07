import ProductCard from "./_components/ProductCard";
import SearchBar from "./_components/SearchBar";
import getAllProducts from "./_requests/getAllProducts";
import { createSearchParamsCache, parseAsString } from "nuqs/server"; // Note: import from 'nuqs/server' to avoid the "use client" directive

 const searchParamsCache = createSearchParamsCache({
	q: parseAsString.withDefault(""),
});

interface HomeProps {
	searchParams: Record<string, string>;
}

export default async function Home({ searchParams }: HomeProps) {
  const parsedParams = searchParamsCache.parse(searchParams);
	const products = await getAllProducts(parsedParams.q);

	return (
		<main className="flex min-h-screen max-w-screen-xl flex-col items-center space-y-12 p-24 mx-auto">
			<h3 className="w-full text-sm font-bold text-center lg:text-6xl">
				Products
			</h3>
			<SearchBar />
			<div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] grid-rows-1 gap-4">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</main>
	);
}
