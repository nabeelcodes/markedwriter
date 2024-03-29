import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { appDataAtom } from "../../store/appState";
import { getCurrentPost } from "../../lib/getCurrentPost";
import { TitleEditButton } from "./TitleEditButton";
import { cn } from "../../lib/classNameHelper";

export const PageTitle = () => {
  const { id } = useParams();
  const [appData] = useAtom(appDataAtom);

  /* Find the Post corresponding to the current pageId */
  const currentPost = getCurrentPost(appData, id);
  const titleToDisplay = currentPost?.title;

  return (
    <section
      className={cn(
        "md:frosted-glass-bg",
        "sticky top-20 z-20",
        "mx-5 mt-4 py-1 pl-4",
        "rounded border text-lg font-bold",
        "flex items-center justify-between",
        "border-gray-200 bg-white dark:border-neutral-600 dark:bg-neutral-800",
        "xl:fixed xl:left-1/2 xl:top-0 xl:mx-0 xl:mt-[0.55rem] xl:w-[30rem] xl:max-w-lg xl:-translate-x-1/2 xl:py-0"
      )}>
      <span className="overflow-x-auto whitespace-nowrap">
        {titleToDisplay}
      </span>

      <TitleEditButton />
    </section>
  );
};
