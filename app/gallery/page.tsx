import { Header } from "@/components/Header";
import { BentoGallery } from "@/components/BentoGallery";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <BentoGallery />
      <CTA />
      <Footer />
    </main>
  );
}
