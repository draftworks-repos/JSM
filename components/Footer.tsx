"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import "./Footer.css";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/#contact" },
  ];

  const services = [
    { name: "Teakwood Doors", href: "/services/#Wooden" },
    { name: "Luxury Interiors", href: "/services/#Luxury" },
    { name: "Mandirs & Sacred Spaces", href: "/services/#Custom" },
    { name: "Premium Timber Supply", href: "/services/#Premium" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo-container">
              <img src="/logo.png" alt="JSM Logo" className="footer-logo-img" />
            </Link>
            <p className="brand-desc">
              JANTA SAW MILL (JSM) — By Majid Khan. Government of India
              Recognised timber merchants specializing in premium teakwood and
              luxury architectural wood work.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-btn"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Our Services</h4>
              <ul className="footer-list">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href={service.href} className="footer-link">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Contact Info</h4>
              <ul className="footer-list contact-list">
                <li>
                  <MapPin size={18} className="contact-icon" />
                  <span>Madhya Pradesh, India</span>
                </li>
                <li>
                  <a href="tel:+917000832188" className="footer-number">
                    <Phone size={18} className="contact-icon" />
                    <span>+91 7000 8321 88</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/918349129777"
                    className="footer-number"
                  >
                    <Phone size={18} className="contact-icon" />
                    <span>+91 8349 1297 77</span>
                  </a>
                </li>
                <li>
                  <Mail size={18} className="contact-icon" />
                  <a href="mailto:contact@jantasawmill.in">
                    contact@jantasawmill.in
                  </a>
                </li>
              </ul>
              <Link
                href="https://wa.me/918349129777"
                target="_blank"
                className="footer header-cta"
              >
                Get a Quote
                <span className="arrow-circle">
                  <ArrowRight className="btn-arrow" size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} JANTA SAW MILL (JSM). All rights reserved.
          </p>
          <div className="legal-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className="separator">•</span>
            <Link href="/terms-conditions">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
