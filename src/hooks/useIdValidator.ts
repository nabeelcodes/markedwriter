import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { appDataAtom } from "../store/appState";

export const useIdValidator = (id: string | undefined) => {
  const navigate = useNavigate();
  const [appData] = useAtom(appDataAtom);

  /* Redirect if :id is invalid or random */
  useEffect(() => {
    const isValidId = appData.some((post) => post.id === id);
    if (!isValidId && id) {
      navigate("/");
    }
  }, [appData, id, navigate]);
};
