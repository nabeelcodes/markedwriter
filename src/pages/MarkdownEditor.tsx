import { useAtom } from "jotai";
import { useParams } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";
import { appDataAtom } from "../store/appState";

export const MarkdownEditor = () => {
  const { id } = useParams();
  const [appData, setAppData] = useAtom(appDataAtom);
  /* Find the Post corresponding to the current page */
  const currentPost = appData?.find((post) => post.id === id);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const valueOfAppData = [...appData];
    const indexOfCurrentPost = valueOfAppData.findIndex(
      (element) => element?.id === currentPost?.id
    );
    valueOfAppData[indexOfCurrentPost].content = e?.target?.value;
    setAppData(valueOfAppData);
  };

  return (
    <section className="font-sans text-neutral-800 dark:text-gray-300">
      <PageTitle />

      <textarea
        className="mt-4 h-28 w-80 bg-red-100 p-2 outline-none"
        name="editor"
        autoComplete="off"
        spellCheck="true"
        placeholder="Write some Markdown..."
        aria-label="input box to enter markdown"
        value={currentPost?.content}
        onChange={handleChange}
      />
    </section>
  );
};
