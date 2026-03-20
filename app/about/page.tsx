import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { AboutStats } from "@/components/AboutStats";
import { AboutContent } from "@/components/AboutContent";
import { FounderStory } from "@/components/FounderStory";
import { TeakStory } from "@/components/TeakStory";
import { OurMill } from "@/components/OurMill";
import { BrandPhilosophy } from "@/components/BrandPhilosophy";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <AboutContent />
      <FounderStory />
      <TeakStory />
      <div className="bg-1">
        <OurMill />
        <BrandPhilosophy />
        <AboutStats />
      </div>
      <CTA />
      <Footer />
    </main>
  );
}
