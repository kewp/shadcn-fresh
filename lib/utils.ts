import { ClassValue, clsx } from "../deps/clsx.ts"
import { twMerge } from "../deps/tailwind-merge.ts"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}