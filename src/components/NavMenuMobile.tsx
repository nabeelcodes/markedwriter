import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { useAtom } from 'jotai';
import { darkModeAtom } from '../store/appState';
import { cn } from '../utilities/classNameHelper';
import { NavMenuTrigger } from './NavMenuTrigger';
import { NavItemThemeToggle } from './NavItemThemeToggle';
import { NavItemAbout } from './NavItemAbout';
import { NavItemLogin } from './NavItemLogin';

export const NavMenuMobile = () => {
	const [darkTheme] = useAtom(darkModeAtom);

	return (
		<RadixDropdownMenu.Root>
			<RadixDropdownMenu.Trigger asChild>
				<NavMenuTrigger darktheme={darkTheme ? 'enabled' : 'disabled'} />
			</RadixDropdownMenu.Trigger>

			<RadixDropdownMenu.Portal>
				<RadixDropdownMenu.Content
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
							<RadixDropdownMenu.Item
								onSelect={(event) => event.preventDefault()}
								asChild
							>
								<NavItemThemeToggle />
							</RadixDropdownMenu.Item>

							<RadixDropdownMenu.Item asChild>
								<NavItemAbout />
							</RadixDropdownMenu.Item>

							<RadixDropdownMenu.Item asChild>
								<NavItemLogin />
							</RadixDropdownMenu.Item>
						</ul>
					</nav>
				</RadixDropdownMenu.Content>
			</RadixDropdownMenu.Portal>
		</RadixDropdownMenu.Root>
	);
};
