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

          <div className="mt-4 flex items-center justify-between gap-x-4 text-sm md:text-base">
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
              onClick={handleDelete}>
              Delete Permanently
            </button>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
