"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, X } from "lucide-react";
import "./Lightbox.css";

export default function Lightbox() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<{ src: string; type: "image" | "video" }[]>([]);
  const [index, setIndex] = useState(0);

  const isVideo = (src: string) =>
    src.toLowerCase().endsWith(".mp4") ||
    src.toLowerCase().endsWith(".webm") ||
    src.toLowerCase().endsWith(".m4v") ||
    src.toLowerCase().endsWith(".ogg");

  const close = useCallback(() => setOpen(false), []);
  const next = useCallback(
    () => setIndex((prev) => (prev + 1) % items.length),
    [items.length],
  );
  const prev = useCallback(
    () => setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1)),
    [items.length],
  );

  // Event delegation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el = target.closest("[data-lightbox]") as
        | HTMLImageElement
        | HTMLVideoElement;
      if (!el) return;

      const gallery = el.dataset.gallery;
      const getSrc = (element: HTMLElement) =>
        (element as HTMLImageElement | HTMLVideoElement).currentSrc ||
        (element as HTMLImageElement | HTMLVideoElement).src ||
        "";

      // Single item mode
      if (!gallery) {
        const src = getSrc(el);
        setItems([
          { src, type: (isVideo(src) ? "video" : "image") as "image" | "video" },
        ]);
        setIndex(0);
        setOpen(true);
        return;
      }

      const galleryElements = Array.from(
        document.querySelectorAll(`[data-lightbox][data-gallery="${gallery}"]`),
      ) as (HTMLImageElement | HTMLVideoElement)[];

      const sources = galleryElements.map((i) => {
        const src = getSrc(i);
        return {
          src,
          type: (isVideo(src) ? "video" : "image") as "image" | "video",
        };
      });
      const current = sources.findIndex((i) => i.src === getSrc(el));

      setItems(sources);
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
          {items[index].type === "video" ? (
            <motion.video
              key={items[index].src}
              src={items[index].src}
              className="lightbox-video"
              controls
              autoPlay
              muted
              loop
              playsInline
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <motion.img
              key={items[index].src}
              src={items[index].src}
              className="lightbox-image"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {items.length > 1 && (
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
