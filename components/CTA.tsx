"use client";

import { motion } from "motion/react";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import "./CTA.css";
import Link from "next/link";

export function CTA() {
  const features = [
    { label: "24/7", sub: "Customer Support" },
    { label: "Free", sub: "Consultation & Quote" },
    { label: "100%", sub: "Quality Guaranteed" },
  ];

  return (
    <section id="contact" className="cta-section">
      {/* Decorative background blobs */}
      <div className="cta-blob blob-1"></div>
      <div className="cta-blob blob-2"></div>
      <div className="cta-blob blob-3"></div>

      <div className="cta-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="cta-content"
        >
          <div className="cta-badge">
            <Sparkles size={14} className="cta-badge-icon" />
            <span>Let&apos;s Get Started</span>
          </div>

          <h2 className="cta-title">Ready to Transform Your Space?</h2>

          <p className="cta-description">
            Let&apos;s discuss your project and bring your vision to life with
            expert craftsmanship and premium materials
          </p>

          <div className="cta-actions">
            <Link
              href="https://wa.me/918349129777"
              target="_blank"
              className="header-cta"
            >
              Enquire Now
              <span className="arrow-circle">
                <ArrowRight className="btn-arrow" size={14} />
              </span>
            </Link>
            <Link href="/services" className="btn-view-services call-now">
              Call Now <Phone size={18} />
            </Link>
          </div>

          <div className="cta-features">
            {features.map((feature, index) => (
              <div key={index} className="cta-feature-card">
                <span className="feature-label">{feature.label}</span>
                <span className="feature-sub">{feature.sub}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
