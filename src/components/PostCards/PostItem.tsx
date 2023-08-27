import { memo } from "react";
import { Link } from "react-router-dom";

type postItemProps = {
  postId: string;
  dateToDisplay: string;
  titleToDisplay: string;
};

export const PostItem = memo(
  ({ postId, dateToDisplay, titleToDisplay }: postItemProps) => {
    return (
      <li className="rounded-lg border border-gray-200 text-neutral-800 dark:border-neutral-600 dark:text-gray-300">
        <Link to={`/${postId}`} key={postId} className="block p-4">
          <h2 className="text-lg font-bold">{titleToDisplay}</h2>
          <p className="mt-1 text-sm opacity-70">{dateToDisplay}</p>
        </Link>
      </li>
    );
  }
);
