import { useEffect } from "react";
import { useAtom } from "jotai";
import { appDataAtom } from "../store/appState";

export const useIdValidator = (id: string | undefined) => {
  const [appData] = useAtom(appDataAtom);

  useEffect(() => {
    const isValidId = appData.some((post) => post.id === id);

    if (!isValidId && id && appData.length > 0) {
      throw new Response(`ID does not exist`, {
        status: 404,
        statusText: "Not Found",
      });
    }
  }, [appData, id]);
};
