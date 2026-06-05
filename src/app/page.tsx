import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Solution } from "@/components/landing/solution";
import { FeatureDeepDive } from "@/components/landing/feature-deep-dive";
import { Workflow } from "@/components/landing/workflow";
import { Trust } from "@/components/landing/trust";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { MobileCTA } from "@/components/landing/mobile-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Problem />
        <Solution />
        <FeatureDeepDive />
        <Workflow />
        <Trust />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
