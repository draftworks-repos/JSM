"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./OurMill.css";

export function OurMill() {
  const images = [
    { src: "/work-13.jpeg", alt: "Timber Stacks" },
    { src: "/work-8.jpeg", alt: "Wood working Machinery" },
    { src: "/work-9.jpeg", alt: "Wood Processing" },
    { src: "/planks.jpeg", alt: "Finished Planks" },
  ];

  return (
    <section className="our-mill">
      <div className="container">
        <div className="mill-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge-wrapper">
              <span className="badge">OUR MILL</span>
            </div>
            <h2 className="mill-title">
              Craftsmanship Meets <span className="accent">Technology</span>
            </h2>
            <p className="mill-desc">
              Our facility combines traditional wood working wisdom with
              state-of-the-art precision technology. At JSM, every piece of
              timber is treated with the respect it deserves, ensuring that the
              natural character of the wood is preserved while achieving the
              highest standards of luxury finish.
            </p>
          </motion.div>
        </div>

        <div className="mill-gallery">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="gallery-img-wrapper">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="mill-img"
                  referrerPolicy="no-referrer"
                  data-lightbox
                  data-gallery="mill"
                />
                <div className="img-caption">{img.alt}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mill-stats-grid">
          <div className="stat-card">
            <span className="stat-number">40+</span>
            <span className="stat-label">Years of Expertise</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Certified Teakwood</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">Premium</span>
            <span className="stat-label">Machinery & Tools</span>
          </div>
        </div>
      </div>
    </section>
  );
}
