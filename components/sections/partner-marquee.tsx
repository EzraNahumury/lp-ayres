import Image from "next/image";
import { partners } from "@/lib/content";
import { Marquee } from "@/components/decoration/marquee";

/**
 * Scrolling strip of partner logos on white chips, so the mix of
 * transparent / dark / colored marks all read clearly on the dark band.
 */
// Repeat the set so one marquee half is always wider than the viewport — that
// keeps the loop seamless (no empty gap) even on wide screens.
const items = [...partners, ...partners];

export function PartnerMarquee() {
  return (
    <div className="border-y border-white/10 bg-white/[0.015] py-8">
      <p className="mb-7 text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
        Trusted by teams &amp; partners
      </p>
      <Marquee>
        {items.map((partner, i) => (
          <div
            key={`${partner.name}-${i}`}
            className="flex h-16 shrink-0 items-center rounded-xl bg-white px-6 shadow-soft"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              className="h-9 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
