import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { AboutStats } from "@/components/AboutStats";
import { AboutContent } from "@/components/AboutContent";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <AboutContent />
      <AboutStats />
      <CTA />
      <Footer />
    </main>
  );
}
