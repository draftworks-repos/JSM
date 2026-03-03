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
            Our <span className="accent">Services.</span>
          </h1>
          <p className="services-hero-subtitle">
            Comprehensive interior and architectural woodwork solutions tailored
            to your unique requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
