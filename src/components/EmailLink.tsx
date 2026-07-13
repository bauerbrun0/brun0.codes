export function EmailLink() {
	const user = "bauerbruno";
	const domain = "protonmail";
	const tld = "com";

	return (
		<a
			className="w-fit font-medium underline text-gray-800 dark:text-gray-200 dark:hover:text-gray-400 hover:text-gray-600"
			href={`mailto:${user}@${domain}.${tld}`}
			target="_blank"
			rel="noopener"
		>
			{`${user} [at] ${domain} [dot] ${tld}`}
		</a>
	);
}
