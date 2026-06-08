import { cta } from "@/lib/content";
import { Section, Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CTA() {
  return (
    <Section className="pb-14">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-[linear-gradient(180deg,rgba(255,59,48,0.16),rgba(255,59,48,0.03))] px-6 py-16 text-center shadow-glow sm:px-12 sm:py-20">
            {/* glow accents */}
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-44 w-[80%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,59,48,0.5),transparent_70%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
              aria-hidden
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-4xl text-foreground sm:text-5xl xl:text-6xl">
                {cta.title}
              </h2>
              <p className="mt-5 text-lg text-foreground/85">{cta.body}</p>

              <div className="mt-8 flex justify-center">
                <Button
                  href={cta.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="cream"
                  size="lg"
                  icon={cta.primaryCta.icon}
                >
                  {cta.primaryCta.label}
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-foreground/70">
                {cta.badges.map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-accent" />
                    {badge}
                  </span>
                ))}
                <span className="inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent" />
                  {cta.note}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
