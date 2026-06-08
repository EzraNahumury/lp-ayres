"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Section, Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { catalogs } from "@/lib/content";
import { cn } from "@/lib/utils";

const ORDER_URL =
  "https://api.whatsapp.com/send/?phone=6287818310416&text&type=phone_number&app_absent=0";

type Cat = (typeof catalogs)[number];

const pad = (n: number) => String(n).padStart(2, "0");

export function Catalog() {
  const [active, setActive] = useState(0);
  const [viewer, setViewer] = useState<{ cat: number; page: number } | null>(
    null,
  );
  const count = catalogs.length;
  const current = catalogs[active];
  const go = (dir: number) => setActive((a) => (a + dir + count) % count);
  const open = (cat: number, page: number) => setViewer({ cat, page });

  // Keyboard + scroll lock while the lightbox is open.
  const isOpen = viewer !== null;
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setViewer(null);
      else if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        const dir = e.key === "ArrowLeft" ? -1 : 1;
        setViewer((v) => {
          if (!v) return v;
          const len = catalogs[v.cat].pages.length;
          return { ...v, page: (v.page + dir + len) % len };
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <>
      <Section id="pricing" className="scroll-mt-24 overflow-hidden">
        <Container>
          {/* Header */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-accent">
              <span className="size-1.5 rounded-full bg-accent" />
              Full collection
            </span>
            <div className="mt-3 flex items-end gap-5">
              <h2 className="text-3xl sm:text-4xl xl:text-5xl">All catalogs</h2>
              <span className="mb-2 hidden h-px flex-1 bg-white/15 sm:block" />
              <span className="mb-1 hidden whitespace-nowrap text-xs uppercase tracking-[0.2em] text-muted-foreground sm:block">
                {count} Catalogs
              </span>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative mx-auto mt-14 h-[21rem] w-full max-w-2xl sm:h-[25rem]">
            {catalogs.map((cat, i) => {
              const rel = (i - active + count) % count;
              const isActive = rel === 0;
              const visible = rel === 0 || rel === 1 || rel === count - 1;

              let style: CSSProperties;
              if (rel === 0) {
                style = {
                  transform: "translateX(-50%) scale(1)",
                  zIndex: 30,
                  opacity: 1,
                };
              } else if (rel === 1) {
                style = {
                  transform: "translateX(-50%) translateX(64%) scale(0.82)",
                  zIndex: 20,
                  opacity: 0.5,
                };
              } else if (rel === count - 1) {
                style = {
                  transform: "translateX(-50%) translateX(-64%) scale(0.82)",
                  zIndex: 20,
                  opacity: 0.5,
                };
              } else {
                style = {
                  transform: "translateX(-50%) scale(0.6)",
                  zIndex: 0,
                  opacity: 0,
                };
              }

              return (
                <div
                  key={cat.slug}
                  role="button"
                  tabIndex={visible ? 0 : -1}
                  aria-hidden={!visible}
                  aria-label={
                    isActive ? `View ${cat.name} patterns` : `Show ${cat.name}`
                  }
                  onClick={() => (isActive ? open(i, 0) : setActive(i))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      if (isActive) open(i, 0);
                      else setActive(i);
                    }
                  }}
                  style={style}
                  className="absolute left-1/2 top-0 w-60 cursor-pointer transition-all duration-500 ease-out-soft sm:w-72"
                >
                  <CatalogCard cat={cat} active={isActive} />
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous catalog"
              className="grid size-10 place-items-center rounded-full border border-white/15 text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              <ChevronLeft className="size-5" strokeWidth={2.5} />
            </button>
            <div className="flex items-center gap-2">
              {catalogs.map((c, i) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to ${c.name}`}
                  aria-current={i === active}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === active
                      ? "w-6 bg-accent"
                      : "w-1.5 bg-white/25 hover:bg-white/50",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next catalog"
              className="grid size-10 place-items-center rounded-full border border-white/15 text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              <ChevronRight className="size-5" strokeWidth={2.5} />
            </button>
          </div>

          {/* Pages of the active catalog */}
          <div className="mt-12">
            <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
              Catalog pages — click to view
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {current.pages.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => open(active, i)}
                  aria-label={`View ${current.name} pattern ${i + 1}`}
                  className="group relative aspect-[3/4] w-16 overflow-hidden rounded-lg border border-white/10 transition-colors hover:border-accent/50 sm:w-20"
                >
                  <Image
                    src={src}
                    alt={`${current.name} pattern ${i + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Order bar */}
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="glass flex flex-col items-center justify-between gap-5 rounded-2xl px-6 py-5 text-center shadow-soft sm:flex-row sm:px-8 sm:text-left">
              <div className="flex items-center gap-4">
                <span className="hidden h-11 w-1 rounded-full bg-[linear-gradient(180deg,var(--color-accent-from),var(--color-accent-to))] sm:block" />
                <div>
                  <p className="font-heading text-lg font-bold italic uppercase text-foreground">
                    {current.pages.length} Patterns available
                  </p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    {current.pkg}
                  </p>
                </div>
              </div>
              <Button
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                icon={ArrowRight}
              >
                Order Now
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {viewer ? (
        <CatalogViewer
          cat={catalogs[viewer.cat]}
          page={viewer.page}
          onClose={() => setViewer(null)}
          onSelect={(page) => setViewer((v) => (v ? { ...v, page } : v))}
          onStep={(dir) =>
            setViewer((v) => {
              if (!v) return v;
              const len = catalogs[v.cat].pages.length;
              return { ...v, page: (v.page + dir + len) % len };
            })
          }
        />
      ) : null}
    </>
  );
}

function CatalogCard({ cat, active }: { cat: Cat; active: boolean }) {
  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden rounded-2xl border shadow-soft transition-all duration-500",
        active ? "border-accent/40 shadow-glow" : "border-white/10",
      )}
    >
      <Image
        src={cat.cover}
        alt={cat.name}
        fill
        sizes="(max-width: 640px) 60vw, 18rem"
        className="object-cover"
        priority={active}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/30" />

      <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
        {cat.tier}
      </span>
      <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
        {cat.pages.length} Patterns
      </span>

      <div className="absolute inset-x-4 bottom-4">
        <span className="block font-heading text-2xl font-bold italic uppercase text-white sm:text-3xl">
          {cat.name}
        </span>
        {active ? (
          <p className="mt-1.5 max-w-[16rem] text-xs text-white/75 sm:text-sm">
            {cat.tagline}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function CatalogViewer({
  cat,
  page,
  onClose,
  onSelect,
  onStep,
}: {
  cat: Cat;
  page: number;
  onClose: () => void;
  onSelect: (page: number) => void;
  onStep: (dir: number) => void;
}) {
  const total = cat.pages.length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${cat.name} catalog`}
      className="fixed inset-0 z-[100] flex flex-col bg-black/92 backdrop-blur-md"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-accent/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
            {cat.tier}
          </span>
          <span className="font-heading text-base font-bold italic uppercase text-white sm:text-lg">
            {cat.name}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-muted-foreground">
            {pad(page + 1)} / {pad(total)}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid size-9 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-accent/50 hover:text-accent"
          >
            <X className="size-5" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Image + arrows */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 sm:px-20">
        <button
          type="button"
          onClick={() => onStep(-1)}
          aria-label="Previous page"
          className="absolute left-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:border-accent/50 hover:text-accent sm:left-6"
        >
          <ChevronLeft className="size-5" strokeWidth={2.5} />
        </button>

        <div className="relative h-full w-full max-w-md">
          <Image
            src={cat.pages[page]}
            alt={`${cat.name} pattern ${page + 1}`}
            fill
            sizes="(max-width: 640px) 90vw, 28rem"
            className="object-contain"
            priority
          />
        </div>

        <button
          type="button"
          onClick={() => onStep(1)}
          aria-label="Next page"
          className="absolute right-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:border-accent/50 hover:text-accent sm:right-6"
        >
          <ChevronRight className="size-5" strokeWidth={2.5} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex flex-wrap justify-center gap-2.5 px-4 pb-6 pt-3">
        {cat.pages.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Page ${i + 1}`}
            aria-current={i === page}
            className={cn(
              "relative aspect-[3/4] w-12 overflow-hidden rounded-md border-2 transition-colors sm:w-14",
              i === page ? "border-accent" : "border-white/15 hover:border-white/40",
            )}
          >
            <Image src={src} alt="" fill sizes="56px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
