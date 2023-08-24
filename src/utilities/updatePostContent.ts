/*
A little helper function to update the `content` value of the `currentPost` in the global `appData` array.
*/
export const updatePostContent = (
  appData: AppData,
  pageId: string | undefined,
  updatedPostContent: string
) => {
  if (!pageId) return appData;

  const filteredAppData = appData?.filter((post) => post.id !== pageId);
  const currentPost = appData?.find((post) => post.id === pageId);

  const updatedCurrentPost = {
    id: currentPost?.id || "",
    title: currentPost?.title || "",
    content: updatedPostContent,
    date: currentPost?.date || "",
  };

  return [...filteredAppData, updatedCurrentPost];
};
