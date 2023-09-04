import { useAtom } from "jotai";
import { GFMAtom } from "../../store/appState";
import { SidebarButton } from "./SidebarButton";
import { GFMLogo } from "../../assets/GFMLogo";
import { cn } from "../../lib/classNameHelper";

export const GFMButton = () => {
  const [gfmState, setGFM] = useAtom(GFMAtom);

  return (
    <SidebarButton
      className="group relative"
      onClick={() => setGFM((prevState) => !prevState)}>
      <span
        className={cn(
          "pointer-events-none absolute top-[0.5rem] whitespace-nowrap rounded border bg-white px-3 py-1 text-sm font-bold shadow-md",
          "dark:border-neutral-600 dark:bg-neutral-800 dark:text-green-500",
          "translate-x-14 translate-y-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
        )}>
        {gfmState ? "Disable" : "Enable"} Github Flavoured Markdown
      </span>
      <GFMLogo />
    </SidebarButton>
  );
};
