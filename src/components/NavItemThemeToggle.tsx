import { useAtom } from 'jotai';
import { forwardRef } from 'react';
import { DayIcon } from '../assets/DayIconSVG';
import { NightIcon } from '../assets/NightIconSVG';
import { darkModeAtom } from '../store/appState';

export const NavItemThemeToggle = forwardRef<HTMLLIElement>(
	(props, forwardedRef) => {
		const htmlTagCLasslist = document.documentElement.classList;
		const [darkTheme, setDarkTheme] = useAtom(darkModeAtom);

		const handleDarkMode = () => {
			if (htmlTagCLasslist.contains('light')) {
				htmlTagCLasslist.add('dark');
				htmlTagCLasslist.remove('light');
				setDarkTheme((prevState: boolean) => !prevState);
			} else {
				htmlTagCLasslist.remove('dark');
				htmlTagCLasslist.add('light');
				setDarkTheme((prevState: boolean) => !prevState);
			}
		};

		return (
			<li
				className='list-none'
				ref={forwardedRef}
				{...props}
			>
				<button
					className='flex w-full items-center justify-between'
					onClick={handleDarkMode}
				>
					{darkTheme ? <DayIcon /> : <NightIcon />}
					<span className='md:hidden'>{darkTheme ? 'Light' : 'Dark'}</span>
				</button>
			</li>
		);
	}
);
