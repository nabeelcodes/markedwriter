export const insertTabForTextarea = (
  event: React.KeyboardEvent<HTMLTextAreaElement>
) => {
  if (event.key == "Tab") {
    // event.preventDefault();

    // const textArea = event.target;
    // const { selectionStart, selectionEnd } = textArea;
    // const newText =
    //   textArea.value.substring(0, selectionStart) +
    //   "  " + // Edit this for tab space, currently 2
    //   textArea.value.substring(selectionEnd, textArea.value.length);

    // textArea.focus();

    // textArea.value = newText;

    // textArea.setSelectionRange(selectionStart + 2, selectionStart + 2);

    // setAppData(newText);
    console.log(`Tab pressed`);
    console.log(event.target);
  }
};
