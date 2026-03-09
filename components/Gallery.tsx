"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import "./Gallery.css";

// Mocks images with different aspect ratios
const INITIAL_IMAGES_COUNT = 9;

const ALL_IMAGES = [
  { id: 1, src: "/door-6.jpeg" },
  { id: 2, src: "/stairs-3.jpeg" },
  { id: 3, src: "/gallery-1.jpeg" },
  { id: 4, src: "/work-2.jpeg" },
  { id: 5, src: "/interior.jpeg" },
  { id: 6, src: "/2.jpeg" },
  { id: 7, src: "/mandir.jpeg" },
  { id: 8, src: "/stairs-4.jpeg" },
  { id: 9, src: "/portfolio-1.jpeg" },
  { id: 10, src: "/door-1.png" },
  { id: 11, src: "/room-1.jpeg" },
  { id: 12, src: "/work-3.jpeg" },
  { id: 13, src: "/stairs-1.jpeg" },
  { id: 14, src: "/interior-1.jpeg" },
  { id: 15, src: "/work-1.jpeg" },
  { id: 16, src: "/3.jpeg" },
  { id: 17, src: "/1.jpeg" },
  { id: 18, src: "/door-2.jpg" },
  { id: 19, src: "/mandir-2.jpeg" },
  { id: 20, src: "/gallery-2.jpeg" },
  { id: 21, src: "/interior-2.jpeg" },
  { id: 22, src: "/work-4.jpeg" },
  { id: 23, src: "/room-2.jpeg" },
  { id: 24, src: "/4.jpeg" },
  { id: 25, src: "/door-3.jpg" },
  { id: 26, src: "/stairs-2.jpeg" },
  { id: 27, src: "/portfolio-2.jpeg" },
  { id: 28, src: "/interior-3.jpeg" },
  { id: 29, src: "/mandir-3.jpeg" },
  { id: 30, src: "/5.jpeg" },
  { id: 31, src: "/work-6.jpeg" },
  { id: 32, src: "/door-4.jpeg" },
  { id: 33, src: "/gallery-3.jpg" },
  { id: 34, src: "/room-3.jpeg" },
  { id: 35, src: "/6.jpeg" },
  { id: 36, src: "/interior-4.jpeg" },
  { id: 37, src: "/work-7.jpeg" },
  { id: 38, src: "/mandir-4.jpg" },
  { id: 39, src: "/portfolio-2.jpg" },
  { id: 40, src: "/door-5.jpeg" },
  { id: 41, src: "/7.jpeg" },
  { id: 42, src: "/gallery-4.jpg" },
  { id: 43, src: "/room-4.jpeg" },
  { id: 44, src: "/work-8.jpeg" },
  { id: 45, src: "/interior-5.jpeg" },
  { id: 46, src: "/8.jpeg" },
  { id: 47, src: "/mandir-5.jpeg" },
  { id: 48, src: "/door-7.jpeg" },
  { id: 49, src: "/portfolio-3.jpeg" },
  { id: 50, src: "/work-9.jpeg" },
  { id: 51, src: "/9.jpeg" },
  { id: 52, src: "/gallery-5.jpeg" },
  { id: 53, src: "/whyus.jpeg" },
  { id: 54, src: "/work-10.jpeg" },
  { id: 55, src: "/10.jpeg" },
  { id: 56, src: "/portfolio-4.jpeg" },
  { id: 57, src: "/gallery-6.jpeg" },
  { id: 58, src: "/work-11.jpeg" },
  { id: 59, src: "/11.jpeg" },
  { id: 60, src: "/portfolio-5.jpeg" },
  { id: 61, src: "/work-12.jpeg" },
  { id: 62, src: "/12.jpeg" },
  { id: 63, src: "/gallery-7.jpeg" },
  { id: 64, src: "/work-13.jpeg" },
  { id: 65, src: "/13.jpeg" },
  { id: 66, src: "/work-14.jpeg" },
  { id: 67, src: "/14.jpeg" },
  { id: 68, src: "/work-15.jpeg" },
  { id: 69, src: "/15.jpeg" },
  { id: 70, src: "/work-16.jpeg" },
  { id: 71, src: "/16.jpeg" },
  { id: 72, src: "/17.jpeg" },
  { id: 73, src: "/18.jpeg" },
  { id: 74, src: "/19.jpeg" },
  { id: 75, src: "/20.jpeg" },
  { id: 76, src: "/21.jpeg" },
  { id: 77, src: "/22.jpeg" },
  { id: 78, src: "/23.jpeg" },
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
              <div className={`gallery-img-wrapper`}>
                <Image
                  src={img.src}
                  alt={`Gallery Image ${img.id}`}
                  width={800}
                  height={1200}
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
