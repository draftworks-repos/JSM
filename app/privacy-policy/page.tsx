import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "@/components/LegalPage.css";

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <main>
      <Header />
      <article className="legal-page bg-1">
        <div className="legal-container">
          <header className="legal-header">
            <p className="legal-updated">Last Updated: {lastUpdated}</p>
            <h1 className="legal-title">Privacy Policy</h1>
          </header>

          <div className="legal-content">
            <p>
              At JANTA SAW MILL (JSM), we respect your privacy and are committed to protecting it. This Privacy Policy outlines how we handle information on our website.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              Our website is primarily a showcase of our work. We do not use cookies for tracking or maintain a user database. However, we may collect:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> When you click our contact links (like WhatsApp), you voluntarily share your phone number and any information provided during the chat.</li>
              <li><strong>Usage Data:</strong> Basic, non-identifying information about how you interact with our site (e.g., pages visited) to help us improve the experience.</li>
            </ul>

            <h2>2. How We Use Information</h2>
            <p>
              The information you provide is used solely to:
            </p>
            <ul>
              <li>Respond to your inquiries and provide quotes for timber or interior services.</li>
              <li>Communicate regarding ongoing projects.</li>
              <li>Improve our website's performance and design.</li>
            </ul>

            <h2>3. Third-Party Links</h2>
            <p>
              Our site contains links to third-party services like WhatsApp. Please note that these platforms have their own privacy policies, and we are not responsible for their practices.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We take reasonable measures to protect any information shared with us. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2>5. No Backend Storage</h2>
            <p>
              As a static showcase site, we do not store your personal data on our servers. All direct communications happen through external platforms like WhatsApp.
            </p>

            <h2>6. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with a new "Last Updated" date.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us via WhatsApp at +91 7000 8321 88.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
