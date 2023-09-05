import { memo } from "react";
import { GFMButton } from "./GFMButton";
import { RRButton } from "./RRButton";
import { PaneVisibilityButton } from "./PaneVisibilityButton";
import { DownloadButton } from "./DownloadButton";
import { ClearAllButton } from "./ClearAllButton";
import { cn } from "../../lib/classNameHelper";

export const DesktopSidebar = memo(() => {
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
          <GFMButton />
          <RRButton />
          <PaneVisibilityButton />
          <DownloadButton />
        </div>

        <ClearAllButton />
      </section>
    </aside>
  );
});
