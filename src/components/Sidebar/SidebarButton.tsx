import { cn } from "../../lib/classNameHelper";

type sidebarButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
  className?: string;
  onMobile?: boolean;
};

export const SidebarButton = ({
  children,
  className,
  onMobile,
  ...otherProps
}: sidebarButtonProps) => {
  return (
    <button
      {...otherProps}
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
};
