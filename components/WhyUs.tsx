"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import "./WhyUs.css";
import "./animatons.css";
import { ArrowRight, Shield, Globe, Award, Zap } from "lucide-react";

export function WhyUs() {
  const points = [
    {
      title: "Heritage & Trust",
      desc: "30+ years of excellence in premium timber and luxury interior solutions.",
      icon: <Award size={24} />,
      delay: "delay-100",
    },
    {
      title: "Sustainable Teak",
      desc: "Ethically sourced, government-recognized grade-A teakwood built to last.",
      icon: <Globe size={24} />,
      delay: "delay-200",
    },
    {
      title: "Master Craftsmanship",
      desc: "Precision joinery and bespoke designs crafted by industry-leading artisans.",
      icon: <Shield size={24} />,
      delay: "delay-300",
    },
    {
      title: "Luxury Interiors",
      desc: "Comprehensive solutions from raw timber to finished, bespoke home environments.",
      icon: <Zap size={24} />,
      delay: "delay-400",
    },
  ];

  return (
    <section className="why-us">
      <div className="container">
        <div className="why-points-container">
          <div className="badge-wrapper">
            <span className="badge animate-flashy-entrance">WHY US?</span>
          </div>

          <h2 className="why-main-heading animate-reveal-text">
            Legacy in Every Grain, <br />
            <span>Luxury in Every Detail</span>
          </h2>

          <div className="why-points-grid">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.19, 1, 0.22, 1],
                  delay: index * 0.1,
                }}
                className="why-point-wrapper"
              >
                <div className="why-point-card">
                  <span className="why-card-number">0{index + 1}</span>
                  <div className="why-point-icon-wrapper">
                    <div className="why-point-icon-bg" />
                    <div className="why-point-icon">{point.icon}</div>
                  </div>
                  <h3 className="why-point-title">{point.title}</h3>
                  <p className="why-point-desc">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="feature-image-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="feature-image-wrapper"
          >
            <Image
              src="/whyus.jpeg"
              alt="Feature Interior"
              fill
              className="feature-image"
              referrerPolicy="no-referrer"
            />
            <div className="feature-overlay">
              <h3 className="feature-title">
                Explore the appearance <br /> of your residence
              </h3>
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
          </motion.div>

          <motion.div
            className="floating-image-card"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="floating-image-wrapper">
              <Image
                src="/mandir-2.jpeg"
                alt="Floating Image"
                fill
                className="floating-video"
                data-lightbox
                data-gallery="why-us"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
