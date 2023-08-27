import { memo } from "react";
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
        <article>
          Words : <span className="text-green-500">1472</span>
        </article>
        <article className="hidden md:block">
          Reading Time : <span className="text-green-500">8 mins read</span>
        </article>
      </div>
    </section>
  );
});
