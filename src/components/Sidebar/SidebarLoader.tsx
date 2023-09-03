import cssStyles from "../../styles/sidebarLoaderAnimation.module.css";
import { SidebarButton } from "./SidebarButton";
import { cn } from "../../lib/classNameHelper";

const LoadingButton = () => (
  <SidebarButton>
    <div className={cssStyles.ripples}>
      <div className={cssStyles.ripples__dot}></div>
    </div>
  </SidebarButton>
);

export const SidebarLoader = () => {
  return (
    <aside
      className={cn(
        "hidden xl:block",
        "h-[calc(100vh-92.8px)] p-5",
        "fixed left-0",
        "dark:bg-neutral-800",
        "border-r border-gray-200 dark:border-neutral-600"
      )}>
      <section className="flex h-full flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-between gap-y-4">
          <LoadingButton />
          <LoadingButton />
          <LoadingButton />
          <LoadingButton />
        </div>

        <LoadingButton />
      </section>
    </aside>
  );
};
