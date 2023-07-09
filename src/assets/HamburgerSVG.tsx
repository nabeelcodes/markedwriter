import { cn } from '../utilities/classNameHelper';

type hamburgerIconProps = {
	darkTheme: boolean;
};

export const HamburgerIcon = ({ darkTheme }: hamburgerIconProps) => {
	return (
		<svg
			width='36'
			height='23'
			viewBox='0 0 36 23'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={cn('stroke-neutral-800', {
				'stroke-gray-300': darkTheme
			})}
		>
			<path
				d='M3 3H32.9997'
				strokeWidth='5'
				strokeLinecap='round'
			/>
			<path
				d='M19.9233 19.923L33.0001 19.923'
				strokeWidth='5'
				strokeLinecap='round'
			/>
			<path
				d='M11.4609 11.4615L32.9992 11.4615'
				strokeWidth='5'
				strokeLinecap='round'
			/>
		</svg>
	);
};
