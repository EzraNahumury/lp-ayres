import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Infinite horizontal marquee. The content is duplicated and the doubled
 * track is translated by -50%, giving a seamless loop. Pauses on hover and
 * stops moving (no flashing) under prefers-reduced-motion.
 */
export function Marquee({
  children,
  className,
  reverse = false,
  speed = "default",
  pauseOnHover = true,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: "default" | "slow";
  pauseOnHover?: boolean;
}) {
  const anim = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";

  const block = "flex shrink-0 items-center gap-10 pr-10";

  return (
    <div className={cn("group flex w-full overflow-hidden mask-fade-x", className)}>
      <div
        className={cn(
          "flex w-max shrink-0",
          anim,
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        <div className={block}>{children}</div>
        <div className={block} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
