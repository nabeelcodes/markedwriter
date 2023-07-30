import { useAtom } from 'jotai';
import { darkModeAtom } from '../store/appState';
import { cn } from '../utilities/classNameHelper';

type mainSectionProps = {
	children: React.ReactNode;
};

export const MainSection = ({ children }: mainSectionProps) => {
	const [darkTheme] = useAtom(darkModeAtom);

	return (
		<div
			className={cn('shrink-0 grow basis-full bg-white text-gray-950', {
				'bg-neutral-800 text-gray-300': darkTheme
			})}
			aria-labelledby='Main Section wrapper'
		>
			<main className='container2000 px-5 font-sans'>{children}</main>
		</div>
	);
};
