import Image from "next/image";
import { hero } from "@/lib/content";
import { Section, Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/decoration/social-icons";
import jersey1 from "@/public/jersey/Apr10-01_02.jpg";
import jersey2 from "@/public/jersey/Apr-01-03_02.jpg";
import jersey3 from "@/public/jersey/Mar28-02_01.jpg";

const proofJerseys = [jersey1, jersey2, jersey3];

export function Hero() {
  return (
    <Section id="top" className="scroll-mt-24 overflow-hidden pb-10 pt-16 sm:pt-24">
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="accent">{hero.badge}</Eyebrow>
          </Reveal>

          <Reveal delay={70}>
            <h1 className="mt-6 text-4xl leading-[1.02] sm:text-5xl xl:text-6xl">
              {hero.titleLead}{" "}
              <span className="text-gradient-red pe-[0.12em]">
                {hero.titleHighlight}
              </span>{" "}
              {hero.titleTrail}
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              {hero.description}
            </p>
          </Reveal>

          <Reveal delay={210}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={hero.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                icon={WhatsAppIcon}
                iconPosition="left"
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-3">
                {proofJerseys.map((src, i) => (
                  <span
                    key={i}
                    className="relative size-11 shrink-0 overflow-hidden rounded-full border-2 border-background ring-1 ring-white/10"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">
                  {hero.socialProof.count}
                </span>{" "}
                {hero.socialProof.label}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative hidden items-center justify-center lg:flex">
          <JerseyFan />
        </div>
      </Container>
    </Section>
  );
}

function JerseyFan() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="pointer-events-none absolute -inset-6 -z-10 bg-[radial-gradient(circle_at_50%_42%,rgba(255,59,48,0.2),transparent_62%)]"
        aria-hidden
      />
      <div className="relative mx-auto h-[18rem] w-[24rem] max-w-full">
        {/* left card */}
        <div className="absolute left-0 top-10 w-44 -rotate-[12deg] overflow-hidden rounded-2xl border border-white/10 shadow-soft">
          <Image
            src={jersey1}
            alt="Custom jersey — Hayuk FC"
            sizes="176px"
            className="h-auto w-full opacity-90"
          />
        </div>
        {/* right card */}
        <div className="absolute right-0 top-10 w-44 rotate-[12deg] overflow-hidden rounded-2xl border border-white/10 shadow-soft">
          <Image
            src={jersey2}
            alt="Custom jersey — BRC E-Sport"
            sizes="176px"
            className="h-auto w-full opacity-90"
          />
        </div>
        {/* center card */}
        <div className="absolute left-1/2 top-0 z-10 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-accent/30 shadow-glow">
          <Image
            src={jersey3}
            alt="Custom jersey — Aurora"
            sizes="224px"
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
      <div className="relative z-10 mt-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
          Starting from
        </p>
        <p className="mt-1 font-heading text-3xl font-bold italic text-foreground">
          Rp 70.000
        </p>
      </div>
    </div>
  );
}
