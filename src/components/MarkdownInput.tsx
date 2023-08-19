import { useAtom } from "jotai";
import { appDataAtom } from "../store/appState";
import { insertTabForTextarea } from "../utilities/tabHelper";
import { cn } from "../utilities/classNameHelper";

type markdownInputProps = {
  pageId: string | undefined;
};

export const MarkdownInput = ({ pageId }: markdownInputProps) => {
  const [appData, setAppData] = useAtom(appDataAtom);
  /* Find the Post corresponding to the current page */
  const currentPost = appData?.find((post) => post.id === pageId);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const valueOfAppData = [...appData];
    const indexOfCurrentPost = valueOfAppData.findIndex(
      (element) => element?.id === currentPost?.id
    );
    valueOfAppData[indexOfCurrentPost].content = e?.target?.value;
    setAppData(valueOfAppData);
  };

  return (
    <textarea
      className={cn(
        "grow basis-1/2",
        "font-mono text-gray-400",
        "mx-auto max-w-lg p-8 md:max-w-full",
        "disable-scrollbar resize-none",
        "border-none outline-none focus:outline-none",
        "dark:bg-neutral-800 dark:text-gray-500"
      )}
      id="editor"
      name="editor"
      autoComplete="off"
      spellCheck="true"
      placeholder="Write some Markdown..."
      aria-label="input box to enter markdown"
      value={currentPost?.content}
      onChange={handleChange}
      onKeyDown={insertTabForTextarea}
    />
  );
};
