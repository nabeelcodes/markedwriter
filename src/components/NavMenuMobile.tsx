import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { NavMenuTrigger } from "./NavMenuTrigger";
import { NavItemThemeToggle } from "./NavItemThemeToggle";
import { NavItemAbout } from "./NavItemAbout";
import { NavItemLogin } from "./NavItemLogin";

export const NavMenuMobile = () => {
  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger asChild>
        <NavMenuTrigger />
      </RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content sideOffset={10} align="end" asChild>
          <nav className="rounded-md border bg-white p-4 font-sans text-gray-950 shadow-md dark:border-gray-300 dark:bg-neutral-800 dark:text-gray-300">
            <ul className="space-y-3">
              <RadixDropdownMenu.Item
                onSelect={(event) => event.preventDefault()}
                asChild>
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
