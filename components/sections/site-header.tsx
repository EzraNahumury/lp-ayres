import { ArrowRight } from "lucide-react";
import { nav } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/sections/mobile-nav";

/** Sticky top bar — translucent glass with a hairline underline. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            href="https://ayreslab.id/"
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            icon={ArrowRight}
          >
            View Collection
          </Button>
        </div>

        <MobileNav className="lg:hidden" />
      </Container>
    </header>
  );
}
