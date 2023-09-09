import { NavItemShortcuts } from "./NavItemShortcuts";
import { NavItemThemeToggle } from "./NavItemThemeToggle";
import { NavItemAbout } from "./NavItemAbout";
import { NavItemLogin } from "./NavItemLogin";

export const NavMenuDesktop = () => {
  return (
    <nav className="hidden md:block">
      <ul className="md:flex md:items-center md:justify-between md:gap-5">
        <NavItemShortcuts />
        <NavItemThemeToggle />
        <NavItemAbout />
        <NavItemLogin />
      </ul>
    </nav>
  );
};
