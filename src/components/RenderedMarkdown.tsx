import { useAtom } from "jotai";
import { appDataAtom } from "../store/appState";
import { getParsedMarkdown } from "../utilities/getParsedMarkdown";
import { cn } from "../utilities/classNameHelper";

type renderedMarkdownProps = {
  pageId: string | undefined;
};

const RenderedMarkdown = ({ pageId }: renderedMarkdownProps) => {
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
        "shrink grow basis-1/2 py-8 xl:p-10",
        "border-l border-gray-200 dark:border-neutral-600"
      )}>
      <article
        dangerouslySetInnerHTML={{
          __html: parsedMarkdown ?? "",
        }}
        className={cn(
          "mx-8 max-w-xs md:mx-auto lg:max-w-sm xl:max-w-none",
          "prose prose-violet dark:prose-invert",
          // prose - anchor tag modifications 👇
          "prose-a:border-b-2 prose-a:border-violet-500 prose-a:no-underline",
          // prose - inline-code tag modifications 👇
          "prose-code:rounded prose-code:bg-green-200 prose-code:px-2 prose-code:py-1 dark:prose-code:text-neutral-800",
          "prose-code:before:content-[''] prose-code:after:content-['']",
          // prose - code-block(pre > code) modifications 👇
          "[&>pre>code]:bg-transparent dark:[&>pre>code]:text-gray-300",
          "[&>pre>code]:px-0"
        )}></article>
    </section>
  );
};

export default RenderedMarkdown;
