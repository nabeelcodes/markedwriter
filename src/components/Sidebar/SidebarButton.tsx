import { cn } from "../../lib/classNameHelper";

type sidebarButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
  className?: string;
};

export const SidebarButton = ({
  children,
  className,
  ...otherProps
}: sidebarButtonProps) => {
  return (
    <button
      {...otherProps}
      className={cn(
        "grid aspect-square h-12 place-content-center rounded border shadow-sm dark:border-neutral-600",
        "hover:lg:shadow-md dark:hover:lg:shadow-gray-700",
        className
      )}>
      {children}
    </button>
  );
};
