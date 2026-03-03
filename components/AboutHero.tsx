"use client";

import { motion } from "motion/react";
import "./AboutHero.css";

export function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-bg" />
      <div className="hero-overlay" />
      <div className="container">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="about-hero-title">
            Crafting Excellence <br />
            <span className="accent">Since 1994.</span>
          </h1>
          <p className="about-hero-subtitle">
            The story of JANTA SAW MILL (JSM) — where tradition meets modern
            architectural precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
