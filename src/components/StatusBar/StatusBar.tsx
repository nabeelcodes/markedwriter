import { memo } from "react";
import { WordCount } from "./WordCount";
import { ReadingTime } from "./ReadingTime";
import { cn } from "../../lib/classNameHelper";
import { useAtom } from "jotai";
import { visibilityAtom } from "../../store/appState";

export const StatusBar = memo(() => {
  const [paneVisibility] = useAtom(visibilityAtom);

  return (
    <section
      className={cn(
        "md:frosted-glass-bg",
        "fixed bottom-0 left-0 right-0",
        "px-5 py-1",
        "w-full bg-white dark:bg-neutral-800",
        "text-sm text-black dark:text-gray-300",
        "border-t dark:border-neutral-600"
      )}>
      <div
        aria-label="inner wrapper for status bar"
        className="container2000 flex w-full items-center justify-between">
        <span className="font-bold">
          {paneVisibility.markdownPaneVisibility ? "Markdown" : "Editor"}
        </span>

        <div className="flex items-center justify-between gap-8 font-bold">
          <WordCount />
          <ReadingTime />
        </div>
      </div>
    </section>
  );
});
