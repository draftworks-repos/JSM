"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "./ServicesGallery.css";

export function BentoGallery() {
  const sections = [
    {
      id: "Raw",
      title: "Raw Timber",
      layout: "layout-1",
      description:
        "High-grade Sagwan and premium hardwood logs, selected for strength and durability in structural and fine wood working.",
      Gallery: [
        "/work-1.jpeg",
        "/log-1.jpeg",
        "/work-13.jpeg",
        "/work-4.jpeg",
        "/work-12.jpeg",
        "/work-20.jpg",
        "/work-18.jpg",
      ],
    },
    {
      id: "Processing",
      title: "Timber Processing",
      layout: "layout-2",
      description:
        "Precision cutting and seasoning treatments to ensure stability and superior finish for high-end manufacturing.",
      Gallery: [
        "/add/timer-add-1.mp4",
        "/work-8.jpeg",
        "/add/timer-add-2.mp4",
        "/work-16.jpeg",
        "/work-15.jpeg",
        "/work-11.jpeg",
        "/work-3.jpeg",
      ],
    },
    {
      id: "Finished",
      title: "Finished Interiors",
      layout: "layout-3",
      description:
        "Bespoke furniture and luxury interiors that blend timeless aesthetics with modern functionality.",
      Gallery: [
        "/mandir-2.jpeg",
        "/mandir.jpeg",
        "/gallery-7.jpeg",
        "/door-4.jpeg",
        "/door-2.jpg",
        "/door-7.jpeg",
        "/door-3.jpg",
      ],
    },
  ];

  const isVideo = (src: string) =>
    src.toLowerCase().endsWith(".mp4") ||
    src.toLowerCase().endsWith(".webm") ||
    src.toLowerCase().endsWith(".m4v");

  return (
    <section className="services-page-gallery bg-2">
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
                {isVideo(src) ? (
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="bento-video"
                  />
                ) : (
                  <Image
                    src={src}
                    alt={`${section.title} Gallery Image ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    referrerPolicy="no-referrer"
                    data-lightbox
                    data-gallery={section.id}
                  />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="service-section-cta"
          >
            <Link
              href="https://wa.me/918349129777"
              target="_blank"
              className="header-cta"
            >
              Get Started
              <span className="arrow-circle">
                <ArrowRight className="btn-arrow" size={14} />
              </span>
            </Link>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
