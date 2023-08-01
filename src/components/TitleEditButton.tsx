import * as RadixDialog from '@radix-ui/react-dialog';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { appDataAtom, buttonStateAtom, darkModeAtom } from '../store/appState';
import { EditIconSVG } from '../assets/EditIconSVG';
import { cn } from '../utilities/classNameHelper';

export const TitleEditButton = () => {
	const { id } = useParams();
	const [darkTheme] = useAtom(darkModeAtom);
	const [appData, setAppData] = useAtom(appDataAtom);
	const [buttonDisabled, setButtonDisabled] = useAtom(buttonStateAtom);
	/* Find the Post corresponding to the current page */
	const currentPost = appData?.find((post) => post.id === id);
	/* Maintaining a state for the modification of Post title */
	const [valueOfTitle, setValueOfTitle] = useState(currentPost?.title);
	/* Maintaining a state for open/close of RadixDialog */
	const [openRadixDialog, setOpenRadixDialog] = useState(false);

	const handleDisableStateForRenameButton = () => {
		if (valueOfTitle !== currentPost?.title) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	};

	const handleChangeForTitleRename = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		/* Checking if Post title and edited value are same,
    If YES then disabled RENAME button */
		if (e.target.value !== currentPost?.title) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}

		setValueOfTitle(e?.target?.value);
	};

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const valueOfAppData = [...appData];
		const indexOfCurrentPost = valueOfAppData.findIndex(
			(element) => element?.id === currentPost?.id
		);
		valueOfAppData[indexOfCurrentPost].title = valueOfTitle;

		/* Setting all states */
		setAppData(valueOfAppData);
		setButtonDisabled(true);
		setOpenRadixDialog(false);
	};

	return (
		<RadixDialog.Root
			open={openRadixDialog}
			onOpenChange={setOpenRadixDialog}
		>
			<RadixDialog.Trigger asChild>
				<button
					className={cn('absolute right-0 top-0 m-2 rounded border p-2', {
						'border-neutral-600': darkTheme
					})}
					onClick={() => handleDisableStateForRenameButton()}
				>
					<EditIconSVG />
				</button>
			</RadixDialog.Trigger>

			<RadixDialog.Portal>
				<RadixDialog.Overlay className='fixed inset-0 backdrop-blur-[2px] data-[state=open]:animate-overlayShow' />

				<RadixDialog.Content
					className={cn(
						'fixed left-[50%] top-[50%] w-max max-w-[540px] translate-x-[-50%] translate-y-[-50%] rounded-lg border border-gray-100 bg-white p-6 text-neutral-800 shadow-lg focus:outline-none data-[state=open]:animate-contentShow',
						{
							'bg-neutral-800 text-gray-300': darkTheme
						}
					)}
				>
					<RadixDialog.Title className='mb-6 text-center text-xl font-bold'>
						Rename File
					</RadixDialog.Title>

					<form onSubmit={handleFormSubmit}>
						<input
							className={cn(
								'w-[300px] min-w-max rounded border bg-white px-4 py-2 outline-none focus:border-gray-500 md:w-[500px]',
								{
									'bg-neutral-800 focus:border-gray-100': darkTheme
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

						<div className='mt-4 flex items-center justify-between gap-4 md:w-[500px]'>
							<RadixDialog.Close asChild>
								<button
									className='w-full rounded border py-2 font-bold'
									aria-label='Close Button'
									type='button'
									onClick={() => setValueOfTitle(currentPost?.title)}
								>
									Cancel
								</button>
							</RadixDialog.Close>

							<button
								className={cn(
									'w-full rounded border bg-neutral-800 py-2 font-bold text-gray-300 disabled:bg-neutral-500',
									{
										'bg-gray-300 text-neutral-800': darkTheme
									}
								)}
								type='submit'
								aria-label='Rename Button'
								disabled={buttonDisabled}
							>
								Rename
							</button>
						</div>
					</form>
				</RadixDialog.Content>
			</RadixDialog.Portal>
		</RadixDialog.Root>
	);
};
