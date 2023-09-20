// eslint-disable-next-line no-undef
export const downloadFile = (file: Post | undefined) => {
  if (!file) return;

  const fileTitle = file.title;
  const markdownToDownload = file.content;
  /* Create a new Blob object with the text content */
  const blob = new Blob([markdownToDownload], { type: "text/plain" });
  /* Create a temporary <a> element and set its download attribute to specify the file name */
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${fileTitle}.md`;
  /* Programmatically click the link to trigger the download */
  link.click();
  /* Clean up the URL.createObjectURL by revoking the object URL after some time */
  setTimeout(() => {
    URL.revokeObjectURL(link.href);
  }, 100);
};
