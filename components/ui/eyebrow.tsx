import type { ReactNode } from "react";
import type { Tone } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Small uppercase section label in a glass chip. */
export function Eyebrow({
  className,
  children,
}: {
  /** Kept for API compatibility; no longer affects rendering. */
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "glass inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
