import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Centered content column — the "stable grid" the decoration lives around. */
export function Container({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Section shell: relative positioning context for absolutely-placed
 * decoration, with generous vertical rhythm. Decoration goes as a direct
 * child (full-bleed); content goes inside a <Container>.
 */
export function Section({
  className,
  children,
  id,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      id={id}
      className={cn("relative py-20 sm:py-28", className)}
      {...props}
    >
      {children}
    </section>
  );
}
