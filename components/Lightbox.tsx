"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, X } from "lucide-react";
import "./Lightbox.css";

export default function Lightbox() {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const next = useCallback(
    () => setIndex((prev) => (prev + 1) % images.length),
    [images.length],
  );
  const prev = useCallback(
    () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)),
    [images.length],
  );

  // Event delegation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const img = target.closest("[data-lightbox]") as HTMLImageElement;
      if (!img) return;

      const gallery = img.dataset.gallery;

      // Single image mode
      if (!gallery) {
        setImages([img.src]);
        setIndex(0);
        setOpen(true);
        return;
      }

      const galleryImages = Array.from(
        document.querySelectorAll(`[data-lightbox][data-gallery="${gallery}"]`),
      ) as HTMLImageElement[];

      const sources = galleryImages.map((i) => i.src);
      const current = sources.indexOf(img.src);

      setImages(sources);
      setIndex(current);
      setOpen(true);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Keyboard
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, next, prev, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={close}
        >
          <motion.img
            key={images[index]}
            src={images[index]}
            className="lightbox-image"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <div className="lightbox-nav">
              <button
                className="lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
              >
                <ArrowLeft size={24} />
              </button>

              <button
                className="lightbox-next"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
              >
                <ArrowRight size={24} />
              </button>
            </div>
          )}

          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
          >
            <X size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
