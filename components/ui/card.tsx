import type { HTMLAttributes } from "react";
import type { Tone } from "@/lib/content";
import { cn } from "@/lib/utils";

type CardTone = Tone | "slate";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** "accent"/"tertiary" gets a red glow + accent border; others stay neutral glass. */
  tone?: CardTone;
  /** Adds a lift + glow on hover. */
  interactive?: boolean;
};

/**
 * Glassmorphic panel — translucent dark fill, hairline border, soft depth
 * shadow. Red tones glow; neutral tones stay cool.
 */
export function Card({
  tone = "slate",
  interactive = false,
  className,
  children,
  ...props
}: CardProps) {
  const glow = tone === "accent" || tone === "tertiary";

  return (
    <div
      className={cn(
        "relative rounded-2xl glass",
        glow ? "border-accent/25 shadow-glow" : "shadow-soft",
        interactive &&
          "transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
