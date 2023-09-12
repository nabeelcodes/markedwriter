import * as RadixDialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useAtom } from "jotai";
import { appDataAtom } from "../../store/appState";
import { DeleteIcon } from "../../assets/DeleteIconSVG";
import { cn } from "../../lib/classNameHelper";

type DeletePostButtonProps = {
  isGridMode: boolean;
  postId: string;
};

export const DeletePostButton = ({
  isGridMode,
  postId,
}: DeletePostButtonProps) => {
  const [appData, setAppData] = useAtom(appDataAtom);
  const [radixDialogOpen, setRadixDialogOpen] = useState(false);

  const handleDelete = () => {
    const filteredAppData = appData.filter((post) => post.id !== postId);
    setAppData(filteredAppData);
    setRadixDialogOpen(false);
  };

  return (
    <RadixDialog.Root open={radixDialogOpen} onOpenChange={setRadixDialogOpen}>
      <RadixDialog.Trigger asChild>
        <button
          className={cn("h-24 bg-red-600/10 px-2", {
            "absolute bottom-0 right-0 z-20 h-auto bg-transparent py-3":
              isGridMode,
          })}>
          <DeleteIcon className="h-5 hover:opacity-80" />
        </button>
      </RadixDialog.Trigger>

      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-30 backdrop-blur-[2px] data-[state=open]:animate-overlayShow dark:bg-transparent max-md:bg-gray-900/50" />

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
            Delete File
          </RadixDialog.Title>

          <p className="text-sm md:text-base">
            Are you sure you want to delete this file?
          </p>

          <blockquote className="mt-3 rounded bg-red-600/20 p-3 text-xs font-bold text-red-500 md:mt-4 md:p-4 md:text-base">
            <span className="hidden md:inline-block">
              ⚠️ Caution&nbsp;:&nbsp;
            </span>
            <span className="md:hidden">⚠️&nbsp;</span>
            File once deleted will be un-recoverable
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
              onClick={handleDelete}>
              Delete Permanently
            </button>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
