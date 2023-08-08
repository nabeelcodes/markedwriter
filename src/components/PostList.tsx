import { useAtom } from "jotai";
import { appDataAtom } from "../store/appState";
import { PostItem } from "./PostItem";

export const PostList = () => {
  const [appData, setAppData] = useAtom(appDataAtom);

  return (
    <section>
      <button
        className="mt-6 w-full rounded-md bg-red-500 p-3 text-gray-100 hover:opacity-90"
        onClick={() => {
          setAppData([]);
        }}>
        Delete All Posts
      </button>

      <ul className="mt-4 flex flex-col gap-y-4 rounded-lg">
        {appData.map(({ id, title, date }) => {
          /* Reducing Title length to fit available space */
          const titleToDisplay =
            title?.length < 20 ? title : `${title.substring(0, 30)}...`;

          return (
            <PostItem
              key={id}
              postId={id}
              dateToDisplay={date}
              titleToDisplay={titleToDisplay}
            />
          );
        })}
      </ul>
    </section>
  );
};
