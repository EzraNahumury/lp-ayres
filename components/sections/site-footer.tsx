import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siShopee } from "simple-icons";
import { footer } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { socialIconByLabel } from "@/components/decoration/social-icons";
import wordmark from "@/public/ayres-wordmark.png";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-background">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[2fr_1fr_1fr_1.5fr]">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <a href="#top" aria-label="Ayres Apparel — home" className="block">
            <span className="relative block h-7 w-36">
              <Image
                src={wordmark}
                alt="Ayres Apparel"
                fill
                sizes="144px"
                className="object-contain object-left"
              />
            </span>
          </a>
          <p className="max-w-[220px] text-sm leading-relaxed text-muted-foreground">
            {footer.tagline}
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            {footer.motto}
          </p>
          <div className="mt-1 flex gap-3">
            {footer.socials.map((s) => {
              const Icon = socialIconByLabel[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-md border border-white/10 text-muted-foreground transition-all duration-200 hover:border-accent/50 hover:text-foreground"
                >
                  {Icon ? <Icon className="size-4" /> : null}
                </a>
              );
            })}
          </div>
        </div>

        {/* Menu */}
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
            Menu
          </p>
          <nav className="flex flex-col gap-3" aria-label="Footer">
            {footer.menu.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Info */}
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
            Informasi
          </p>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <p className="whitespace-pre-line leading-relaxed">
              {footer.info.address}
            </p>
            <p className="whitespace-pre-line leading-relaxed">
              {footer.info.hours}
            </p>
            <a
              href={`mailto:${footer.info.email}`}
              className="transition-colors hover:text-foreground"
            >
              {footer.info.email}
            </a>
            <a
              href={footer.info.phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {footer.info.phone}
            </a>
          </div>
        </div>

        {/* Marketplace */}
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
            Tersedia di
          </p>
          <div className="flex flex-col gap-3">
            {footer.marketplaces.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-white/10 px-4 py-3 transition-colors duration-200 hover:border-accent/40"
              >
                <span
                  className="grid size-7 shrink-0 place-items-center overflow-hidden rounded-md"
                  style={{
                    backgroundColor: m.label === "Shopee" ? m.color : "#ffffff",
                  }}
                >
                  {m.label === "Shopee" ? (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden
                      className="size-4 fill-white"
                    >
                      <path d={siShopee.path} />
                    </svg>
                  ) : (
                    <span className="relative size-6">
                      <Image
                        src="/tokopedia.png"
                        alt="Tokopedia"
                        fill
                        sizes="24px"
                        className="object-contain"
                      />
                    </span>
                  )}
                </span>
                <span className="text-sm font-semibold text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                  {m.label}
                </span>
                <ArrowRight
                  className="ml-auto size-4 text-muted-foreground/50 transition-colors duration-200 group-hover:text-accent"
                  strokeWidth={2}
                />
              </a>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 sm:flex-row">
          <p className="text-xs text-muted-foreground/70">{footer.copyright}</p>
          <p className="text-xs text-muted-foreground/50">
            {footer.subCopyright}
          </p>
        </Container>
      </div>
    </footer>
  );
}
