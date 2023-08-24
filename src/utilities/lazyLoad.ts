import { lazy } from "react";

export const lazyLoad = (path: string, namedExport?: string) => {
  return lazy(async () => {
    const promise = import(
      /* @vite-ignore */
      path
    );

    if (namedExport) {
      const module = await promise;
      return { default: module[namedExport] };
    } else {
      return promise;
    }
  });
};
