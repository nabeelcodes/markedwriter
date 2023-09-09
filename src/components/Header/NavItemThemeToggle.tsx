import { useAtom } from "jotai";
import { forwardRef, useEffect } from "react";
import { DayIcon } from "../../assets/DayIconSVG";
import { NightIcon } from "../../assets/NightIconSVG";
import { themeAtom } from "../../store/appState";
import { useMousePosition } from "../../hooks/useMousePosition";

export const NavItemThemeToggle = forwardRef<HTMLLIElement>(
  (props, forwardedRef) => {
    const htmlTagCLasslist = document.documentElement.classList;
    const [appTheme, setAppTheme] = useAtom(themeAtom);
    const { cursorPosition } = useMousePosition("theme-button");

    useEffect(() => {
      const tooltip = document.getElementById(
        "theme-tooltip"
      ) as HTMLSpanElement | null;

      if (tooltip && cursorPosition.x && cursorPosition.y) {
        tooltip.style.top = `${cursorPosition?.y + 22}px`;
        tooltip.style.left = `${cursorPosition?.x + 9}px`;
      }
    }, [cursorPosition.x, cursorPosition.y]);

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
          id="theme-button"
          className="group relative flex w-full items-center justify-between xl:p-2"
          onClick={handleDarkMode}
          aria-label="Theme Toggle Button">
          {appTheme === "dark" ? <DayIcon /> : <NightIcon />}

          <span className="md:hidden">
            {appTheme === "dark" ? "Light" : "Dark"}
          </span>

          {/* Information Tooltip on hover 👇 */}
          <span
            id="theme-tooltip"
            className="fixed z-20 hidden whitespace-nowrap rounded bg-neutral-800 px-2 py-0.5 text-xs font-bold tracking-wide text-gray-100 dark:bg-gray-300 dark:text-neutral-800 group-hover:xl:block">
            Theme Toggle
          </span>
        </button>
      </li>
    );
  }
);
