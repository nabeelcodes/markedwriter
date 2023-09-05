import { useAtom } from "jotai";
import { postStyleAtom } from "../../store/appState";
import { GridIconSVG } from "../../assets/GridIconSVG";
import { ListIconSVG } from "../../assets/ListIconSVG";
import { cn } from "../../lib/classNameHelper";

type ListStyleProps = {
  isGridMode: boolean;
};

export const ListStylePicker = ({ isGridMode }: ListStyleProps) => {
  const [, setPostStyle] = useAtom(postStyleAtom);

  return (
    <div className="mt-6 flex items-center justify-end gap-2">
      <button
        className={cn("rounded border p-2 dark:border-neutral-600", {
          "bg-black/10 dark:bg-neutral-700": !isGridMode,
        })}
        onClick={() => setPostStyle("list")}>
        <ListIconSVG />
      </button>

      <button
        className={cn("rounded border p-2 dark:border-neutral-600", {
          "bg-black/10 dark:bg-neutral-700": isGridMode,
        })}
        onClick={() => setPostStyle("grid")}>
        <GridIconSVG />
      </button>
    </div>
  );
};
