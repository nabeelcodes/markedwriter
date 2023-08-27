import { memo } from "react";
import { WordCount } from "./WordCount";
import { ReadingTime } from "./ReadingTime";
import { cn } from "../../lib/classNameHelper";

export const StatusBar = memo(() => {
  return (
    <section
      className={cn(
        "md:frosted-glass-bg",
        "fixed bottom-0",
        "px-5 py-1",
        "w-full bg-white dark:bg-neutral-800",
        "text-sm text-black dark:text-gray-300",
        "border-t dark:border-neutral-600",
        "flex items-center justify-between"
      )}>
      <span className="font-bold">Markdown</span>

      <div className="flex items-center justify-between gap-8 font-bold">
        <WordCount />

        <ReadingTime />
      </div>
    </section>
  );
});
