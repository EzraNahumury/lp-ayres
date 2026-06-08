import { values } from "@/lib/content";
import { Section, Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";

export function HowItWorks() {
  return (
    <Section id="how" className="scroll-mt-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our values"
            eyebrowTone="accent"
            title="Why Ayres?"
            description="Four principles that form the foundation of every decision we make."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 100} className="h-full">
                <div className="glass relative h-full overflow-hidden rounded-2xl p-7 shadow-soft">
                  <span
                    className="pointer-events-none absolute right-5 top-3 font-heading text-7xl font-bold italic leading-none text-white/[0.04]"
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                  <span className="mb-6 grid size-14 place-items-center rounded-xl bg-[linear-gradient(135deg,var(--color-accent-from),var(--color-accent-to))] text-white shadow-btn">
                    <Icon className="size-7" strokeWidth={2.5} />
                  </span>
                  <h3 className="text-xl">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
