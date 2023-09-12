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
                "border-none bg-transparent shadow-none dark:bg-transparent dark:disabled:bg-transparent":
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
          <RadixDialog.Overlay className="fixed inset-0 z-30 backdrop-blur-[2px] data-[state=open]:animate-overlayShow dark:bg-transparent max-md:bg-gray-900/10" />

          <RadixDialog.Content
            className={cn(
              "z-50",
              "md:frosted-glass-bg",
              // Position on vw < sm(640px) 👇
              "fixed max-sm:bottom-4 max-sm:left-5 max-sm:right-5",
              // Position on vw > sm(640px) 👇
              "sm:w-full sm:max-w-[540px]",
              "sm:left-[50%] sm:top-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]",
              "bg-white dark:bg-neutral-800",
              "rounded-lg p-6 text-center text-neutral-800 shadow-lg dark:text-gray-300",
              "border-2 border-white focus:outline-none dark:border dark:border-gray-600",
              // Animation on vw < sm(640px) 👇
              "max-sm:data-[state=open]:animate-contentShowSM",
              "max-sm:data-[state=closed]:animate-contentHideSM",
              // Animation on vw > sm(640px) 👇
              "data-[state=open]:animate-contentShow",
              "data-[state=closed]:animate-contentHide"
            )}>
            <RadixDialog.Title className="mb-5 text-center text-2xl font-bold md:mb-6">
              Delete Content
            </RadixDialog.Title>

            <p className="text-sm md:text-base">
              Are you sure you want to clear all content?
            </p>

            <blockquote className="mt-3 rounded bg-red-600/20 p-3 text-xs font-bold text-red-500 md:mt-4 md:p-4 md:text-base">
              <span className="hidden md:inline-block">
                ⚠️ Caution&nbsp;:&nbsp;
              </span>
              <span className="md:hidden">⚠️&nbsp;</span>
              Content once deleted will be un-recoverable
            </blockquote>

            <div className="mt-4 flex flex-col-reverse items-center justify-between gap-4 text-sm sm:flex-row md:text-base">
              <RadixDialog.Close asChild>
                <button className="w-full rounded border px-4 py-3 font-bold md:py-2">
                  Cancel
                </button>
              </RadixDialog.Close>

              <button
                className={cn(
                  "w-full rounded border px-4 py-3 font-bold md:py-2",
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
