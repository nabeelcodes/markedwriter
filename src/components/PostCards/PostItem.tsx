import { memo } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { appDataAtom, postStyleAtom } from "../../store/appState";
import { DeleteIcon } from "../../assets/DeleteIconSVG";
import { cn } from "../../lib/classNameHelper";

type postItemProps = {
  postId: string;
  dateToDisplay: string;
  titleToDisplay: string;
};

export const PostItem = memo(
  ({ postId, dateToDisplay, titleToDisplay }: postItemProps) => {
    const [appData, setAppData] = useAtom(appDataAtom);
    const [postStyle] = useAtom(postStyleAtom);
    const isGridMode = postStyle === "grid";

    const handleDelete = () => {
      const filteredAppData = appData.filter((post) => post.id !== postId);
      setAppData(filteredAppData);
    };

    return (
      <li
        className={cn(
          "popOnHover",
          "flex items-center justify-between",
          "rounded-lg border border-gray-200 text-neutral-800 shadow-sm",
          "dark:border-neutral-600 dark:text-gray-300",
          {
            "flex-col": isGridMode,
          }
        )}>
        <Link
          to={`/${postId}`}
          key={postId}
          className={cn("block w-full p-4", {
            "px-4 pb-16 pt-4": isGridMode,
          })}>
          <h2 className="text-lg font-bold">{titleToDisplay}</h2>
          <p className="mt-1 text-sm opacity-70">{dateToDisplay}</p>
        </Link>

        <button
          className={cn("h-24 bg-red-600/10 px-2", {
            "mb-2 mr-1 h-auto self-end bg-transparent p-2": isGridMode,
          })}
          onClick={handleDelete}>
          <DeleteIcon className="h-5 hover:opacity-80" />
        </button>
      </li>
    );
  }
);
