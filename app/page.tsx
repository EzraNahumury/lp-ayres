import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { PartnerMarquee } from "@/components/sections/partner-marquee";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Catalog } from "@/components/sections/catalog";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      {/* overflow-x-clip (not hidden) contains bleeding decoration without
          breaking the sticky header's positioning context. */}
      <main id="main" className="flex-1 overflow-x-clip">
        <Hero />
        <PartnerMarquee />
        <Features />
        <HowItWorks />
        <Catalog />
        <Testimonials />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}
