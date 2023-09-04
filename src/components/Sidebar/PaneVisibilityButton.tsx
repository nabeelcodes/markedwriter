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
          "pointer-events-none absolute top-[0.5rem] whitespace-nowrap rounded border bg-white px-3 py-1 text-sm font-bold shadow-md",
          "dark:border-neutral-600 dark:bg-neutral-800 dark:text-green-500",
          "translate-x-14 translate-y-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
        )}>
        {paneVisible ? "Hide" : "Show"} Markdown display pane
      </span>
      <EyeIcon />
    </SidebarButton>
  );
};
