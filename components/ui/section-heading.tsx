import type { ReactNode } from "react";
import type { Tone } from "@/lib/content";
import { Eyebrow } from "./eyebrow";
import { cn } from "@/lib/utils";

/** Shared section header: glass eyebrow chip, italic display title, optional lead. */
export function SectionHeading({
  eyebrow,
  eyebrowTone = "accent",
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  eyebrowTone?: Tone;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
      <h2 className="max-w-2xl text-3xl sm:text-4xl xl:text-5xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-lg text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
