import { useAtom } from "jotai";
import { GFMAtom, RRAtom, appDataAtom } from "../../store/appState";
import { getCurrentPost } from "../../lib/getCurrentPost";
import { getParsedMarkdown } from "../../lib/getParsedMarkdown";
import { cn } from "../../lib/classNameHelper";
import cssStyles from "../../styles/renderedMarkdown.module.css";

type renderedMarkdownProps = {
  pageId: string | undefined;
};

export const RenderedMarkdown = ({ pageId }: renderedMarkdownProps) => {
  const [appData] = useAtom(appDataAtom);
  const [gfmState] = useAtom(GFMAtom);
  const [rrState] = useAtom(RRAtom);

  const contentToParse = getCurrentPost(appData, pageId)?.content;
  const parsedMarkdown = getParsedMarkdown(contentToParse, gfmState, rrState);

  return (
    <section
      className={cn(
        "hidden md:block",
        "shrink grow basis-1/2 py-8 pb-20 xl:p-10 xl:pb-20",
        "border-l border-gray-200 dark:border-neutral-600"
      )}>
      <article
        dangerouslySetInnerHTML={{
          __html: parsedMarkdown ?? "",
        }}
        className={cn(
          cssStyles,
          "mx-8 max-w-xs md:mx-auto lg:max-w-sm xl:max-w-none",
          "prose prose-violet dark:prose-invert",
          // prose - anchor tag modifications 👇
          "prose-a:border-b-2 prose-a:border-violet-500 prose-a:pb-[0.2rem] prose-a:no-underline hover:prose-a:opacity-80",
          // prose - inline-code tag modifications 👇
          "prose-code:rounded-md prose-code:px-2 prose-code:py-1",
          "prose-code:bg-green-100 prose-code:font-normal prose-code:text-green-600",
          "dark:prose-code:bg-green-600/10 dark:prose-code:text-green-400",
          "prose-code:before:content-[''] prose-code:after:content-['']",
          // prose - code-block(pre > code) modifications 👇
          "[&>pre>code]:px-0",
          "[&>pre>code]:bg-transparent [&>pre>code]:text-green-600 dark:[&>pre>code]:bg-transparent dark:[&>pre>code]:text-green-400",
          // prose - pre tag modifications 👇
          "prose-pre:border prose-pre:border-gray-200 prose-pre:bg-transparent",
          "dark:prose-pre:border-neutral-600",
          // prose - table modifications 👇
          "prose-table:border prose-th:p-4 prose-th:text-left prose-th:text-lg prose-td:px-4 prose-td:py-3 prose-td:text-left dark:prose-table:border-gray-600",
          // prose - th,td border-left modifications 👇
          "[&>table>thead>tr>th:not(:first-of-type)]:border-l",
          "[&>table>tbody>tr>td:not(:first-of-type)]:border-l",
          "dark:[&>table>thead>tr>th:not(:first-of-type)]:border-neutral-600",
          "dark:[&>table>tbody>tr>td:not(:first-of-type)]:border-neutral-600"
        )}
      />
    </section>
  );
};
