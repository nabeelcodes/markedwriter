import { lazy, Suspense, useCallback, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { scrollAtom, visibilityAtom } from "../store/appState";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { PageTitle } from "../components/PostTitle/PageTitle";
import { MarkdownInput } from "../components/Markdowns/MarkdownInput";
import { MobileSidebar } from "../components/Sidebar/MobileSidebar";
import { StatusBar } from "../components/StatusBar/StatusBar";
import { SidebarLoader } from "../components/Sidebar/SidebarLoader";
import { Loader } from "../components/Utils/Loader";
import { useIdValidator } from "../hooks/useIdValidator";
import { cn } from "../lib/classNameHelper";

/* Attempt to reduce un-used JS for Landing page */
const RenderedMarkdown = lazy(() =>
  import("../components/Markdowns/RenderedMarkdown").then((module) => {
    return { default: module.RenderedMarkdown };
  })
);
const DesktopSidebar = lazy(() =>
  import("../components/Sidebar/DesktopSidebar").then((module) => {
    return { default: module.DesktopSidebar };
  })
);

export const MarkdownEditor = () => {
  const [paneVisibility, setPaneVisibility] = useAtom(visibilityAtom);
  const [scrollValue, setScrollValue] = useAtom(scrollAtom);
  const { id } = useParams();
  useIdValidator(id);

  const debounceRef = useRef<number>();

  const resizeHandler = useCallback(() => {
    /* resizeHandler : sets state for editingPane and markdownPane based on viewport width */
    if (window.innerWidth < 1280) {
      setPaneVisibility((prevState) => ({
        ...prevState,
        markdownPaneVisibility: !prevState.editingPaneVisibility,
      }));
    } else {
      setPaneVisibility({
        editingPaneVisibility: true,
        markdownPaneVisibility: true,
      });
    }
  }, [setPaneVisibility]);

  const scrollSyncHandler = useCallback(() => {
    clearTimeout(debounceRef.current);

    if (window.scrollY) {
      debounceRef.current = setTimeout(() => {
        setScrollValue(window.scrollY);
        console.log(window.scrollY);
      }, 1500);
    }
  }, [setScrollValue]);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    window.addEventListener("scroll", scrollSyncHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("scroll", scrollSyncHandler);
    };
  }, [resizeHandler, scrollSyncHandler]);

  return (
    <>
      <Helmet>
        <title>MarkedWriter | Editor</title>
      </Helmet>

      <div className="container2000 relative">
        <PageTitle />

        <section
          /* 
          64.5px = Height of Header
          68.6px = Height of (PageTitle + mt-4)
          */
          className={cn(
            "flex",
            "-z-10",
            "min-h-[calc(100vh-64.5px-68.6px)] md:min-h-[calc(100vh-64.5px)]"
          )}
          aria-label="wrapper for input box">
          {/* Desktop Sidebar 👇 */}
          <Suspense fallback={<SidebarLoader />}>
            <DesktopSidebar />
          </Suspense>

          {/* Editing Pane 👇 */}
          {paneVisibility.editingPaneVisibility && (
            <MarkdownInput pageId={id} />
          )}

          {/* Markdown Pane 👇 */}
          <Suspense fallback={<Loader />}>
            {paneVisibility.markdownPaneVisibility && (
              <RenderedMarkdown pageId={id} />
            )}
          </Suspense>
        </section>

        {/* Floating sidebar for Tablets and Cellphones 👇 */}
        <MobileSidebar />

        {/* Status Bar 👇 */}
        <StatusBar />
      </div>
    </>
  );
};
