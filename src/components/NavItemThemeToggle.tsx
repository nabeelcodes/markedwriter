import { forwardRef } from 'react';
import { useAtom } from 'jotai';
import { darkModeAtom } from '../store/appState';
import { DayIcon } from '../assets/DayIconSVG';
import { NightIcon } from '../assets/NightIconSVG';

export const NavItemThemeToggle = forwardRef<HTMLLIElement>(
	(props, forwardedRef) => {
		const [darkTheme, setDarkTheme] = useAtom(darkModeAtom);

		return (
			<li
				ref={forwardedRef}
				{...props}
			>
				<button
					className='flex w-full items-center justify-between'
					onClick={() => {
						setDarkTheme((prevState: boolean) => !prevState);
					}}
				>
					{darkTheme ? <DayIcon /> : <NightIcon />}
					<span>{darkTheme ? `Light` : `Dark`}</span>
				</button>
			</li>
		);
	}
);
