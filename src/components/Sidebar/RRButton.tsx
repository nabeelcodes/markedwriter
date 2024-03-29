import { forwardRef } from "react";
import { useAtom } from "jotai";
import { RRAtom } from "../../store/appState";
import { SidebarButton } from "./SidebarButton";
import { RRLogo } from "../../assets/RRLogoSVG";
import { cn } from "../../lib/classNameHelper";

type RRButtonProps = {
  onMobile?: boolean;
};

type Ref = HTMLButtonElement;

export const RRButton = forwardRef<Ref, RRButtonProps>(
  ({ onMobile }, forwardedRef) => {
    const [rrState, setRR] = useAtom(RRAtom);

    return (
      <SidebarButton
        ref={forwardedRef}
        onMobile={onMobile}
        className="group relative"
        onClick={() => setRR((prevState) => !prevState)}>
        <span
          className={cn(
            "hidden xl:block",
            "pointer-events-none absolute top-[0.5rem] whitespace-nowrap rounded border bg-white px-3 py-1 text-sm font-bold shadow-md",
            "dark:border-neutral-600 dark:bg-neutral-800 dark:text-green-500",
            "translate-x-14 translate-y-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
          )}>
          {rrState ? "Disable" : "Enable"} Remark Rehype
        </span>

        <span
          className={cn(
            "relative after:absolute after:-top-2 after:right-0.5 after:rounded-full after:bg-green-400 after:px-1 after:text-[0.5rem] after:font-bold after:text-black after:content-['ON']",
            {
              "after:content-['OFF']": !rrState,
            }
          )}>
          <RRLogo />
        </span>
      </SidebarButton>
    );
  }
);
