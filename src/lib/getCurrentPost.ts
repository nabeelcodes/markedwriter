export const getCurrentPost = (
  appData: AppData,
  pageId: string | undefined
) => {
  const currentPost = appData?.find((post) => post.id === pageId);
  return currentPost;
};
