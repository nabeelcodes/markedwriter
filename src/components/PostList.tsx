import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useAtom } from 'jotai';
import { appDataAtom, darkModeAtom } from '../store/appState';
import { cn } from '../utilities/classNameHelper';

export const PostList = () => {
	const [darkTheme] = useAtom(darkModeAtom);
	const [appData, setAppData] = useAtom(appDataAtom);

	/* Reversing `appData` array to render posts in correct order */
	const sortedArray = useMemo(() => {
		const clonedArray = [...appData];
		return clonedArray.reverse();
	}, [appData]);

	return (
		<ul className='mt-6 flex flex-col gap-y-4 rounded-lg'>
			<button
				className='rounded-md bg-red-500 p-3 text-gray-100'
				onClick={() => {
					setAppData([]);
				}}
			>
				Delete All Posts
			</button>

			{sortedArray.map(({ id, title, date }) => (
				<Link
					to={`/${id}`}
					key={id}
				>
					<li
						className={cn(
							'rounded-lg border border-gray-200 p-4 text-neutral-800',
							{
								'border-neutral-600 text-gray-300': darkTheme
							}
						)}
					>
						<h2 className='text-lg font-bold'>{title}</h2>
						<p className='mt-1 text-sm opacity-70'>{date}</p>
					</li>
				</Link>
			))}
		</ul>
	);
};
