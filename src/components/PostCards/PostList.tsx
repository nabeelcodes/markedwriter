import { useAtom } from "jotai";
import { appDataAtom, postStyleAtom } from "../../store/appState";
import { GridIconSVG } from "../../assets/GridIconSVG";
import { ListIconSVG } from "../../assets/ListIconSVG";
import { PostItem } from "./PostItem";
import { cn } from "../../lib/classNameHelper";

export const PostList = () => {
  const [appData] = useAtom(appDataAtom);
  const [postStyle, setPostStyle] = useAtom(postStyleAtom);
  const isGridMode = postStyle === "grid";
  /* Sorting appData in reverse by id */
  const sortedAppData = [...appData]
    .sort((a, b) => a.id.localeCompare(b.id))
    .reverse();

  return (
    <section className="mb-8">
      <div className="mt-6 flex items-center justify-end gap-2">
        <button
          className="rounded border p-2 dark:border-neutral-600"
          onClick={() => setPostStyle("list")}>
          <ListIconSVG />
        </button>
        <button
          className="rounded border p-2 dark:border-neutral-600"
          onClick={() => setPostStyle("grid")}>
          <GridIconSVG />
        </button>
      </div>

      <ul
        className={cn("mt-4 flex flex-col gap-y-4 rounded-lg", {
          "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4": isGridMode,
        })}>
        {sortedAppData.map(({ id, title, date }) => (
          <PostItem
            key={id}
            postId={id}
            dateToDisplay={date}
            titleToDisplay={title}
          />
        ))}
      </ul>
    </section>
  );
};
