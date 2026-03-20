"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <Image
          src="/door-1.png"
          alt="Modern Interior"
          fill
          className="hero-image"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-text-container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title"
          >
            Where Sagwan becomes{" "}
            <span className="hero-title-accent">Legacy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hero-description"
          >
            For over four decades, Janta Saw Mill has transformed the finest
            Sagwan (Teakwood) into timeless architecture, luxury interiors, and
            craftsmanship built to last for generations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hero-actions"
          >
            <button className="btn-hero-primary">
              Request Consultation
              <span className="arrow-circle">
                <ArrowRight className="btn-arrow" size={16} />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
