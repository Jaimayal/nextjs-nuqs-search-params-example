"use client";

import { parseAsString, useQueryState } from "nuqs";

export default function SearchBar() {
	const [search, setSearch] = useQueryState(
		"q",
		parseAsString
			.withOptions({ shallow: false }) // Previous options object goes here
			.withDefault("") // Added default value
	);

	return (
		<input
			type="text"
			value={search} // Replaced previous falsy check `search || ""` since we have default value now
			onChange={(e) => setSearch(e.target.value)}
			placeholder="Search products..."
			className="w-full p-2 border border-gray-300 rounded-md"
		/>
	);
}
