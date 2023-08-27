// import * as RadixDialog from '@radix-ui/react-dialog';
import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
} from "@radix-ui/react-dialog";
import { CloseIcon } from "../../assets/CloseIconSVG";
import { CmdIcon } from "../../assets/CmdIconSVG";

export const NavItemShortcuts = () => {
  return (
    <Root>
      <Trigger asChild>
        <li className="h-[19px] list-none">
          <button aria-label="Shortcuts Button">
            <CmdIcon />
          </button>
        </li>
      </Trigger>

      <Portal>
        <Overlay className="fixed inset-0 z-30 backdrop-blur-[2px] data-[state=open]:animate-overlayShow" />

        <Content className="md:frosted-glass-bg fixed left-[50%] top-[50%] z-30 w-max max-w-[540px] translate-x-[-50%] translate-y-[-50%] rounded-lg border border-gray-100 px-6 py-6 text-neutral-800 shadow-lg focus:outline-none data-[state=open]:animate-contentShow dark:border-gray-600 dark:text-gray-300">
          <Title className="mb-4 border-b-2 pb-2 text-2xl font-bold dark:border-b-gray-600">
            Keyboard Shortcuts
          </Title>

          <Description>
            To increase your productivity when working with markdown, you can
            use the following keyboard shortcuts by pressing <br />
            <code className="rounded border px-1 font-mono">Cmd + Ctrl</code> on
            a Mac or{" "}
            <code className="rounded border px-1 font-mono">Alt + Ctrl</code> on
            Windows :
          </Description>

          <ul className="list-disc p-4 pb-0">
            {[...Array(8)].map((_, i) => (
              <li key={i} className="mb-2">
                <code className="rounded border px-1 font-mono">t</code> :
                insert a table
              </li>
            ))}
          </ul>

          <Close asChild>
            <button
              aria-label="Close"
              className="absolute right-4 top-4 opacity-70">
              <CloseIcon />
            </button>
          </Close>
        </Content>
      </Portal>
    </Root>
  );
};
