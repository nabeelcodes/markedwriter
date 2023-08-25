import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";
import { DesktopSidebar } from "../components/DesktopSidebar";
import { MarkdownInput } from "../components/MarkdownInput";
import { StatusBar } from "../components/StatusBar";
import { Loader } from "../components/Loader";
import { useIdValidator } from "../hooks/useIdValidator";
import { cn } from "../utilities/classNameHelper";

/* Attempt to reduce un-used JS for Landing page */
const RenderedMarkdown = lazy(() =>
  import("../components/RenderedMarkdown").then((module) => {
    return { default: module.RenderedMarkdown };
  })
);

export const MarkdownEditor = () => {
  const { id } = useParams();
  useIdValidator(id);

  return (
    <>
      <Helmet>
        <title>MarkedWriter | Editor</title>
      </Helmet>

      <div className="container2000 relative">
        <PageTitle />

        {/* Desktop Sidebar */}
        <DesktopSidebar />

        <section
          /* 
          64.5px = Height of Header
          68.6px = Height of (PageTitle + mt-4)
          */
          className={cn(
            "flex",
            "-z-10 xl:ml-[88.8px]",
            "min-h-[calc(100vh-64.5px-68.6px)] md:min-h-[calc(100vh-64.5px)]"
          )}
          aria-label="wrapper for input box">
          <MarkdownInput pageId={id} />

          <Suspense fallback={<Loader />}>
            <RenderedMarkdown pageId={id} />
          </Suspense>
        </section>

        <StatusBar />
      </div>
    </>
  );
};
