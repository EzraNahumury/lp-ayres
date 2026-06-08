import Image from "next/image";
import { brand } from "@/lib/content";
import wordmark from "@/public/ayres-wordmark.png";
import { cn } from "@/lib/utils";

/** Ayres logo — the white wordmark image, sized via a fixed box. */
export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label={`${brand.name} — home`}
      className={cn(
        "inline-flex items-center transition-opacity duration-300 hover:opacity-80",
        className,
      )}
    >
      <span className="relative block h-6 w-[120px] sm:h-7 sm:w-[136px]">
        <Image
          src={wordmark}
          alt={brand.name}
          fill
          sizes="160px"
          priority
          className="object-contain object-left"
        />
      </span>
    </a>
  );
}
