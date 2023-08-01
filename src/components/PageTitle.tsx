import { useParams } from 'react-router-dom';
import { useAtom } from 'jotai';
import { appDataAtom, darkModeAtom } from '../store/appState';
import { TitleEditButton } from './TitleEditButton';
import { cn } from '../utilities/classNameHelper';

export const PageTitle = () => {
	const { id } = useParams();
	const [darkTheme] = useAtom(darkModeAtom);
	const [appData] = useAtom(appDataAtom);

	/* Find the Post corresponding to the current page */
	const currentPost = appData?.find((post) => post.id === id);

	return (
		<article className='relative'>
			<div
				className={cn(
					'mt-4 rounded border border-gray-200 px-4 py-3 text-lg font-bold',
					{
						'border-neutral-600': darkTheme
					}
				)}
			>
				{currentPost?.title}
			</div>

			<TitleEditButton />
		</article>
	);
};
