import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerIcon } from '../assets/HamburgerSVG';
import { NightIcon } from '../assets/NightIconSVG';
import { CmdIcon } from '../assets/CmdIconSVG';
import { cn } from '../utilities/classNameHelper';

type navBarProps = {
	darkTheme: boolean;
};

export const NavBar = ({ darkTheme }: navBarProps) => {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button aria-labelledby='Navigation Menu trigger'>
					<HamburgerIcon darkTheme={darkTheme} />
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content
					sideOffset={10}
					align='end'
					asChild
				>
					<nav
						className={cn(
							'rounded-md border bg-white p-4 font-mabryProRegular text-gray-950 shadow-md',
							{
								'border-gray-300 bg-neutral-800 text-gray-300': darkTheme
							}
						)}
					>
						<ul className='space-y-3'>
							<DropdownMenu.Item
								asChild
								className='flex items-center justify-between space-x-10'
							>
								<li>
									<CmdIcon fill={darkTheme ? '#d1d5db' : undefined} />
									<span>Shortcuts</span>
								</li>
							</DropdownMenu.Item>

							<DropdownMenu.Item
								asChild
								className='flex items-center justify-between'
							>
								<li>
									<NightIcon fill={darkTheme ? '#d1d5db' : undefined} />
									<span>Dark</span>
								</li>
							</DropdownMenu.Item>

							<DropdownMenu.Item asChild>
								<li>
									<button
										className={cn(
											'w-full rounded-md border-2 border-gray-800 py-1.5',
											{
												'border-gray-300': darkTheme
											}
										)}
									>
										What's this?
									</button>
								</li>
							</DropdownMenu.Item>

							<DropdownMenu.Item asChild>
								<li>
									<button
										className={cn(
											'w-full rounded-md border-2 border-gray-800 bg-neutral-800 py-1.5 text-gray-100',
											{
												'border-gray-300 bg-gray-300 text-neutral-800':
													darkTheme
											}
										)}
									>
										Login
									</button>
								</li>
							</DropdownMenu.Item>
						</ul>
					</nav>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};
