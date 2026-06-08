"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Play, Star } from "lucide-react";
import { Section, Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { customerReviews } from "@/lib/content";
import { cn } from "@/lib/utils";
import wordmark from "@/public/ayres-wordmark.png";

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className}>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

export function Testimonials() {
  const [playing, setPlaying] = useState(false);
  const [idx, setIdx] = useState(0);
  const reviews = customerReviews.reviews;
  const n = reviews.length;
  const review = reviews[idx];
  const go = (dir: number) => setIdx((i) => (i + dir + n) % n);

  return (
    <Section id="stories" className="scroll-mt-24 overflow-hidden">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            eyebrowTone="accent"
            title="Our happy customers"
            description="Thank God. We've helped thousands of customers get jerseys with satisfying quality and results. Here are honest reviews from some of our Ayres Apparel customers."
          />
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          {/* Video */}
          <Reveal className="h-full">
            <div className="glass relative aspect-video overflow-hidden rounded-2xl shadow-soft lg:aspect-auto lg:h-full lg:min-h-[22rem]">
              {playing ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${customerReviews.videoId}?autoplay=1&rel=0`}
                  title="Ayres Apparel video"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play video"
                  className="group absolute inset-0 flex items-center justify-center"
                >
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,59,48,0.14),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative block h-9 w-44 opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 sm:h-11 sm:w-56">
                    <Image
                      src={wordmark}
                      alt="Ayres"
                      fill
                      sizes="224px"
                      className="object-contain"
                    />
                  </span>
                  <span className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 text-sm font-bold uppercase tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    <Play className="size-3.5 fill-current" strokeWidth={0} />
                    Play video
                  </span>
                </button>
              )}
            </div>
          </Reveal>

          {/* Google review carousel */}
          <Reveal delay={100} className="h-full">
            <div className="glass flex h-full flex-col rounded-2xl p-7 shadow-soft sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <GoogleG className="size-5" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    {customerReviews.googleLabel}
                  </span>
                </div>
                <div
                  className="flex gap-0.5"
                  role="img"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-[#FBBC05] text-[#FBBC05]"
                      strokeWidth={1}
                      aria-hidden
                    />
                  ))}
                </div>
              </div>

              <p className="mt-6 flex-1 text-base leading-relaxed text-foreground/90 sm:text-lg">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                  {review.name.charAt(0).toUpperCase()}
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.meta}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Controls — under the review card on large screens */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="hidden lg:block" aria-hidden />
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {reviews.map((r, i) => (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Review ${i + 1}`}
                  aria-current={i === idx}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === idx
                      ? "w-5 bg-accent"
                      : "w-1.5 bg-white/25 hover:bg-white/50",
                  )}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous review"
                className="grid size-11 place-items-center rounded-full border border-white/20 text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                <ArrowLeft className="size-5" strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next review"
                className="grid size-11 place-items-center rounded-full bg-[linear-gradient(180deg,var(--color-accent-from),var(--color-accent-to))] text-white shadow-btn transition-transform hover:-translate-y-0.5"
              >
                <ArrowRight className="size-5" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
