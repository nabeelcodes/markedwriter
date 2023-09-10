import { Link } from "react-router-dom";
import { useRef } from "react";
import { useAtom } from "jotai";
import { themeAtom } from "../../store/appState";
import { AppLogoDark } from "../../assets/AppLogoDarkSVG";
import { AppLogoLight } from "../../assets/AppLogoLightSVG";
import { NavBar } from "./NavBar";
import { handleMousemove } from "../../lib/mouseMoveHelper";

export const Header = () => {
  const [appTheme] = useAtom(themeAtom);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  return (
    <div
      className="md:frosted-glass-bg sticky top-0 z-10 border-b border-gray-200 bg-white px-5 dark:border-neutral-600 dark:bg-neutral-800"
      aria-label="Header wrapper">
      <header className="container2000 relative flex h-16 items-center justify-between">
        <button
          className="group relative translate-y-[0.2rem]"
          onMouseMove={(event) =>
            handleMousemove(event, tooltipRef, {
              offsetX: -6,
              offsetY: 8,
            })
          }>
          <Link to="/" aria-label="Website logo">
            {appTheme === "dark" ? <AppLogoLight /> : <AppLogoDark />}
            {/* Information Tooltip on hover 👇 */}
            <span
              ref={tooltipRef}
              className="fixed z-20 hidden whitespace-nowrap rounded bg-neutral-800 px-2 py-0.5 text-xs font-bold tracking-wide text-gray-100 dark:bg-gray-300 dark:text-neutral-800 group-hover:xl:block">
              Go to Homepage
            </span>
          </Link>
        </button>

        <NavBar />
      </header>
    </div>
  );
};
