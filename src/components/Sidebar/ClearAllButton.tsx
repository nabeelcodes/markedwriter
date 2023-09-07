import * as RadixDialog from "@radix-ui/react-dialog";
import { useParams } from "react-router-dom";
import { forwardRef, useMemo, useState } from "react";
import { useAtom } from "jotai";
import { appDataAtom } from "../../store/appState";
import { getCurrentPost } from "../../lib/getCurrentPost";
import { updatePostContent } from "../../lib/updatePostContent";
import { DeleteIcon } from "../../assets/DeleteIconSVG";
import { cn } from "../../lib/classNameHelper";

type ClearAllButtonProps = {
  onMobile?: boolean;
};

type Ref = HTMLButtonElement;

export const ClearAllButton = forwardRef<Ref, ClearAllButtonProps>(
  ({ onMobile }, forwardedRef) => {
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
      <RadixDialog.Root
        open={radixDialogOpen}
        onOpenChange={setRadixDialogOpen}>
        <RadixDialog.Trigger asChild>
          <button
            ref={forwardedRef}
            className={cn(
              "group relative grid aspect-square h-12 place-content-center rounded border shadow-sm dark:border-red-600 dark:bg-red-600/10",
              "hover:xl:shadow-md dark:hover:xl:shadow-red-800",
              // classes for disabled state 👇
              "dark:disabled:border-neutral-600 dark:disabled:bg-neutral-800",
              {
                "border-none bg-transparent shadow-none dark:bg-transparent":
                  onMobile,
              }
            )}
            disabled={isDisabled}>
            {/* Tooltip 👇 */}
            <span
              className={cn(
                "hidden xl:block",
                "pointer-events-none absolute top-[0.5rem] whitespace-nowrap rounded border bg-white px-3 py-1 text-sm font-bold shadow-md",
                "text-red-500 dark:border-neutral-600 dark:bg-neutral-800",
                "translate-x-14 translate-y-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
              )}>
              Clear all content
            </span>

            <DeleteIcon disabled={isDisabled} />
          </button>
        </RadixDialog.Trigger>

        <RadixDialog.Portal>
          <RadixDialog.Overlay className="fixed inset-0 z-30 backdrop-blur-[2px] data-[state=open]:animate-overlayShow" />

          <RadixDialog.Content
            className={cn(
              "md:frosted-glass-bg",
              "z-50",
              "w-full max-w-[360px] md:max-w-[540px]",
              "bg-white dark:bg-neutral-800",
              "rounded-lg p-6 text-center text-neutral-800 shadow-lg dark:text-gray-300",
              "border border-gray-100 focus:outline-none dark:border-gray-600",
              "fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]",
              "data-[state=open]:animate-contentShow",
              "data-[state=closed]:animate-contentHide"
            )}>
            <RadixDialog.Title className="mb-6 text-center text-2xl font-bold">
              Delete Content
            </RadixDialog.Title>

            <p className="text-xs md:text-base">
              Are you sure you want to clear all content?
            </p>

            <blockquote className="mt-4 rounded bg-red-600/20 p-4 text-xs font-bold text-red-500 md:text-base">
              <span className="hidden md:inline-block">
                ⚠️ Caution&nbsp;:&nbsp;
              </span>
              <span className="md:hidden">⚠️&nbsp;</span>
              Content once deleted will be un-recoverable
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
                  "dark:border-white dark:bg-white dark:text-black",
                  "whitespace-nowrap"
                )}
                onClick={handleClick}>
                Delete Permanently
              </button>
            </div>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    );
  }
);
