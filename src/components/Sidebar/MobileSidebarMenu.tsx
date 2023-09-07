import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { SidebarButton } from "./SidebarButton";
import { CloseIconMobileSidebar } from "../../assets/CloseIconSVG";
import { MenuIcon } from "../../assets/MenuIconSVG";
import { GFMButton } from "./GFMButton";
import { RRButton } from "./RRButton";
import { DownloadButton } from "./DownloadButton";
import { ClearAllButton } from "./ClearAllButton";
import { cn } from "../../lib/classNameHelper";

export const MobileSidebarMenu = () => {
  const [visible, setVisible] = useState(false);

  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger asChild>
        <SidebarButton
          className="md:frosted-glass-bg bg-white dark:bg-neutral-800"
          onClick={() => setVisible((prevState) => !prevState)}>
          {visible ? <CloseIconMobileSidebar /> : <MenuIcon />}
        </SidebarButton>
      </RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content align="end" asChild>
          <div
            className={cn(
              "md:frosted-glass-bg",
              "absolute bottom-16 right-0 z-20 flex flex-col gap-y-2 rounded-full border bg-white shadow-md dark:border-neutral-600 dark:bg-neutral-800"
            )}>
            <RadixDropdownMenu.Item
              asChild
              onSelect={(event) => event.preventDefault()}>
              <GFMButton onMobile />
            </RadixDropdownMenu.Item>

            <RadixDropdownMenu.Item
              asChild
              onSelect={(event) => event.preventDefault()}>
              <RRButton onMobile />
            </RadixDropdownMenu.Item>

            <RadixDropdownMenu.Item asChild>
              <DownloadButton onMobile />
            </RadixDropdownMenu.Item>

            <RadixDropdownMenu.Item
              asChild
              onSelect={(event) => event.preventDefault()}>
              <ClearAllButton onMobile />
            </RadixDropdownMenu.Item>
          </div>
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  );
};
