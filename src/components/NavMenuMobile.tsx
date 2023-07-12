import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useAtom } from 'jotai';
import { darkModeAtom } from '../store/appState';
import { cn } from '../utilities/classNameHelper';
import { NavMenuTrigger } from './NavMenuTrigger';
import { NavItemShortcuts } from './NavItemShortcuts';
import { NavItemThemeToggle } from './NavItemThemeToggle';
import { NavItemAbout } from './NavItemAbout';
import { NavItemLogin } from './NavItemLogin';

export const NavMenuMobile = () => {
	const [darkTheme] = useAtom(darkModeAtom);

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<NavMenuTrigger darktheme={darkTheme ? 'enabled' : 'disabled'} />
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
							<DropdownMenu.Item asChild>
								<NavItemShortcuts />
							</DropdownMenu.Item>

							<DropdownMenu.Item
								onSelect={(event) => event.preventDefault()}
								asChild
							>
								<NavItemThemeToggle />
							</DropdownMenu.Item>

							<DropdownMenu.Item asChild>
								<NavItemAbout />
							</DropdownMenu.Item>

							<DropdownMenu.Item asChild>
								<NavItemLogin />
							</DropdownMenu.Item>
						</ul>
					</nav>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};
