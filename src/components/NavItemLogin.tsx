import { forwardRef } from "react";

export const NavItemLogin = forwardRef<HTMLLIElement>((props, forwardedRef) => {
  return (
    <li className="list-none" ref={forwardedRef} {...props}>
      <button
        className="w-full rounded-md border-2 border-gray-800 bg-neutral-800 py-1.5 font-bold text-gray-100 dark:border-gray-300 dark:bg-gray-300 dark:text-neutral-800 md:px-9"
        aria-label="Website Login Button">
        Login
      </button>
    </li>
  );
});
