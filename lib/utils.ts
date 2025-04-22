import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const CODE_TEXT =
  "bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
