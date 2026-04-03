"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Menu,
  X,
  Home,
  Info,
  Image as ImageIcon,
  Phone,
  Briefcase,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./Header.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={20} /> },
    { name: "About Us", href: "/about", icon: <Info size={20} /> },
    { name: "Services", href: "/services", icon: <Briefcase size={20} /> },
    { name: "Gallery", href: "/gallery", icon: <ImageIcon size={20} /> },
    { name: "Contact Us", href: "/#contact", icon: <Phone size={20} /> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="header">
        <div className="header-bg" />
        <div className="header-content">
          <Link href="/" className="logo-container">
            <img src="/logo.png" alt="JSM Logo" className="logo-img" />
          </Link>

          <nav className="nav desktop-only">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="nav-link">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="header-actions desktop-only">
            <Link
              href="https://wa.me/917000832188"
              target="_blank"
              className="header-cta"
            >
              Get Started
              <span className="arrow-circle">
                <ArrowRight className="btn-arrow" size={14} />
              </span>
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-slider-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            <motion.div
              className="mobile-slider"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="slider-header">
                <Link href="/" className="logo-container" onClick={toggleMenu}>
                  <img src="/logo.png" alt="JSM Logo" className="logo-img" />
                </Link>
                <button
                  className="close-btn"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="slider-nav">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="slider-link"
                    onClick={toggleMenu}
                  >
                    <span className="slider-link-icon">{link.icon}</span>
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="slider-footer">
                <Link
                  href="https://wa.me/917000832188"
                  target="_blank"
                  className="header-cta w-full"
                >
                  Get Started
                  <span className="arrow-circle">
                    <ArrowRight className="btn-arrow" size={14} />
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
