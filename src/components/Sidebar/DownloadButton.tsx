import { DownloadIcon } from "../../assets/DownloadIconSVG";
import { cn } from "../../lib/classNameHelper";
import { SidebarButton } from "./SidebarButton";

export const DownloadButton = () => {
  return (
    <SidebarButton className="group relative" onClick={() => console.log("")}>
      <span
        className={cn(
          "pointer-events-none absolute left-[3.5rem] top-[0.5rem] whitespace-nowrap rounded border bg-white px-3 py-1 text-sm font-bold shadow-md",
          "dark:border-neutral-600 dark:bg-neutral-800 dark:text-green-500",
          "opacity-0 group-hover:animate-contentReveal group-hover:opacity-100"
        )}>
        Download your Markdown
      </span>
      <DownloadIcon />
    </SidebarButton>
  );
};
