import { Close } from '@radix-ui/react-dialog';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { appDataAtom, dialogStateAtom } from '../store/appState';
import { cn } from '../utilities/classNameHelper';

type titleInputProps = {
	currentPageTitle: string | undefined;
	currentPageId: string | undefined;
};

export const TitleInput = ({
	currentPageTitle,
	currentPageId
}: titleInputProps) => {
	const [appData, setAppData] = useAtom(appDataAtom);
	const [, setOpenRadixDialog] = useAtom(dialogStateAtom);
	/* Maintaining a local state for the modification of
	Post title */
	const [valueOfTitle, setValueOfTitle] = useState(currentPageTitle);
	/* Maintaining a local state to display error in case
	of empty/blank title value */
	const [blankTitle, setBlankTitle] = useState(false);
	/* Maintaining a local state to enable/disable the
	form submit button(RENAME Button) */
	const [buttonDisabled, setButtonDisabled] = useState(true);

	const handleChangeForTitleRename = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const updatedTitle = e?.target?.value;
		const updatedTitleIsEmpty = updatedTitle.trim() === '';
		/* Checking if Current Page Title and edited value 
		are same OR updated Title is empty, If YES then 
		disabling the RENAME button */
		if (updatedTitle === currentPageTitle || updatedTitleIsEmpty) {
			setButtonDisabled(true);
		} else {
			setButtonDisabled(false);
		}

		/* Checking if user has input only spaces or empty
    title value */
		if (updatedTitleIsEmpty) {
			setBlankTitle(true);
		} else {
			setBlankTitle(false);
		}

		setValueOfTitle(updatedTitle);
	};

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const valueOfAppData = [...appData];
		const indexOfCurrentPost = valueOfAppData.findIndex(
			(element) => element?.id === currentPageId
		);
		/* Checking for both values to NOT be undefined */
		if (valueOfAppData[indexOfCurrentPost].title && valueOfTitle) {
			valueOfAppData[indexOfCurrentPost].title = valueOfTitle;
		}

		/* Setting all states */
		setAppData(valueOfAppData);
		setButtonDisabled(true);
		setOpenRadixDialog(false);
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<input
				className={cn(
					'w-[300px] min-w-max rounded border bg-white px-4 py-2 outline-none focus:border-gray-500 md:w-[500px]',
					{
						'border-red-600 focus:border-red-600': blankTitle
					}
				)}
				autoFocus
				id='title'
				name='title'
				type='text'
				aria-label='input box to rename file title'
				value={valueOfTitle}
				onChange={handleChangeForTitleRename}
			/>

			<span
				className={cn('mt-1 block text-xs font-bold text-red-500 opacity-0', {
					'opacity-100': blankTitle
				})}
			>
				* Title cannot be empty or only spaces
			</span>

			<div className='mt-2 flex items-center justify-between gap-4 md:w-[500px]'>
				<Close asChild>
					<button
						className='w-full rounded border py-2 font-bold'
						aria-label='Close Button'
						type='button'
						onClick={() => setValueOfTitle(currentPageTitle)}
					>
						Cancel
					</button>
				</Close>

				<button
					className='w-full rounded border bg-neutral-800 py-2 font-bold text-gray-300 disabled:bg-neutral-500 dark:bg-gray-300 dark:text-neutral-800'
					type='submit'
					aria-label='Rename Button'
					disabled={buttonDisabled}
				>
					Rename
				</button>
			</div>
		</form>
	);
};
