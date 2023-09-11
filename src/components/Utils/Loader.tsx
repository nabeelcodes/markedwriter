import { cn } from "../../lib/classNameHelper";
import cssStyles from "../../styles/loaderAnimation.module.css";

export const Loader = () => {
  return (
    <section
      role="loader"
      aria-label="loader spinner"
      className={cn(
        "grid place-content-center",
        "shrink grow basis-1/2 py-8 xl:p-10",
        "border-gray-200 dark:border-neutral-600 xl:border-l"
      )}>
      <div className={cssStyles.loaderGrid}>
        <div className="bg-neutral-800 dark:bg-white"></div>
        <div className="bg-neutral-800 dark:bg-white"></div>
        <div className="bg-neutral-800 dark:bg-white"></div>
        <div className="bg-neutral-800 dark:bg-white"></div>
        <div className="bg-neutral-800 dark:bg-white"></div>
        <div className="bg-neutral-800 dark:bg-white"></div>
        <div className="bg-neutral-800 dark:bg-white"></div>
        <div className="bg-neutral-800 dark:bg-white"></div>
        <div className="bg-neutral-800 dark:bg-white"></div>
      </div>
    </section>
  );
};
