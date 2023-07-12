import { useAtom } from 'jotai';
import { forwardRef } from 'react';
import { darkModeAtom } from '../store/appState';
import { cn } from '../utilities/classNameHelper';

export const NavItemLogin = forwardRef<HTMLLIElement>((props, forwardedRef) => {
	const [darkTheme] = useAtom(darkModeAtom);

	return (
		<li
			className='list-none'
			ref={forwardedRef}
			{...props}
		>
			<button
				className={cn(
					'w-full rounded-md border-2 border-gray-800 bg-neutral-800 py-1.5 text-gray-100 md:px-9',
					{
						'border-gray-300 bg-gray-300 text-neutral-800': darkTheme
					}
				)}
			>
				Login
			</button>
		</li>
	);
});
