import { Header } from './components/Header';
import { MainSection } from './components/MainSection';

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

			<MainSection>{children}</MainSection>
		</div>
	);
};
