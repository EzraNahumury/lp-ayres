"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { guarantee } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * The "Best …" list (as before), where clicking a row drops down the concerns
 * that guarantee addresses. One open at a time; all closed by default.
 */
export function GuaranteeAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="border-t border-white/10">
      {guarantee.items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.label} className="border-b border-white/10">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span className="flex items-baseline gap-5">
                <span
                  className={cn(
                    "font-heading text-sm font-bold italic transition-colors",
                    isOpen ? "text-accent" : "text-muted-foreground/60",
                  )}
                >
                  0{i + 1}
                </span>
                <span
                  className={cn(
                    "font-heading text-2xl font-bold italic uppercase transition-colors sm:text-3xl",
                    isOpen
                      ? "text-foreground"
                      : "text-muted-foreground/70 group-hover:text-foreground",
                  )}
                >
                  {item.label}
                </span>
              </span>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 transition-all duration-300 ease-out-soft",
                  isOpen
                    ? "rotate-180 text-accent"
                    : "text-muted-foreground/50 group-hover:text-foreground",
                )}
                strokeWidth={2.5}
              />
            </button>

            {/* Dropdown panel — animates height via the grid-rows fr trick */}
            <div
              className={cn(
                "grid transition-all duration-300 ease-out-soft",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-7">
                  <p className="text-sm text-muted-foreground">
                    {guarantee.subheading}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {item.concerns.map((concern) => (
                      <li
                        key={concern}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <X
                          className="mt-0.5 size-5 shrink-0 text-accent"
                          strokeWidth={3}
                        />
                        <span>{concern}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
