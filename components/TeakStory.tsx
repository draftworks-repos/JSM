"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Shield, Zap, Droplets, Bug } from "lucide-react";
import "./TeakStory.css";

export function TeakStory() {
  const features = [
    {
      icon: <Zap size={28} />,
      title: "Unmatched Strength",
      desc: "Exceptional load-bearing capacity and structural integrity.",
    },
    {
      icon: <Shield size={28} />,
      title: "Lifetime Durability",
      desc: "Capable of lasting for generations and heritage homes.",
    },
    {
      icon: <Bug size={28} />,
      title: "Termite Resistant",
      desc: "Naturally resistant to decay and pests due to high silica.",
    },
    {
      icon: <Droplets size={28} />,
      title: "Natural Oils",
      desc: "Preserves the wood and prevent warping or cracking.",
    },
  ];

  return (
    <section className="teak-story">
      <div className="container">
        <div className="teak-grid">
          <motion.div
            className="teak-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge-wrapper">
              <span className="badge">The Teak Story</span>
            </div>
            <h2 className="teak-title">
              The Legend of <span>Sagwan</span>
            </h2>
            <p className="teak-description">
              At JSM, we exclusively work with the finest Teakwood, locally and
              globally known as Sagwan. This "King of Timbers" is the
              cornerstone of our craftsmanship, chosen for its unparalleled
              qualities that make it the gold standard for luxury furniture and
              architectural woodwork.
            </p>

            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="teak-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="teak-image-wrapper">
              <Image
                src="/work-17.jpeg"
                alt="Sagwan Teakwood Texture"
                fill
                className="teak-img"
                referrerPolicy="no-referrer"
              />
              <div className="teak-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
