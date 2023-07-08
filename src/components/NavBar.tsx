import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerIcon } from '@src/assets/HamburgerSVG';
import { CmdIcon } from '@src/assets/CmdIconSVG';
import { NightIcon } from '@src/assets/NightIconSVG';

export const NavBar = () => {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button aria-labelledby='Navigation Menu trigger'>
					<HamburgerIcon />
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content
					sideOffset={10}
					align='end'
					asChild
				>
					<nav className='rounded-md border bg-white p-4 shadow-md'>
						<ul className='flex flex-col gap-3'>
							<DropdownMenu.Item
								asChild
								className='flex items-center justify-between'
							>
								<li>
									<CmdIcon />
									<span className='ml-8 font-mabryProRegular text-black/80'>
										Shortcuts
									</span>
								</li>
							</DropdownMenu.Item>

							<DropdownMenu.Item
								asChild
								className='flex items-center justify-between'
							>
								<li>
									<NightIcon />
									<span className='font-mabryProRegular text-black/80'>
										Dark
									</span>
								</li>
							</DropdownMenu.Item>

							<DropdownMenu.Item asChild>
								<li>
									<button className='w-full rounded-md border-2 border-black/70  py-1.5 font-mabryProRegular text-black/80'>
										What's this?
									</button>
								</li>
							</DropdownMenu.Item>

							<DropdownMenu.Item asChild>
								<li>
									<button className='w-full rounded-md border-2 border-black/80 bg-black/80 py-1.5  font-mabryProRegular text-gray-100'>
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
