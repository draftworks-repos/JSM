"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import "./Gallery.css";

// Mocks images with different aspect ratios
const INITIAL_IMAGES_COUNT = 9;

const ALL_IMAGES = [
  {
    id: 1,
    src: "https://rrsquare.in/wp-content/uploads/2026/01/16050.webp",
    aspect: "aspect-16-9",
  },
  {
    id: 2,
    src: "https://rrsquare.in/wp-content/uploads/2026/01/19451.webp",
    aspect: "aspect-1-1",
  },
  {
    id: 3,
    src: "https://rrsquare.in/wp-content/uploads/2026/01/WhatsApp-Image-2025-02-28-at-2.28.13-PM.webp",
    aspect: "aspect-9-16",
  },
  {
    id: 4,
    src: "https://rrsquare.in/wp-content/uploads/2026/01/54339.webp",
    aspect: "aspect-16-9",
  },
  {
    id: 5,
    src: "https://rrsquare.in/wp-content/uploads/2026/01/16050.webp",
    aspect: "aspect-9-16",
  }, // Reusing varying aspects
  {
    id: 6,
    src: "https://rrsquare.in/wp-content/uploads/2026/01/WhatsApp-Image-2025-02-28-at-2.28.13-PM.webp",
    aspect: "aspect-1-1",
  },
  {
    id: 7,
    src: "https://rrsquare.in/wp-content/uploads/2026/01/19451.webp",
    aspect: "aspect-16-9",
  },
  {
    id: 8,
    src: "https://rrsquare.in/wp-content/uploads/2026/01/54339.webp",
    aspect: "aspect-9-16",
  },
  {
    id: 9,
    src: "https://rrsquare.in/wp-content/uploads/2026/01/16050.webp",
    aspect: "aspect-1-1",
  },
  {
    id: 10,
    src: "https://rrsquare.in/wp-content/uploads/2026/01/19451.webp",
    aspect: "aspect-1-1",
  },
  {
    id: 11,
    src: "https://rrsquare.in/wp-content/uploads/2026/01/WhatsApp-Image-2025-02-28-at-2.28.13-PM.webp",
    aspect: "aspect-16-9",
  },
  {
    id: 12,
    src: "https://rrsquare.in/wp-content/uploads/2026/01/54339.webp",
    aspect: "aspect-9-16",
  },
  {
    id: 13,
    src: "https://rrsquare.in/wp-content/uploads/2026/01/16050.webp",
    aspect: "aspect-16-9",
  },
  {
    id: 14,
    src: "https://rrsquare.in/wp-content/uploads/2026/01/19451.webp",
    aspect: "aspect-1-1",
  },
];

export function Gallery() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_IMAGES_COUNT);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, ALL_IMAGES.length));
  };

  const visibleImages = ALL_IMAGES.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_IMAGES.length;

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-page-header">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge"
          >
            Portfolio Showcase
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="gallery-page-title"
          >
            A Glimpse into <span className="accent">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="gallery-page-description"
          >
            Explore our curated gallery featuring bespoke doors, luxurious
            interiors, and intricately crafted sacred spaces. Each piece tells a
            story of precision and passion.
          </motion.p>
        </div>

        <div className="gallery-masonry">
          {visibleImages.map((img, index) => (
            <motion.div
              key={img.id}
              className="gallery-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <div className={`gallery-img-wrapper ${img.aspect}`}>
                <Image
                  src={img.src}
                  alt={`Gallery Image ${img.id}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="gallery-img"
                  referrerPolicy="no-referrer"
                  data-lightbox
                />
              </div>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <motion.div
            className="load-more-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button className="btn-load-more" onClick={loadMore}>
              Load More
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
