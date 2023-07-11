import { forwardRef } from 'react';
import { CmdIcon } from '../assets/CmdIconSVG';
import { theme } from '../store/theme';

type navItemShortcutsProps = {
	darkTheme: boolean;
};

export const NavItemShortcuts = forwardRef<
	HTMLLIElement,
	navItemShortcutsProps
>((props, forwardedRef) => {
	return (
		<li
			ref={forwardedRef}
			{...props}
		>
			<button className='flex items-center justify-between space-x-10'>
				<CmdIcon fill={props.darkTheme ? theme.light : undefined} />
				<span>Shortcuts</span>
			</button>
		</li>
	);
});
