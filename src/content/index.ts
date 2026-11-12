import { en, type Copy } from "./en";
import { vi } from "./vi";

export type Lang = "en" | "vi";
export type { Copy };

/** Dictionary lookup: copy[lang] */
export const copy: Record<Lang, Copy> = { en, vi };
