import { forwardRef, useEffect } from "react";
import { useMousePosition } from "../../hooks/useMousePosition";

export const NavItemLogin = forwardRef<HTMLLIElement>((props, forwardedRef) => {
  const { cursorPosition } = useMousePosition("login-button");

  useEffect(() => {
    const tooltip = document.getElementById(
      "login-tooltip"
    ) as HTMLSpanElement | null;

    if (tooltip && cursorPosition.x && cursorPosition.y) {
      tooltip.style.top = `${cursorPosition?.y + 22}px`;
      tooltip.style.left = `${cursorPosition?.x - 115}px`;
    }
  }, [cursorPosition.x, cursorPosition.y]);

  return (
    <li className="list-none xl:ml-2" ref={forwardedRef} {...props}>
      <button
        id="login-button"
        className="group relative w-full rounded-md border-2 border-gray-800 bg-neutral-800 py-1.5 font-bold text-gray-100 dark:border-gray-300 dark:bg-gray-300 dark:text-neutral-800 md:px-9"
        aria-label="Website Login Button">
        Login
        {/* Information Tooltip on hover 👇 */}
        <span
          id="login-tooltip"
          className="fixed z-20 hidden whitespace-nowrap rounded bg-neutral-800 px-2 py-0.5 text-xs font-bold tracking-wide text-gray-100 dark:bg-gray-300 dark:text-neutral-800 group-hover:xl:block">
          Work in progress
        </span>
      </button>
    </li>
  );
});
