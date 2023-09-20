import React from "react";

type funcProps = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  targetRef: React.RefObject<HTMLSpanElement>,
  offset: {
    offsetX: number;
    offsetY: number;
  }
) => void;

export const handleMousemove: funcProps = (
  event,
  targetRef,
  { offsetX, offsetY }
) => {
  if (targetRef?.current) {
    targetRef.current.style.left = `${event.clientX + offsetX}px`;
    targetRef.current.style.top = `${event.clientY + offsetY}px`;
  }
};
