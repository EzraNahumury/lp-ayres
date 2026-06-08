import type { HTMLAttributes, ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

/** Small glass pill chip. */
export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/**
 * The "most popular" badge — a glossy red-gradient pill with a glow and a
 * sparkle, replacing the old sticker star-burst.
 */
export function StarBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(180deg,var(--color-accent-from),var(--color-accent-to))] px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-btn",
        className,
      )}
    >
      <Sparkles className="size-3.5" strokeWidth={2.5} />
      {children}
    </span>
  );
}
