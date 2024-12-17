import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";

/** A base type for all UI components.  */
export type UIBaseType = {
  asChild?: boolean;
  loading?: boolean;
};

/** Utility to handle merging and overwriting tailwind classes correctly. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
