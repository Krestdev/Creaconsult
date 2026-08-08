import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImageUrl(url?: string | null) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = process.env.NEXT_IMAGE_BASE;
  if (!base || base === "undefined") {
    return url;
  }
  return `${base.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;
}
