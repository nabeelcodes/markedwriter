import { useAtom } from "jotai";
import { visibilityAtom } from "../../store/appState";
import { SidebarButton } from "./SidebarButton";
import { EyeIcon } from "../../assets/EyeIconSVG";
import { cn } from "../../lib/classNameHelper";

export const PaneVisibilityButton = () => {
  const [paneVisible, setPaneVisible] = useAtom(visibilityAtom);

  return (
    <SidebarButton
      className="group relative"
      onClick={() => setPaneVisible((prevState) => !prevState)}>
      <span
        className={cn(
          "pointer-events-none absolute left-[3.5rem] top-[0.5rem] whitespace-nowrap rounded border bg-white px-3 py-1 text-sm font-bold shadow-md",
          "dark:border-neutral-600 dark:bg-neutral-800 dark:text-green-500",
          "opacity-0 group-hover:animate-contentReveal group-hover:opacity-100"
        )}>
        {paneVisible ? "Hide" : "Show"} Markdown display pane
      </span>
      <EyeIcon />
    </SidebarButton>
  );
};
