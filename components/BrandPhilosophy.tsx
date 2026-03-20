"use client";

import { motion } from "motion/react";
import "./BrandPhilosophy.css";

export function BrandPhilosophy() {
  const principles = [
    {
      title: "Respect the wood",
      desc: "We honor the decades it took for the tree to grow by ensuring every cut is purposeful.",
    },
    {
      title: "Perfect the craft",
      desc: "Our artisans blend traditional techniques with modern precision for flawless execution.",
    },
    {
      title: "Deliver lasting excellence",
      desc: "We don't just create products; we build legacies that stand the test of generations.",
    },
  ];

  return (
    <section className="brand-philosophy">
      <div className="container">
        <div className="philosophy-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge-wrapper">
              <span className="badge">OUR VALUES</span>
            </div>
            <h2 className="philosophy-title">
              The JSM <span className="accent">Philosophy</span>
            </h2>
          </motion.div>
        </div>

        <div className="philosophy-grid">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="philosophy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="principle-number">0{index + 1}</div>
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-desc">{principle.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="philosophy-quote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <blockquote>
            "True craftsmanship is not measured in years — It is measured in
            generations."
          </blockquote>
          <p className="quote-badge">Rooted in Wood • Built with Luxury</p>
        </motion.div>
      </div>
    </section>
  );
}
