import { forwardRef } from "react";
import cssStyles from "../styles/navMenuTrigger.module.css";

export const NavMenuTrigger = forwardRef<HTMLButtonElement>(
  (props, forwardedRef) => {
    return (
      <button
        className={`md:hidden ${cssStyles.triggerButton}`}
        aria-label="Navigation Menu trigger"
        ref={forwardedRef}
        type="button"
        {...props}>
        <div className={cssStyles.hamburger}>
          <span
            className={`bg-neutral-800 dark:bg-gray-300 ${cssStyles.line}`}></span>
          <span
            className={`bg-neutral-800 dark:bg-gray-300 ${cssStyles.line}`}></span>
          <span
            className={`bg-neutral-800 dark:bg-gray-300 ${cssStyles.line}`}></span>
        </div>
      </button>
    );
  }
);
