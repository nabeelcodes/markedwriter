export const getCurrentPost = (appData: Post[], pageId: string | undefined) => {
  const currentPost = appData?.find((post) => post.id === pageId);
  return currentPost;
};
