import { useAtom } from "jotai";
import { useParams } from "react-router-dom";
import { appDataAtom } from "../store/appState";
import { PageTitle } from "../components/PageTitle";
import { insertTabForTextarea } from "../utilities/tabHelper";

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
    <>
      <PageTitle />

      {/* 
        64.5px = Height of Header
        68.6px = Height of (PageTitle + mt-4)
      */}
      <section
        className="flex min-h-[calc(100vh-64.5px-68.6px)] md:min-h-[calc(100vh-64.5px)]"
        aria-label="wrapper for input box">
        <aside className="hidden w-20 grow bg-neutral-600 lg:block">
          Sidebar
        </aside>

        <textarea
          className="disable-scrollbar grow basis-1/2 resize-none border-none px-6 py-4 font-mono text-gray-600 outline-none focus:outline-none dark:bg-neutral-800 dark:text-gray-300"
          name="editor"
          autoComplete="off"
          spellCheck="true"
          placeholder="Write some Markdown..."
          aria-label="input box to enter markdown"
          value={currentPost?.content}
          onChange={handleChange}
          onKeyDown={insertTabForTextarea}
        />

        <article className="hidden basis-1/2 border-l border-gray-200 p-4 dark:border-neutral-600 md:block">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          molestias facilis beatae sunt esse commodi ea sequi aspernatur placeat
          accusantium laudantium neque cumque sit, voluptatem eligendi quam
          similique odio velit? Repellat odit, consequuntur qui dicta
          repellendus, eius iusto deleniti ratione nulla suscipit velit, id
          neque. Numquam repudiandae voluptates aspernatur odit quasi. Expedita
          cum distinctio ad dignissimos ratione quam asperiores praesentium amet
          fugiat perspiciatis! Praesentium dolore dolorem amet aut voluptate
          vero delectus quasi sapiente ullam cumque? Adipisci sunt repudiandae
          eius, error neque, eveniet quisquam repellendus, minima possimus
          cupiditate veniam dolores mollitia qui aliquid ab corporis
          perspiciatis assumenda asperiores expedita tenetur ex fugit voluptate
          beatae. Quis, error dicta ipsa ullam ipsum repellat iure modi, nemo
          quas eveniet tempore sapiente architecto qui, delectus repudiandae!
          Vel, animi veniam mollitia hic recusandae similique quos explicabo
          asperiores dicta perspiciatis nemo eaque odit. Recusandae laudantium
          rerum, dolorem nisi, similique atque reiciendis facilis maxime neque
          iusto quisquam molestiae sapiente delectus minus vero porro itaque
          distinctio et commodi a accusamus ea officia sunt optio! Nihil
          accusamus ipsum explicabo, voluptates odio nulla quas sequi porro
          facere ullam quidem maxime natus numquam recusandae esse inventore sed
          iusto iste laboriosam ab consequuntur! Aperiam vitae at dignissimos
          soluta fugit, reiciendis asperiores nostrum nesciunt.
        </article>
      </section>
    </>
  );
};
