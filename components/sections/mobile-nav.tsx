"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Hamburger + glass pop-out menu for small screens. */
export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="glass grid size-11 place-items-center rounded-xl text-foreground transition-transform active:translate-y-0.5"
      >
        {open ? (
          <X className="size-5" strokeWidth={2.5} />
        ) : (
          <Menu className="size-5" strokeWidth={2.5} />
        )}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-background/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            id="mobile-menu"
            className="glass-strong absolute right-0 top-[calc(100%+0.75rem)] z-50 w-64 rounded-2xl p-3 shadow-soft"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
              <Button
                href="https://ayreslab.id/"
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                icon={ArrowRight}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                View Collection
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
