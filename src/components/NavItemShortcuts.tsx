import * as RadixDialog from '@radix-ui/react-dialog';
import { useAtom } from 'jotai';
import { darkModeAtom } from '../store/appState';
import { theme } from '../store/theme';
import { CloseIcon } from '../assets/CloseIconSVG';
import { CmdIcon } from '../assets/CmdIconSVG';
import { cn } from '../utilities/classNameHelper';

export const NavItemShortcuts = () => {
	const [darkTheme] = useAtom(darkModeAtom);

	return (
		<RadixDialog.Root>
			<RadixDialog.Trigger asChild>
				<button>
					<CmdIcon fill={darkTheme ? theme.light : undefined} />
				</button>
			</RadixDialog.Trigger>

			<RadixDialog.Portal>
				<RadixDialog.Overlay className='fixed inset-0 backdrop-blur-[2px] data-[state=open]:animate-overlayShow' />

				<RadixDialog.Content
					className={cn(
						'fixed left-[50%] top-[50%] w-max max-w-[540px] translate-x-[-50%] translate-y-[-50%] rounded-lg border border-gray-100 bg-white px-6 py-6 text-neutral-800 shadow-lg focus:outline-none data-[state=open]:animate-contentShow',
						{
							'bg-neutral-800 text-gray-300': darkTheme
						}
					)}
				>
					<RadixDialog.Title className='mb-4 border-b-2 pb-2 text-2xl font-bold'>
						Keyboard Shortcuts
					</RadixDialog.Title>

					<RadixDialog.Description className='font-sans'>
						To increase your productivity when working with markdown, you can
						use the following keyboard shortcuts by pressing{' '}
						<code className='rounded border px-1 font-mono'>Cmd + Ctrl</code> on
						a Mac or{' '}
						<code className='rounded border px-1 font-mono'>Alt + Ctrl</code> on
						Windows :
						<ul className='list-disc p-4 pb-0'>
							{[...Array(8)].map((_, i) => (
								<li
									key={i}
									className='mb-2'
								>
									<code className='rounded border px-1 font-mono'>t</code> :
									insert a table
								</li>
							))}
						</ul>
					</RadixDialog.Description>

					<RadixDialog.Close asChild>
						<button
							aria-label='Close'
							className='absolute right-4 top-4 opacity-70'
						>
							<CloseIcon />
						</button>
					</RadixDialog.Close>
				</RadixDialog.Content>
			</RadixDialog.Portal>
		</RadixDialog.Root>
	);
};
