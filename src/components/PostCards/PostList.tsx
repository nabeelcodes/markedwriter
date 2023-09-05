import { useAtom } from "jotai";
import { appDataAtom, postStyleAtom } from "../../store/appState";
import { ListStylePicker } from "./ListStylePicker";
import { PostItem } from "./PostItem";
import { cn } from "../../lib/classNameHelper";

export const PostList = () => {
  const [appData] = useAtom(appDataAtom);
  const [postStyle] = useAtom(postStyleAtom);
  const isGridMode = postStyle === "grid";
  /* Sorting appData in reverse by id */
  const sortedAppData = [...appData]
    .sort((a, b) => a.id.localeCompare(b.id))
    .reverse();

  return (
    <section className="mb-8">
      <ListStylePicker isGridMode={isGridMode} />

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
