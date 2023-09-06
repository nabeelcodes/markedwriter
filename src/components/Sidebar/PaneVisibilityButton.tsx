import { useAtom } from "jotai";
import { visibilityAtom } from "../../store/appState";
import { SidebarButton } from "./SidebarButton";
import { EyeIconClosed, EyeIconOpen } from "../../assets/EyeIconSVG";
import { cn } from "../../lib/classNameHelper";

export const PaneVisibilityButton = () => {
  const [paneVisible, setPaneVisible] = useAtom(visibilityAtom);

  const toggleHandler = () => {
    setPaneVisible((prevState) =>
      window.innerWidth < 1280
        ? {
            editingPaneVisible: prevState.markdownPaneVisible ? true : false,
            markdownPaneVisible: !prevState.markdownPaneVisible,
          }
        : {
            editingPaneVisible: true,
            markdownPaneVisible: !prevState.markdownPaneVisible,
          }
    );
  };

  return (
    <SidebarButton
      className="md:frosted-glass-bg group relative bg-white dark:bg-neutral-800"
      onClick={toggleHandler}>
      <span
        className={cn(
          "hidden xl:block",
          "pointer-events-none absolute top-[0.5rem] whitespace-nowrap border bg-white px-3 py-1 text-sm font-bold shadow-md xl:rounded",
          "dark:border-neutral-600 dark:bg-neutral-800 dark:text-green-500",
          "translate-x-14 translate-y-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
        )}>
        {paneVisible.markdownPaneVisible ? "Hide" : "Show"} Markdown display
        pane
      </span>

      {paneVisible.markdownPaneVisible ? <EyeIconOpen /> : <EyeIconClosed />}
    </SidebarButton>
  );
};
