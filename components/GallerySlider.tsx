"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import "./GallerySlider.css";

export function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      src: "/12.jpeg",
      title: "Luxury Wall Interior",
    },
    {
      src: "/6.jpeg",
      title: "Corner Wood Sofa",
    },
    {
      src: "/20.jpeg",
      title: "Modern Wood Cabin",
    },
    {
      src: "/9.jpeg",
      title: "Modern Kitchen Interior",
    },
    {
      src: "/5.jpeg",
      title: "Kitchen Interior Detail",
    },
    {
      src: "/24.jpeg",
      title: "Modern Home Furniture",
    },
    {
      src: "/18.jpeg",
      title: "Modern Wood Cabinet",
    },
  ];
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="gallery" className="gallery-slider-section">
      <div className="container">
        <div className="gallery-slider-header">
          <div className="header-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="badge"
            >
              Gallery
            </motion.span>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="gallery-title"
            >
              A showcase of over 500 premium and{" "}
              <span className="accent">luxury projects</span> across MP
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="gallery-description"
            >
              Reflecting refined craftsmanship and precision execution.
            </motion.p>
          </div>
          <div className="header-right">
            <Link href="/gallery" className="btn-view-all text">
              View More
            </Link>
            <Link href="/gallery" className="btn-view-all">
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="gallery-slider-viewport">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="gallery-slide"
            >
              <div className="gallery-image-container">
                <Image
                  src={projects[currentIndex].src}
                  alt={projects[currentIndex].title}
                  fill
                  className="gallery-img"
                  referrerPolicy="no-referrer"
                  priority
                />
                <div className="gallery-overlay">
                  <span className="project-category">Featured Project</span>
                  <h3 className="project-title">
                    {projects[currentIndex].title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="gallery-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`dot ${index === currentIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
        <div className="bottom-navigation">
          <div className="gallery-nav">
            <button
              onClick={prevSlide}
              className="nav-btn prev"
              aria-label="Previous slide"
            >
              <ArrowLeft size={16} />
              Previous
            </button>
            <button
              onClick={nextSlide}
              className="nav-btn next"
              aria-label="Next slide"
            >
              Next
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
