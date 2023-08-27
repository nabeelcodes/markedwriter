// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const insertTabForTextarea = (
  event: React.KeyboardEvent<HTMLTextAreaElement>,
  tabInputHandler: (updatedPostContent: string) => void
) => {
  event.preventDefault();
  const textArea = event.target;
  const { selectionStart, selectionEnd } = textArea;
  const newTextareaContent =
    textArea.value.substring(0, selectionStart) +
    "  " + // Edit this for tab space, currently 2
    textArea.value.substring(selectionEnd, textArea.value.length);
  textArea.focus();
  textArea.value = newTextareaContent;
  textArea.setSelectionRange(selectionStart + 2, selectionStart + 2);
  tabInputHandler(newTextareaContent);
};
