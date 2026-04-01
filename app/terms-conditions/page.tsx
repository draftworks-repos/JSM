import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "@/components/LegalPage.css";

export default function TermsConditions() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main>
      <Header />
      <article className="legal-page bg-1">
        <div className="legal-container">
          <header className="legal-header">
            <p className="legal-updated">Last Updated: {lastUpdated}</p>
            <h1 className="legal-title">Terms & Conditions</h1>
          </header>

          <div className="legal-content">
            <p>
              By accessing and using our website, you agree to comply with and
              be bound by the following terms and conditions of use.
            </p>

            <h2>1. Website Use</h2>
            <p>
              The content of this website is for your general information and
              personal use only. It is subject to change without notice.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              All materials on this website, including but not limited to the
              design, layout, look, appearance, graphics, and images of our
              work, are owned by or licensed to JANTA SAW MILL (JSM) and are
              protected by copyright laws. Reproduction is prohibited without
              prior written consent.
            </p>

            <h2>3. Accuracy of Information</h2>
            <p>
              While we strive for accuracy, we do not provide any warranty or
              guarantee as to the accuracy, timeliness, performance,
              completeness, or suitability of the information and materials
              found or offered on this website for any particular purpose.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              Your use of any information or materials on this website is
              entirely at your own risk. It shall be your own responsibility to
              ensure that any products, services, or information available
              through this website meet your specific requirements.
            </p>

            <h2>5. Service Descriptions</h2>
            <p>
              Descriptions of timber supply and interior services are general in
              nature. For specific projects and quotes, please contact us
              directly via WhatsApp or our contact details. All projects are
              subject to individual agreements.
            </p>

            <h2>6. Third-Party Links</h2>
            <p>
              Our website links to external services such as WhatsApp for
              communication. We have no responsibility for the content or
              practices of these linked websites or services.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              Your use of this website and any dispute arising out of such use
              of the website is subject to the laws of Madhya Pradesh, India.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              For any questions regarding these terms, please contact us via
              WhatsApp at +91 7000 8321 88 or email info@jantasawmill.com.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
