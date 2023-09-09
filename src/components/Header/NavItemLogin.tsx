import { forwardRef, useRef } from "react";
import { handleMousemove } from "../../lib/mouseMoveHelper";

export const NavItemLogin = forwardRef<HTMLLIElement>((props, forwardedRef) => {
  const tooltipRef = useRef<HTMLSpanElement>(null);

  return (
    <li className="list-none xl:ml-2" ref={forwardedRef} {...props}>
      <button
        className="group relative w-full rounded-md border-2 border-gray-800 bg-neutral-800 py-1.5 font-bold text-gray-100 dark:border-gray-300 dark:bg-gray-300 dark:text-neutral-800 md:px-9"
        aria-label="Website Login Button"
        onMouseMove={(event) =>
          handleMousemove(event, tooltipRef, {
            offsetX: -118,
            offsetY: 18,
          })
        }>
        Login
        {/* Information Tooltip on hover 👇 */}
        <span
          ref={tooltipRef}
          className="fixed z-20 hidden whitespace-nowrap rounded bg-neutral-800 px-2 py-0.5 text-xs font-bold tracking-wide text-gray-100 dark:bg-gray-300 dark:text-neutral-800 group-hover:xl:block">
          Work in progress
        </span>
      </button>
    </li>
  );
});
