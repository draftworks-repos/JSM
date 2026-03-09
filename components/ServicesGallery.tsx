"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./ServicesGallery.css";

export function ServicesGallery() {
  const sections = [
    {
      id: "Bespoke",
      title: "Bespoke Doors",
      layout: "layout-1",
      description:
        "Statement wooden doors handcrafted from premium teak, sagon, and hardwoods — designed to elevate luxury residences and heritage estates.",
      Gallery: [
        "/door-1.png",
        "/door-4.jpeg",
        "/door-5.jpeg",
        "/door-2.jpg",
        "/door-7.jpeg",
        "/door-6.jpeg",
        "/door-3.jpg",
      ],
    },
    {
      id: "Interiors",
      title: "Luxury Home Interiors",
      layout: "layout-2",
      description:
        "Complete wooden interiors including living spaces, bedrooms, kitchens, wardrobes, and architectural elements curated with premium materials.",
      Gallery: [
        "/gallery-7.jpeg",
        "/interior-2.jpeg",
        "/gallery-1.jpeg",
        "/interior-1.jpeg",
        "/interior-3.jpeg",
        "/interior-4.jpeg",
        "/interior-5.jpeg",
      ],
    },
    {
      id: "Sacred",
      title: "Mandirs & Sacred Spaces",
      layout: "layout-3",
      description:
        "Custom wooden mandirs crafted with spiritual sensitivity, traditional detailing, and superior-grade wood for timeless devotion spaces.",
      Gallery: [
        "/mandir.jpeg",
        "/mandir-2.jpeg",
        "/mandir-4.jpg",
        "/mandir-3.jpeg",
        "/mandir-5.jpeg",
        "/23.jpeg",
        "/21.jpeg",
      ],
    },
  ];

  return (
    <section className="services-page-gallery">
      {sections.map((section, sectionIdx) => (
        <div key={section.title} className="service-section" id={section.id}>
          <div className="service-section-header">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="service-section-title"
            >
              {section.title.split(" ")[0]}{" "}
              <span className="accent">
                {section.title.split(" ").slice(1).join(" ")}
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="service-section-description"
            >
              {section.description}
            </motion.p>
          </div>

          <div className={`bento-grid ${section.layout}`}>
            {section.Gallery.map((src, idx) => (
              <motion.div
                key={`${section.title}-${idx}`}
                className={`bento-item item-${idx + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Image
                  src={src}
                  alt={`${section.title} Gallery Image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                  data-lightbox
                  data-gallery={section.id}
                />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
