import React, { forwardRef } from "react";
import { cn } from "../../lib/classNameHelper";

type SidebarButtonProps = React.ComponentPropsWithRef<"button"> & {
  children: React.ReactNode;
  className?: string;
  onMobile?: boolean;
};

type Ref = HTMLButtonElement;

export const SidebarButton = forwardRef<Ref, SidebarButtonProps>(
  ({ children, className, onMobile, ...otherProps }, forwardedRef) => {
    return (
      <button
        {...otherProps}
        ref={forwardedRef}
        className={cn(
          className,
          "grid aspect-square h-12 place-content-center rounded-full border shadow-md dark:border-neutral-600 xl:rounded xl:shadow-sm",
          "hover:xl:shadow-md dark:hover:xl:shadow-gray-700",
          {
            "border-none shadow-none": onMobile,
          }
        )}>
        {children}
      </button>
    );
  }
);
