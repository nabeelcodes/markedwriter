import { useAtom } from 'jotai';
import { forwardRef } from 'react';
import { darkModeAtom } from '../store/appState';
import { CmdIcon } from '../assets/CmdIconSVG';
import { theme } from '../store/theme';

export const NavItemShortcuts = forwardRef<HTMLLIElement>(
	(props, forwardedRef) => {
		const [darkTheme] = useAtom(darkModeAtom);

		return (
			<li
				className='list-none'
				ref={forwardedRef}
				{...props}
			>
				<button className='flex items-center justify-between space-x-10'>
					<CmdIcon fill={darkTheme ? theme.light : undefined} />
					<span className='md:hidden'>Shortcuts</span>
				</button>
			</li>
		);
	}
);
