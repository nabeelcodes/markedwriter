import { memo } from "react";
import { cn } from "../utilities/classNameHelper";
import { GFMLogo } from "../assets/GFMLogo";
import { RRLogo } from "../assets/RRLogo";
import { EyeIcon } from "../assets/EyeIcon";
import { DownloadIcon } from "../assets/DownloadIcon";
import { SidebarButton } from "./SidebarButton";
import { ClearAllButton } from "./ClearAll";

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
          <SidebarButton>
            <GFMLogo />
          </SidebarButton>
          <SidebarButton>
            <RRLogo />
          </SidebarButton>
          <SidebarButton>
            <EyeIcon />
          </SidebarButton>
          <SidebarButton>
            <DownloadIcon />
          </SidebarButton>
        </div>

        <ClearAllButton />
      </section>
    </aside>
  );
});
