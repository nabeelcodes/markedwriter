import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { cn } from "../lib/classNameHelper";

export const NoMatch = () => {
  return (
    <div id="error-page" className="bg-white dark:bg-neutral-800">
      <Header />

      <main className="relative grid min-h-[calc(100vh-64.5px)] place-content-center overflow-hidden px-8 dark:bg-neutral-800 dark:text-gray-300">
        <h1 className="z-20 mb-4 -translate-y-16 text-center text-5xl font-bold text-neutral-800 dark:text-gray-300 sm:translate-y-0">
          Oops!
        </h1>

        <h2 className="text-bold absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-2/3 text-[18rem] text-gray-100 dark:text-neutral-700 sm:-translate-y-1/2 sm:text-[28rem] lg:text-[35rem] xl:text-[45rem]">
          404
        </h2>

        <p className="z-20 -translate-y-16 text-center text-lg text-gray-500 dark:text-gray-400 sm:translate-y-0">
          The requested page might not exist. Please re-check your url.
        </p>

        <Link
          to="/"
          className={cn(
            "text-md relative z-20 mx-auto mt-4 w-fit -translate-y-16 pb-1 text-center font-bold sm:translate-y-0",
            "before:absolute before:bottom-0 before:h-1 before:w-full before:bg-black before:content-[''] dark:before:bg-gray-300",
            "after:absolute after:bottom-0 after:hidden after:h-1 after:w-12 after:-translate-x-[3rem] after:bg-white after:transition-transform after:duration-500 after:content-[''] hover:after:translate-x-[6.6rem] dark:after:bg-neutral-800 xl:after:block"
          )}>
          Back to Home
        </Link>
      </main>
    </div>
  );
};
