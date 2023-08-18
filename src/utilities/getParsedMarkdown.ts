// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { unified } from "unified";
import { VFile } from "vfile";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import emoji from "remark-emoji";

type getParsedMarkdownProps = (
  content: string | undefined,
  stateVar: boolean
) => VFile | null;

export const getParsedMarkdown: getParsedMarkdownProps = (
  content,
  stateVar
) => {
  if (!content) return null;

  const parsedContent = unified()
    .use(remarkParse)
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

/*
.use(() => {
  return (tree) => {
    tree.children.map((node) => {
      if (node.type === "heading" && node.depth === 2) {
        const id = node.children[0].value;
        console.log(id);
      }
    });
  };
})
*/
