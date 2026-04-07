"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "./ServicesGallery.css";

export function ServicesGallery() {
  const sections = [
    {
      id: "Premium",
      title: "Premium Sagwan Timber",
      layout: "layout-3",
      description:
        "High-quality, seasoned Sagwan (Teak) wood sourced for durability and rich grain, perfect for high-end construction and bespoke carpentry.",
      Gallery: [
        "/work-1.jpeg",
        "/add/timer-add-3.mp4",
        "/work-9.jpeg",
        "/work-4.jpeg",
        "/work-11.jpeg",
        "/work-13.jpeg",
        "/work-8.jpeg",
      ],
    },
    {
      id: "Custom",
      title: "Custom Furniture",
      layout: "layout-3",
      description:
        "Tailor-made furniture pieces that blend ergonomic design with artisanal wood carving to reflect your personal style and functional needs.",
      Gallery: [
        "/mandir.jpeg",
        "/mandir-2.jpeg",
        "/mandir-4.jpg",
        "/mandir-3.jpeg",
        "/mandir-5.jpeg",
        "/16.jpeg",
        "/interior-5.jpeg",
      ],
    },
    {
      id: "Windows",
      title: "Teakwood Windows",
      layout: "layout-2",
      description:
        "Custom-crafted Teakwood windows designed for architectural elegance, superior insulation, and lifelong durability.",
      Gallery: [
        "/window-1.jpeg",
        "/add/timer-add-4.mp4",
        "/window-5.jpeg",
        "/window-3.jpeg",
        "/window-6.jpeg",
        "/window-4.jpeg",
        "/window-2.jpeg",
      ],
    },
    {
      id: "Wooden",
      title: "Teakwood Doors",
      layout: "layout-1",
      description:
        "Statement Teakwood doors handcrafted from premium teak, sagon, and hardwoods designed to elevate luxury residences and heritage estates.",
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
      id: "Luxury",
      title: "Luxury Wood Interiors",
      layout: "layout-2",
      description:
        "Complete wooden interiors including living spaces, bedrooms, kitchens, wardrobes, and architectural elements curated with premium materials.",
      Gallery: [
        "/gallery-7.jpeg",
        "/interior-2.jpeg",
        "/gallery-1.jpeg",
        "/interior-1.jpeg",
        "/interior-3.jpeg",
        "/stairs-4.jpeg",
        "/stairs-3.jpeg",
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
