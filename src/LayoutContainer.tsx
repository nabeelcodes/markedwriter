import { Header } from '@src/components/Header';

type LayoutContainerProps = {
	children: React.ReactNode;
};

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
	return (
		<div
			className='flex min-h-screen flex-col'
			aria-labelledby='App wrapper'
		>
			<Header />

			<main className='container2000 min-w-full shrink-0 grow basis-full'>
				{children}
			</main>
		</div>
	);
};
