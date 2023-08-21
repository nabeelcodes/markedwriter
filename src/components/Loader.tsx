import { cn } from "../utilities/classNameHelper";
import cssStyles from "../styles/loaderAnimation.module.css";

export const Loader = () => {
  return (
    <section
      className={cn(
        "hidden place-content-center md:grid",
        "shrink grow basis-1/2 py-8 xl:p-10",
        "border-l border-gray-200 dark:border-neutral-600"
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
