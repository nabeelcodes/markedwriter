import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";
import { SidebarButton } from "./SidebarButton";
import { CloseIconMobileSidebar } from "../../assets/CloseIconSVG";
import { MenuIcon } from "../../assets/MenuIconSVG";
import { GFMButton } from "./GFMButton";
import { RRButton } from "./RRButton";
import { DownloadButton } from "./DownloadButton";
import { ClearAllButton } from "./ClearAllButton";
import { cn } from "../../lib/classNameHelper";

const MenuButton = forwardRef<HTMLButtonElement>(
  (props: { "data-state"?: string }, forwardedRef) => {
    return (
      <SidebarButton
        {...props}
        ref={forwardedRef}
        className="md:frosted-glass-bg bg-white dark:bg-neutral-800">
        {props["data-state"] === "open" ? (
          <CloseIconMobileSidebar />
        ) : (
          <MenuIcon />
        )}
      </SidebarButton>
    );
  }
);

export const MobileSidebarMenu = () => {
  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger asChild>
        <MenuButton />
      </RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content
          align="end"
          className={cn(
            "md:frosted-glass-bg",
            "absolute bottom-16 right-0 z-20 flex flex-col gap-y-2 rounded-full border bg-white py-2 shadow-md dark:border-neutral-600 dark:bg-neutral-800",
            "data-[state=closed]:animate-menuHide data-[state=open]:animate-menuReveal"
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
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  );
};
