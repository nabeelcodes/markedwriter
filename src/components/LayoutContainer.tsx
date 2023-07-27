import { Header } from './Header';
import { MainSection } from './MainSection';

type LayoutContainerProps = {
	children: React.ReactNode;
};

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
	return (
		<div
			className='relative flex min-h-screen flex-col'
			aria-labelledby='App wrapper'
		>
			<Header />

			<MainSection>{children}</MainSection>
		</div>
	);
};
