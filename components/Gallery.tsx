"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import "./Gallery.css";

// Mocks images with different aspect ratios
const INITIAL_IMAGES_COUNT = 9;

const ALL_IMAGES = [
  { id: 1, src: "/1.jpeg", aspect: "aspect-10-16" },
  { id: 2, src: "/2.jpeg", aspect: "aspect-10-16" },
  { id: 3, src: "/3.jpeg", aspect: "aspect-10-16" },
  { id: 4, src: "/4.jpeg", aspect: "aspect-10-16" },

  { id: 5, src: "/5.jpeg", aspect: "aspect-16-10" },
  { id: 6, src: "/6.jpeg", aspect: "aspect-16-10" },
  { id: 7, src: "/7.jpeg", aspect: "aspect-16-10" },
  { id: 8, src: "/8.jpeg", aspect: "aspect-16-10" },
  { id: 9, src: "/9.jpeg", aspect: "aspect-16-10" },

  { id: 10, src: "/10.jpeg", aspect: "aspect-10-16" },
  { id: 11, src: "/11.jpeg", aspect: "aspect-10-16" },

  { id: 12, src: "/12.jpeg", aspect: "aspect-16-10" },

  { id: 13, src: "/13.jpeg", aspect: "aspect-10-16" },
  { id: 14, src: "/14.jpeg", aspect: "aspect-10-16" },
  { id: 15, src: "/15.jpeg", aspect: "aspect-10-16" },
  { id: 16, src: "/16.jpeg", aspect: "aspect-10-16" },

  { id: 17, src: "/17.jpeg", aspect: "aspect-16-10" },
  { id: 18, src: "/18.jpeg", aspect: "aspect-16-10" },

  { id: 19, src: "/19.jpeg", aspect: "aspect-10-16" },
  { id: 20, src: "/20.jpeg", aspect: "aspect-16-10" },

  { id: 21, src: "/21.jpeg", aspect: "aspect-10-16" },
  { id: 22, src: "/22.jpeg", aspect: "aspect-16-10" },

  { id: 23, src: "/23.jpeg", aspect: "aspect-10-16" },
  { id: 24, src: "/24.jpeg", aspect: "aspect-10-16" },

  { id: 25, src: "/25.jpeg", aspect: "aspect-16-10" },
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
