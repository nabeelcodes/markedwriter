import { useEffect, useState } from "react";

export const useMousePosition = (htmlElementId: string) => {
  const [cursorPosition, setCursorPosition] = useState<{
    x: number | undefined;
    y: number | undefined;
  }>({
    x: 10000000,
    y: 10000000,
  });

  useEffect(() => {
    const htmlElement = document.getElementById(htmlElementId);

    const handleUpdate = (event: MouseEvent) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    htmlElement?.addEventListener("mousemove", handleUpdate);

    return () => {
      /* clean-up code for unmount */
      htmlElement?.removeEventListener("mousemove", handleUpdate);
    };
  }, [htmlElementId]);

  return { cursorPosition };
};
