import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LegacyStrip } from "@/components/LegacyStrip";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Portfolio } from "@/components/Portfolio";
import { GallerySlider } from "@/components/GallerySlider";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LegacyStrip />
      <WhyUs />
      <Services />
      <Portfolio />
      <GallerySlider />
      <CTA />
      <Footer />
    </main>
  );
}
