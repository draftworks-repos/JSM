import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LegacyStrip } from "@/components/LegacyStrip";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Portfolio } from "@/components/Portfolio";
import { GallerySlider } from "@/components/GallerySlider";
import { OurMill } from "@/components/OurMill";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="bg-1">
        <LegacyStrip />
        <OurMill />
        <WhyUs />
      </div>
      <Services />
      <Portfolio />
      <GallerySlider />
      <CTA />
      <Footer />
    </main>
  );
}
