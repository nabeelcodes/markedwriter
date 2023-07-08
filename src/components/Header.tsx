import { AppLogoDark } from '@src/assets/AppLogoDarkSVG';
import { AppLogoLight } from '@src/assets/AppLogoLightSVG';
import { NavBar } from '@src/components/NavBar';

export const Header = () => {
	// check global state for darkTheme
	const darkTheme = 'false';

	return (
		<div
			className='border-b border-gray-200 px-5'
			aria-labelledby='Header wrapper'
		>
			<header className='container2000 relative flex h-16 items-center justify-between'>
				<div
					className='cursor-pointer'
					aria-labelledby='Website Logo container'
				>
					{darkTheme === 'false' ? <AppLogoDark /> : <AppLogoLight />}
				</div>

				<NavBar />
			</header>
		</div>
	);
};
