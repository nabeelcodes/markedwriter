import { unified } from "unified";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import emoji from "remark-emoji";
import { useAtom } from "jotai";
import { appDataAtom } from "../store/appState";
import { cn } from "../utilities/classNameHelper";

type renderedMarkdownProps = {
  pageId: string | undefined;
};

const getParsedMarkdown = (content: string | undefined, stateVar: boolean) => {
  if (!content) return;

  const parsedContent = unified()
    .use(remarkParse)
    // .use(() => {
    //   return (tree) => {
    //     tree.children.map((node) => {
    //       if (node.type === "heading" && node.depth === 2) {
    //         const id = node.children[0].value;
    //         console.log(id);
    //       }
    //     });
    //   };
    // })
    .use(remarkRehype, {
      allowDangerousHtml: stateVar,
    })
    .use(emoji, {
      emoticon: true,
    })
    .use(stateVar ? remarkGfm : null)
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .processSync(content);

  return parsedContent;
};

export const RenderedMarkdown = ({ pageId }: renderedMarkdownProps) => {
  const stateVar = true; // Get this from ASIDE remark-GFM

  const [appData] = useAtom(appDataAtom);
  /* Find the Post corresponding to the current page */
  const currentPost = appData?.find((post) => post.id === pageId);
  const parsedMarkdown = getParsedMarkdown(currentPost?.content, stateVar);

  return (
    <section
      className={cn(
        "hidden md:block",
        "grow basis-[45%] py-8 xl:p-8",
        "border-l border-gray-200 dark:border-neutral-600"
      )}>
      <article
        dangerouslySetInnerHTML={{ __html: parsedMarkdown ?? "" }}
        className={cn(
          "max-w-xs lg:max-w-sm xl:max-w-none",
          "mx-auto"
        )}></article>
    </section>
  );
};
