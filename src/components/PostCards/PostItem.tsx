import { memo } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { postStyleAtom } from "../../store/appState";
import { DeletePostButton } from "./DeletePostButton";
import { cn } from "../../lib/classNameHelper";

type postItemProps = {
  postId: string;
  dateToDisplay: string;
  titleToDisplay: string;
};

export const PostItem = memo(
  ({ postId, dateToDisplay, titleToDisplay }: postItemProps) => {
    const [postStyle] = useAtom(postStyleAtom);
    const isGridMode = postStyle === "grid";

    return (
      <li
        className={cn(
          "popOnHover",
          "flex items-center justify-between",
          "rounded-lg border border-gray-200 text-neutral-800 shadow-sm",
          "dark:border-neutral-600 dark:text-gray-300",
          {
            "relative block": isGridMode,
          }
        )}>
        <Link
          to={`/${postId}`}
          key={postId}
          className={cn("block w-full p-4", {
            "px-4 pb-24 pt-4": isGridMode,
          })}>
          <h2
            className={cn(
              "overflow-x-hidden text-ellipsis whitespace-nowrap text-lg font-bold",
              "max-w-[23ch] sm:max-w-[44ch] md:max-w-[54ch] lg:max-w-[76ch]",
              {
                "max-w-[20ch]": isGridMode,
              }
            )}>
            {titleToDisplay}
          </h2>
          <p className="mt-1 text-sm opacity-70">{dateToDisplay}</p>
        </Link>

        <DeletePostButton isGridMode={isGridMode} postId={postId} />
      </li>
    );
  }
);
