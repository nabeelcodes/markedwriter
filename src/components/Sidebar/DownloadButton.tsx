import { forwardRef } from "react";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { appDataAtom } from "../../store/appState";
import { getCurrentPost } from "../../lib/getCurrentPost";
import { DownloadIcon } from "../../assets/DownloadIconSVG";
import { SidebarButton } from "./SidebarButton";
import { cn } from "../../lib/classNameHelper";

type DownloadButtonProps = {
  onMobile?: boolean;
};

type Ref = HTMLButtonElement;

export const DownloadButton = forwardRef<Ref, DownloadButtonProps>(
  ({ onMobile }, forwardedRef) => {
    const { id: pageId } = useParams();
    const [appData] = useAtom(appDataAtom);
    const currentPost = getCurrentPost(appData, pageId);

    const handleDownload = () => {
      if (!currentPost) return;

      const fileTitle = currentPost.title;
      const markdownToDownload = currentPost.content;
      /* Create a new Blob object with the text content */
      const blob = new Blob([markdownToDownload], { type: "text/plain" });
      /* Create a temporary <a> element and set its download attribute to specify the file name */
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${fileTitle}.md`;
      /* Programmatically click the link to trigger the download */
      link.click();
      /* Clean up the URL.createObjectURL by revoking the object URL after some time */
      setTimeout(() => {
        URL.revokeObjectURL(link.href);
      }, 100);
    };

    return (
      <SidebarButton
        ref={forwardedRef}
        onMobile={onMobile}
        className="group relative"
        onClick={handleDownload}>
        <span
          className={cn(
            "hidden xl:block",
            "pointer-events-none absolute top-[0.5rem] whitespace-nowrap rounded border bg-white px-3 py-1 text-sm font-bold shadow-md",
            "dark:border-neutral-600 dark:bg-neutral-800 dark:text-green-500",
            "translate-x-14 translate-y-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
          )}>
          Download your Markdown
        </span>

        <DownloadIcon />
      </SidebarButton>
    );
  }
);
