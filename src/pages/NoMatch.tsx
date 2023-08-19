import { Header } from "../components/Header";

export const NoMatch = () => {
  return (
    <div id="error-page" className="bg-white dark:bg-neutral-800">
      <Header />

      <main className="grid min-h-[calc(100vh-64.5px)] place-content-center dark:bg-neutral-800 dark:text-gray-300">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </main>
    </div>
  );
};
