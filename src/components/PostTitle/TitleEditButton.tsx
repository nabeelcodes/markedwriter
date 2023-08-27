import * as RadixDialog from "@radix-ui/react-dialog";
import { useAtom } from "jotai";
import { dialogStateAtom } from "../../store/appState";
import { EditIconSVG } from "../../assets/EditIconSVG";
import { TitleInput } from "./TitleInput";
import { cn } from "../../lib/classNameHelper";

export const TitleEditButton = () => {
  const [openRadixDialog, setOpenRadixDialog] = useAtom(dialogStateAtom);

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
          <RadixDialog.Title className="mb-6 text-center text-2xl font-bold">
            Rename File
          </RadixDialog.Title>

          <TitleInput />
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
