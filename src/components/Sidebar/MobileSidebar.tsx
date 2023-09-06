import { useState } from "react";
import { SidebarButton } from "./SidebarButton";
import { GFMButton } from "./GFMButton";
import { RRButton } from "./RRButton";
import { DownloadButton } from "./DownloadButton";
import { ClearAllButton } from "./ClearAllButton";
import { PaneVisibilityButton } from "./PaneVisibilityButton";
import { CloseIconMobileSidebar } from "../../assets/CloseIconSVG";
import { MenuIcon } from "../../assets/MenuIconSVG";
import { cn } from "../../lib/classNameHelper";

export const MobileSidebar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className="fixed bottom-[5.5rem] right-[1.25rem] z-40 xl:hidden">
      <div className="relative mb-6">
        <div
          className={cn(
            "md:frosted-glass-bg",
            "pointer-events-none absolute right-0 mb-4 flex flex-col gap-y-2 rounded-full border bg-white opacity-0 shadow-md dark:border-neutral-600 dark:bg-neutral-800",
            "-translate-y-[9rem] transition",
            {
              "pointer-events-auto -translate-y-[14.5rem] opacity-100": visible,
            }
          )}>
          <GFMButton onMobile />
          <RRButton onMobile />
          <DownloadButton onMobile />
          <ClearAllButton onMobile />
        </div>

        {/* Menu Toggle Button 👇 */}
        <SidebarButton
          className="md:frosted-glass-bg bg-white dark:bg-neutral-800"
          onClick={() => setVisible((prevState) => !prevState)}>
          {visible ? <CloseIconMobileSidebar /> : <MenuIcon />}
        </SidebarButton>
      </div>

      <PaneVisibilityButton />
    </section>
  );
};
