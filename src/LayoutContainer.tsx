import { Header } from './components/Header';

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

			<main className='container2000 min-w-full shrink-0 grow basis-full font-mabryProRegular'>
				{children}
			</main>
		</div>
	);
};
