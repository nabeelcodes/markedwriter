import * as RadixDialog from "@radix-ui/react-dialog";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { useAtom } from "jotai";
import { appDataAtom } from "../../store/appState";
import { getCurrentPost } from "../../lib/getCurrentPost";
import { updatePostContent } from "../../lib/updatePostContent";
import { DeleteIcon } from "../../assets/DeleteIconSVG";
import { cn } from "../../lib/classNameHelper";

export const ClearAllButton = () => {
  const { id } = useParams();
  const [appData, setAppData] = useAtom(appDataAtom);
  const [radixDialogOpen, setRadixDialogOpen] = useState(false);

  /* Setting disabled state for ClearAll Button based on current Post content's length */
  const isDisabled = useMemo(() => {
    const currentPost = getCurrentPost(appData, id);
    if (currentPost?.content && currentPost?.content.length > 0) {
      return false;
    } else {
      return true;
    }
  }, [appData, id]);

  const handleClick = () => {
    const UpdatedAppData = updatePostContent(appData, id, "");
    setAppData(UpdatedAppData);
    setRadixDialogOpen(false);
  };

  return (
    <RadixDialog.Root open={radixDialogOpen} onOpenChange={setRadixDialogOpen}>
      <RadixDialog.Trigger asChild>
        <button
          className={cn(
            "dark grid aspect-square h-12 place-content-center rounded border shadow-sm dark:border-red-600 dark:bg-red-600/10",
            "hover:lg:shadow-md dark:hover:lg:shadow-red-800",
            // classes for disabled state 👇
            "dark:disabled:border-neutral-600 dark:disabled:bg-neutral-800"
          )}
          disabled={isDisabled}>
          <DeleteIcon disabled={isDisabled} />
        </button>
      </RadixDialog.Trigger>

      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-30 backdrop-blur-[2px] data-[state=open]:animate-overlayShow" />

        <RadixDialog.Content
          className={cn(
            "md:frosted-glass-bg",
            "z-30",
            "w-max max-w-[540px]",
            "bg-white dark:bg-neutral-800",
            "rounded-lg p-6 text-center text-neutral-800 shadow-lg dark:text-gray-300",
            "border border-gray-100 focus:outline-none dark:border-gray-600",
            "fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]",
            "data-[state=open]:animate-contentShow"
          )}>
          <RadixDialog.Title className="mb-6 text-center text-2xl font-bold">
            Delete Content
          </RadixDialog.Title>

          <p>Are you sure you want to clear all content?</p>

          <blockquote className="mt-4 rounded bg-red-600/20 p-4 font-bold text-red-500">
            ⚠️ Caution : Content once deleted will be un-recoverable
          </blockquote>

          <div className="mt-4 flex items-center justify-between gap-x-4">
            <RadixDialog.Close asChild>
              <button className="w-full rounded border px-4 py-2 font-bold">
                Cancel
              </button>
            </RadixDialog.Close>

            <button
              className={cn(
                "w-full rounded border px-4 py-2 font-bold",
                "border-black bg-black text-white",
                "dark:border-white dark:bg-white dark:text-black"
              )}
              onClick={handleClick}>
              Delete Permanently
            </button>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
