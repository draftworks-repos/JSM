"use client";

import { motion } from "motion/react";
import "./ServicesHero.css";

export function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero-bg" />
      <div className="hero-overlay" />
      <div className="container">
        <motion.div
          className="services-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="services-hero-title">
            Interior & Furniture <br />
            <span className="accent">Wood Services.</span>
          </h1>
          <p className="services-hero-subtitle">
            From custom furniture to interior woodwork, we deliver design,
            fabrication, and installation with lasting quality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
