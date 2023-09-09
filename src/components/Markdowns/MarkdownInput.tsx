import { useAtom } from "jotai";
import { appDataAtom, visibilityAtom } from "../../store/appState";
import { getCurrentPost } from "../../lib/getCurrentPost";
import { insertTabForTextarea } from "../../lib/tabHelper";
import { updatePostContent } from "../../lib/updatePostContent";
import { cn } from "../../lib/classNameHelper";

type markdownInputProps = {
  pageId: string | undefined;
};

export const MarkdownInput = ({ pageId }: markdownInputProps) => {
  const [appData, setAppData] = useAtom(appDataAtom);
  const [paneVisible] = useAtom(visibilityAtom);
  /* Find the Post corresponding to the current pageId */
  const currentPost = getCurrentPost(appData, pageId);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedAppData = updatePostContent(appData, pageId, e?.target?.value);
    setAppData(updatedAppData);
  };

  const tabInputHandler = (updatedPostContent: string) => {
    const finalUpdatedAppData = updatePostContent(
      appData,
      pageId,
      updatedPostContent
    );
    setAppData(finalUpdatedAppData);
  };

  return (
    <textarea
      className={cn(
        "grow basis-1/2",
        "font-mono text-gray-400",
        "mx-auto max-w-lg p-8 pb-[10rem] md:max-w-full",
        "disable-scrollbar resize-none",
        "border-none outline-none focus:outline-none",
        "dark:bg-neutral-800 dark:text-gray-500 md:dark:bg-neutral-900/30",
        {
          /* Styles to apply when Markdown Display pane is hidden 👇 */
          /* paneVisible : initially TRUE on app load */
          "md:max-w-4xl md:dark:bg-neutral-800":
            !paneVisible.markdownPaneVisibility,
        }
      )}
      id="editor"
      name="editor"
      autoComplete="off"
      spellCheck="true"
      placeholder="Write some Markdown..."
      aria-label="input box to enter markdown"
      value={currentPost?.content}
      onChange={handleChange}
      onKeyDown={(event) =>
        event?.key == "Tab" && insertTabForTextarea(event, tabInputHandler)
      }
    />
  );
};
