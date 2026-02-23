import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Bundles from "@/components/Bundles";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <>
      {/* Persistent animated background layer */}
      <AnimatedBackground />

      {/* Sticky navigation */}
      <Navigation />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Social Proof — Before/After + metrics + testimonials */}
        <SocialProof />

        {/* 3. How It Works — 5-step AI flow */}
        <Process />

        {/* 4. Services — 4 system component cards */}
        <Services />

        {/* 5. Bundles — packages */}
        <Bundles />

        {/* 6. Portfolio — example site mockups */}
        <Portfolio />

        {/* 7. FAQ */}
        <FAQ />

        {/* 7. Contact / Book a Call */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
