import { memo } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { appDataAtom } from "../../store/appState";
import { DeleteIcon } from "../../assets/DeleteIcon";

type postItemProps = {
  postId: string;
  dateToDisplay: string;
  titleToDisplay: string;
};

export const PostItem = memo(
  ({ postId, dateToDisplay, titleToDisplay }: postItemProps) => {
    const [appData, setAppData] = useAtom(appDataAtom);

    const handleDelete = () => {
      const filteredAppData = appData.filter((post) => post.id !== postId);
      setAppData(filteredAppData);
    };

    return (
      <li className="flex items-center justify-between rounded-lg border border-gray-200 text-neutral-800 dark:border-neutral-600 dark:text-gray-300">
        <Link to={`/${postId}`} key={postId} className="block w-full p-4">
          <h2 className="text-lg font-bold">{titleToDisplay}</h2>
          <p className="mt-1 text-sm opacity-70">{dateToDisplay}</p>
        </Link>

        <button className="h-24 bg-red-600/10 px-2" onClick={handleDelete}>
          <DeleteIcon className="h-5 hover:opacity-80" />
        </button>
      </li>
    );
  }
);
