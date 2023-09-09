import { forwardRef, useEffect } from "react";
import { useMousePosition } from "../../hooks/useMousePosition";

export const NavItemAbout = forwardRef<HTMLLIElement>((props, forwardedRef) => {
  const { cursorPosition } = useMousePosition("about-button");

  useEffect(() => {
    const tooltip = document.getElementById(
      "about-tooltip"
    ) as HTMLSpanElement | null;

    if (tooltip && cursorPosition.x && cursorPosition.y) {
      tooltip.style.top = `${cursorPosition?.y + 22}px`;
      tooltip.style.left = `${cursorPosition?.x + 9}px`;
    }
  }, [cursorPosition.x, cursorPosition.y]);

  return (
    <li className="list-none" ref={forwardedRef} {...props}>
      <button
        id="about-button"
        className="group relative w-full rounded-md border-2 border-gray-800 px-4 py-1.5 font-bold text-neutral-800 dark:border-gray-300 dark:text-gray-300 md:px-3">
        What's this?
        {/* Information Tooltip on hover 👇 */}
        <span
          id="about-tooltip"
          className="fixed z-20 hidden whitespace-nowrap rounded bg-neutral-800 px-2 py-0.5 text-xs font-bold tracking-wide text-gray-100 dark:bg-gray-300 dark:text-neutral-800 group-hover:xl:block">
          Click to know more about this app
        </span>
      </button>
    </li>
  );
});
