import { useAtom } from 'jotai';
import { darkModeAtom } from '../store/appState';
import { AppLogoDark } from '../assets/AppLogoDarkSVG';
import { AppLogoLight } from '../assets/AppLogoLightSVG';
import { NavBar } from './NavBar';
import { cn } from '../utilities/classNameHelper';

export const Header = () => {
	// check global state for darkTheme
	const [darkTheme] = useAtom(darkModeAtom);

	return (
		<div
			className={cn('border-b border-gray-200 bg-white px-5', {
				'border-neutral-600 bg-neutral-800': darkTheme
			})}
			aria-labelledby='Header wrapper'
		>
			<header className='container2000 relative flex h-16 items-center justify-between'>
				<div
					className='cursor-pointer'
					aria-labelledby='Website Logo container'
				>
					{!darkTheme ? <AppLogoDark /> : <AppLogoLight />}
				</div>

				<NavBar />
			</header>
		</div>
	);
};
