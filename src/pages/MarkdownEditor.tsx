import { useAtom } from 'jotai';
import { useParams } from 'react-router-dom';
import { appDataAtom } from '../store/appState';

export const MarkdownEditor = () => {
	const { id } = useParams();
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
		<>
			<h1>Markdown Editor Page for {currentPost?.id}</h1>
			<textarea
				className='mt-4 h-28 w-80 bg-red-100 p-2 outline-none'
				autoFocus
				name='editor'
				autoComplete='off'
				spellCheck='true'
				placeholder='Write some Markdown...'
				aria-label='input box to enter markdown'
				value={currentPost?.content}
				onChange={handleChange}
			/>
		</>
	);
};
