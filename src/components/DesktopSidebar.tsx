import { cn } from "../utilities/classNameHelper";

export const DesktopSidebar = () => {
  return (
    <aside
      className={cn(
        "hidden xl:block",
        "h-full p-5",
        "fixed left-0",
        "dark:bg-neutral-800",
        "border-r border-gray-200 dark:border-neutral-600"
      )}>
      Sidebar
    </aside>
  );
};
