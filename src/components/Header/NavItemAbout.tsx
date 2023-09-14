import { forwardRef, useRef } from "react";
import { handleMousemove } from "../../lib/mouseMoveHelper";

export const NavItemAbout = forwardRef<HTMLLIElement>((props, forwardedRef) => {
  const tooltipRef = useRef<HTMLSpanElement>(null);

  return (
    <li className="list-none" ref={forwardedRef} {...props}>
      <button
        className="group relative w-full rounded-md border-2 border-gray-800 px-4 py-1.5 font-bold text-neutral-800 dark:border-gray-300 dark:text-gray-300 md:px-3"
        onMouseMove={(event) =>
          handleMousemove(event, tooltipRef, {
            offsetX: 10,
            offsetY: 18,
          })
        }>
        What's this?
        {/* Information Tooltip on hover 👇 */}
        <span
          ref={tooltipRef}
          className="fixed z-20 hidden whitespace-nowrap rounded bg-neutral-800 px-2 py-0.5 text-xs font-bold tracking-wide text-gray-100 dark:bg-gray-300 dark:text-neutral-800 group-hover:xl:block">
          Know more about this app
        </span>
      </button>
    </li>
  );
});
