import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const LayoutContainer = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-white font-sans text-gray-950 dark:bg-neutral-800 dark:text-gray-300"
      aria-label="App wrapper">
      <Header />

      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
};
