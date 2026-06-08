import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Glass text input — translucent dark fill, hairline border, red glow + accent
 * border on focus.
 */
export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, type = "text", ...props }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "glass h-12 w-full rounded-xl px-4 text-base text-foreground",
        "placeholder:text-muted-foreground",
        "transition-all duration-200 ease-out-soft",
        "focus:border-accent/60 focus:shadow-glow focus:outline-none",
        className,
      )}
      {...props}
    />
  );
});

/** Bold, uppercase, tracked label. */
export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
