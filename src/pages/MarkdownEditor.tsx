import { useParams } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";
import { MarkdownInput } from "../components/MarkdownInput";
import { RenderedMarkdown } from "../components/RenderedMarkdown";
import { cn } from "../utilities/classNameHelper";
import { useIdValidator } from "../hooks/useIdValidator";

export const MarkdownEditor = () => {
  const { id } = useParams();
  useIdValidator(id);

  return (
    <div className="container2000">
      <PageTitle />

      <section
        /* 
          64.5px = Height of Header
          68.6px = Height of (PageTitle + mt-4)
        */
        className={cn(
          "flex",
          "min-h-[calc(100vh-64.5px-68.6px)] md:min-h-[calc(100vh-64.5px)]"
        )}
        aria-label="wrapper for input box">
        {/* Desktop Sidebar */}
        <aside
          className={cn(
            "hidden xl:block",
            "grow p-5",
            "dark:bg-neutral-800",
            "border-r border-gray-200 dark:border-neutral-600"
          )}>
          Sidebar
        </aside>

        <MarkdownInput pageId={id} />

        <RenderedMarkdown pageId={id} />
      </section>
    </div>
  );
};
