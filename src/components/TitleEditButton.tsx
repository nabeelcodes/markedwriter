import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
} from "@radix-ui/react-dialog";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { appDataAtom, dialogStateAtom } from "../store/appState";
import { EditIconSVG } from "../assets/EditIconSVG";
import { TitleInput } from "./TitleInput";

export const TitleEditButton = () => {
  const { id } = useParams();
  const [appData] = useAtom(appDataAtom);
  const [openRadixDialog, setOpenRadixDialog] = useAtom(dialogStateAtom);
  /* Find the Post corresponding to the current page */
  const currentPost = appData?.find((post) => post.id === id);

  return (
    <Root open={openRadixDialog} onOpenChange={setOpenRadixDialog}>
      <Trigger asChild>
        <button className="h-full px-4 py-3 xl:py-3">
          <EditIconSVG />
        </button>
      </Trigger>

      <Portal>
        <Overlay className="fixed inset-0 backdrop-blur-[2px] data-[state=open]:animate-overlayShow" />

        <Content className="fixed left-[50%] top-[50%] w-max max-w-[540px] translate-x-[-50%] translate-y-[-50%] rounded-lg border border-gray-100 bg-white p-6 text-neutral-800 shadow-lg focus:outline-none data-[state=open]:animate-contentShow dark:bg-neutral-800 dark:text-gray-300">
          <Title className="mb-6 text-center text-xl font-bold">
            Rename File
          </Title>

          <TitleInput
            currentPageTitle={currentPost?.title}
            currentPageId={currentPost?.id}
          />
        </Content>
      </Portal>
    </Root>
  );
};
