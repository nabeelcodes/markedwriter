// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { unified } from "unified";
import { VFile } from "vfile";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype";
import emoji from "remark-emoji";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import sanitizeSchema from "./sanitizeSchema";

type getParsedMarkdownProps = (
  content: string | undefined,
  gfmState: boolean,
  rrState: boolean
) => VFile | null;

export const getParsedMarkdown: getParsedMarkdownProps = (
  content,
  gfmState,
  rrState
) => {
  if (!content) return null;

  const parsedContent = unified()
    .use(remarkParse)
    .use(remarkRehype, {
      allowDangerousHtml: rrState,
    })
    .use(rehypeHighlight, {
      detect: false,
      ignoreMissing: true,
    })
    .use(emoji, {
      emoticon: true,
    })
    .use(gfmState ? remarkGfm : null)
    .use(rehypeRaw)
    .use(rehypeSanitize, sanitizeSchema)
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
