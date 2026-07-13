export function AnimatedUnderline({
	children,
}: {
	children?: React.ReactNode;
}) {
	return (
		<div
			className="bg-bottom-left bg-linear-to-r from-black to-black dark:from-white dark:to-white bg-size-[0%_2px]
        bg-no-repeat group-hover:bg-size-[100%_2px] transition-[background-size] duration-250 ease-out pb-1"
		>
			{children}
		</div>
	);
}
