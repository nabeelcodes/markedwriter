import { useAtom } from 'jotai';
import { useParams } from 'react-router-dom';
import { PageTitle } from '../components/PageTitle';
import { appDataAtom, darkModeAtom } from '../store/appState';
import { cn } from '../utilities/classNameHelper';

export const MarkdownEditor = () => {
	const { id } = useParams();
	const [darkTheme] = useAtom(darkModeAtom);
	const [appData, setAppData] = useAtom(appDataAtom);
	/* Find the Post corresponding to the current page */
	const currentPost = appData?.find((post) => post.id === id);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const valueOfAppData = [...appData];
		const indexOfCurrentPost = valueOfAppData.findIndex(
			(element) => element?.id === currentPost?.id
		);
		valueOfAppData[indexOfCurrentPost].content = e?.target?.value;
		setAppData(valueOfAppData);
	};

	return (
		<section
			className={cn('font-sans text-neutral-800', {
				'text-gray-300': darkTheme
			})}
		>
			<PageTitle />

			<textarea
				className='mt-4 h-28 w-80 bg-red-100 p-2 outline-none'
				name='editor'
				autoComplete='off'
				spellCheck='true'
				placeholder='Write some Markdown...'
				aria-label='input box to enter markdown'
				value={currentPost?.content}
				onChange={handleChange}
			/>
		</section>
	);
};
