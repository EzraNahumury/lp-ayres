"use client";

import { useSyncExternalStore } from "react";
import Ferrofluid from "./ferrofluid";

// Stable reference so the WebGL program isn't re-created on every render.
const FLUID_COLORS = ["#ff6a5f", "#ff3b30", "#a01810"];

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
const getSnapshot = () => window.matchMedia(QUERY).matches;
const getServerSnapshot = () => false;

/**
 * Fixed, full-viewport atmosphere behind all content: an animated red
 * "ferrofluid" (WebGL) over the deep-black page, with a vignette to keep
 * content readable. Freezes under prefers-reduced-motion.
 */
export function SiteBackground() {
  const reduced = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-background"
    >
      <Ferrofluid
        colors={FLUID_COLORS}
        speed={0.35}
        scale={1.3}
        turbulence={1.1}
        fluidity={0.12}
        rimWidth={0.22}
        sharpness={2.6}
        shimmer={1.2}
        glow={2}
        flowDirection="down"
        opacity={0.85}
        mouseInteraction={false}
        dpr={1}
        paused={reduced}
      />

      {/* readability vignette + top light line */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.65))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </div>
  );
}
