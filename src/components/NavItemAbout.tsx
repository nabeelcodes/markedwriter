import { useAtom } from 'jotai';
import { forwardRef } from 'react';
import { darkModeAtom } from '../store/appState';
import { cn } from '../utilities/classNameHelper';

export const NavItemAbout = forwardRef<HTMLLIElement>((props, forwardedRef) => {
	const [darkTheme] = useAtom(darkModeAtom);

	return (
		<li
			className='list-none'
			ref={forwardedRef}
			{...props}
		>
			<button
				className={cn(
					'w-full rounded-md border-2 border-gray-800 px-4 py-1.5 text-neutral-800 md:px-3',
					{
						'border-gray-300 text-gray-300': darkTheme
					}
				)}
			>
				What's this?
			</button>
		</li>
	);
});
