import { Header } from "@/components/Header";
import { ServicesHero } from "@/components/ServicesHero";
import { ServicesGallery } from "@/components/ServicesGallery";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <ServicesHero />
      <ServicesGallery />
      <CTA />
      <Footer />
    </main>
  );
}
