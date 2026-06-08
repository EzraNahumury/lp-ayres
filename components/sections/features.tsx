import { ArrowRight } from "lucide-react";
import { whoWeAre } from "@/lib/content";
import { Section, Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { GuaranteeAccordion } from "@/components/sections/guarantee-accordion";
import { cn } from "@/lib/utils";

export function Features() {
  return (
    <Section id="features" className="scroll-mt-24">
      <Container>
        {/* Top — headline + CTA (left), numbered detail points (right) */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <Eyebrow tone="accent">{whoWeAre.eyebrow}</Eyebrow>
              <h2 className="mt-6 text-3xl leading-[1.02] sm:text-4xl xl:text-5xl">
                {whoWeAre.titleLead}{" "}
                <span className="text-gradient-red pe-[0.12em]">
                  {whoWeAre.titleHighlight}
                </span>{" "}
                {whoWeAre.titleTrail}
              </h2>
              <div className="mt-8">
                <Button
                  href={whoWeAre.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  icon={ArrowRight}
                >
                  {whoWeAre.cta.label}
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col">
              {whoWeAre.points.map((p, i) => (
                <div
                  key={p.n}
                  className={cn(
                    "flex gap-5 py-6",
                    i > 0 && "border-t border-white/10",
                  )}
                >
                  <span className="font-heading text-base font-bold italic text-accent">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="text-lg">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Bottom — interactive guarantees (click a tab to reveal concerns) */}
        <Reveal delay={120}>
          <div className="mt-20">
            <GuaranteeAccordion />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
