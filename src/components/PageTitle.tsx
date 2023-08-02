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
	const titleToDisplay = currentPost?.title;

	return (
		<article
			className={cn(
				'mt-4 flex items-center justify-between rounded border border-gray-200 py-1 pl-4 text-lg font-bold xl:fixed xl:left-1/2 xl:top-0 xl:mt-[0.55rem] xl:w-[28rem] xl:max-w-lg xl:-translate-x-1/2 xl:py-0',
				{
					'border-neutral-600': darkTheme
				}
			)}
		>
			<span className='overflow-x-auto whitespace-nowrap'>
				{titleToDisplay}
			</span>

			<TitleEditButton />
		</article>
	);
};
