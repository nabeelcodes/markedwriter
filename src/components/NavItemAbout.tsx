import { forwardRef } from 'react';

export const NavItemAbout = forwardRef<HTMLLIElement>((props, forwardedRef) => {
	return (
		<li
			className='list-none'
			ref={forwardedRef}
			{...props}
		>
			<button className='w-full rounded-md border-2 border-gray-800 px-4 py-1.5 text-neutral-800 dark:border-gray-300 dark:text-gray-300 md:px-3'>
				What's this?
			</button>
		</li>
	);
});
