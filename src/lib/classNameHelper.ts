import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/*
This function merges functionality from clsx and twMerge
clsx: used for conditional css
twMerge: used for replacing repetitive styles
*/

export const cn = (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes));
};
