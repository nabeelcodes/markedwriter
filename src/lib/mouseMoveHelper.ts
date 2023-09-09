type funcProps = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ref: React.RefObject<HTMLSpanElement>,
  {
    offsetX,
    offsetY,
  }: {
    offsetX: number;
    offsetY: number;
  }
) => void;

export const handleMousemove: funcProps = (e, ref, { offsetX, offsetY }) => {
  if (ref?.current) {
    ref.current.style.left = `${e.clientX + offsetX}px`;
    ref.current.style.top = `${e.clientY + offsetY}px`;
  }
};
