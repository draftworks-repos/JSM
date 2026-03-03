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
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact Us", href: "/#contact" },
  ];

  const services = [
    { name: "Bespoke Doors", href: "/#services" },
    { name: "Luxury Interiors", href: "/#services" },
    { name: "Mandirs & Sacred Spaces", href: "/#services" },
    { name: "Premium Timber Supply", href: "/#services" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">JSM</div>
            <p className="brand-desc">
              JANTA SAW MILL (JSM) — By Majid Khan. Government of India
              Recognised timber merchants specializing in premium teakwood and
              luxury architectural woodwork.
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
                  <Phone size={18} className="contact-icon" />
                  <span>+91 98765 43210</span>
                </li>
                <li>
                  <Mail size={18} className="contact-icon" />
                  <span>info@jantasawmill.com</span>
                </li>
              </ul>
              <button className="footer header-cta">
                Get a Quote
                <span className="arrow-circle">
                  <ArrowRight className="btn-arrow" size={14} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} JANTA SAW MILL (JSM). All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
