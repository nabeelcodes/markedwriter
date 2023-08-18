import { useAtom } from "jotai";
import { appDataAtom } from "../store/appState";
import { getParsedMarkdown } from "../utilities/getParsedMarkdown";
import { cn } from "../utilities/classNameHelper";

type renderedMarkdownProps = {
  pageId: string | undefined;
};

export const RenderedMarkdown = ({ pageId }: renderedMarkdownProps) => {
  const stateVar = true; // Get this from ASIDE remark-GFM

  const [appData] = useAtom(appDataAtom);
  /* Find the Post corresponding to the current page */
  const currentPost = appData?.find((post) => post.id === pageId);
  const contentToParse = currentPost?.content;
  const parsedMarkdown = getParsedMarkdown(contentToParse, stateVar);

  return (
    <section
      className={cn(
        "hidden md:block",
        "grow basis-[50%] py-8 xl:p-10",
        "border-l border-gray-200 dark:border-neutral-600"
      )}>
      <article
        dangerouslySetInnerHTML={{
          __html: parsedMarkdown ?? "Write some Markdown in the left panel",
        }}
        className={cn(
          "mx-auto max-w-xs lg:max-w-sm xl:max-w-none",
          "prose prose-neutral dark:prose-invert"
        )}></article>
    </section>
  );
};
