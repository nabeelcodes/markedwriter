import { useAtom } from "jotai";
import { forwardRef, useEffect } from "react";
import { DayIcon } from "../assets/DayIconSVG";
import { NightIcon } from "../assets/NightIconSVG";
import { themeAtom } from "../store/appState";

export const NavItemThemeToggle = forwardRef<HTMLLIElement>(
  (props, forwardedRef) => {
    const htmlTagCLasslist = document.documentElement.classList;
    const [appTheme, setAppTheme] = useAtom(themeAtom);

    useEffect(() => {
      if (appTheme === "dark") {
        htmlTagCLasslist.remove("light");
        htmlTagCLasslist.add("dark");
      } else {
        htmlTagCLasslist.remove("dark");
        htmlTagCLasslist.add("light");
      }
    }, [appTheme, htmlTagCLasslist]);

    const handleDarkMode = () => {
      if (htmlTagCLasslist.contains("light")) {
        setAppTheme("dark");
      } else {
        setAppTheme("light");
      }
    };

    return (
      <li className="list-none" ref={forwardedRef} {...props}>
        <button
          className="flex w-full items-center justify-between"
          onClick={handleDarkMode}
          aria-label="Theme Toggle Button">
          {appTheme === "dark" ? <DayIcon /> : <NightIcon />}
          <span className="md:hidden">
            {appTheme === "dark" ? "Light" : "Dark"}
          </span>
        </button>
      </li>
    );
  }
);
