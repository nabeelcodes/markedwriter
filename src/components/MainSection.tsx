type mainSectionProps = {
	children: React.ReactNode;
};

export const MainSection = ({ children }: mainSectionProps) => {
	return (
		<div
			className='shrink-0 grow basis-full bg-white text-gray-950 dark:bg-neutral-800 dark:text-gray-300'
			aria-labelledby='Main Section wrapper'
		>
			<main className='container2000 px-5 font-sans'>{children}</main>
		</div>
	);
};
