import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Normalizes Contentstack asset URLs; if a relative URL is provided, returns as-is for dev.
// When you enable Contentstack, you can optionally set VITE_CONTENTSTACK_ASSET_BASE to prefix relative URLs.
export function normalizeAssetUrl(url?: string): string | undefined {
  if (!url) return url
  if (/^https?:\/\//i.test(url)) return url
  const base = import.meta.env.VITE_CONTENTSTACK_ASSET_BASE
  return base ? `${base.replace(/\/$/, '')}/${url.replace(/^\//, '')}` : url
}
