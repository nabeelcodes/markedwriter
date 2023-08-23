import * as RadixDialog from "@radix-ui/react-dialog";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { appDataAtom, dialogStateAtom } from "../store/appState";
import { EditIconSVG } from "../assets/EditIconSVG";
import { TitleInput } from "./TitleInput";
import { cn } from "../utilities/classNameHelper";

export const TitleEditButton = () => {
  const { id } = useParams();
  const [appData] = useAtom(appDataAtom);
  const [openRadixDialog, setOpenRadixDialog] = useAtom(dialogStateAtom);
  /* Find the Post corresponding to the current page */
  const currentPost = appData?.find((post) => post.id === id);

  return (
    <RadixDialog.Root open={openRadixDialog} onOpenChange={setOpenRadixDialog}>
      <RadixDialog.Trigger asChild>
        <button className="h-full px-4 py-3 xl:py-3">
          <EditIconSVG />
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
            "rounded-lg p-6 text-neutral-800 shadow-lg dark:text-gray-300",
            "border border-gray-100 focus:outline-none dark:border-gray-600",
            "fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]",
            "data-[state=open]:animate-contentShow"
          )}>
          <RadixDialog.Title className="mb-6 text-center text-xl font-bold">
            Rename File
          </RadixDialog.Title>

          <TitleInput
            currentPageTitle={currentPost?.title}
            currentPageId={currentPost?.id}
          />
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
