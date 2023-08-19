import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { themeAtom } from "../store/appState";
import { AppLogoDark } from "../assets/AppLogoDarkSVG";
import { AppLogoLight } from "../assets/AppLogoLightSVG";
import { NavBar } from "./NavBar";

export const Header = () => {
  const [appTheme] = useAtom(themeAtom);

  return (
    <div
      className="md:frosted-glass-bg sticky top-0 border-b border-gray-200 px-5 dark:border-neutral-600"
      aria-label="Header wrapper">
      <header className="container2000 relative flex h-16 items-center justify-between">
        <Link to="/" aria-label="Website logo">
          {appTheme === "dark" ? <AppLogoLight /> : <AppLogoDark />}
        </Link>

        <NavBar />
      </header>
    </div>
  );
};
