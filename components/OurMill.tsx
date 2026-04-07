"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import "./OurMill.css";

export function OurMill() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  const media = [
    { src: "/add/1.mp4", alt: "Raw Timber Logs" },
    { src: "/add/2.mp4", alt: "Wood working Machinery" },
    { src: "/add/3.mp4", alt: "Log Processing" },
    { src: "/add/4.mp4", alt: "Premium Teak Stock" },
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
          {media.map((item, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="gallery-img-wrapper">
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="mill-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  data-lightbox
                  data-gallery="mill"
                />
                <div className="img-caption">{item.alt}</div>
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

        {!isAboutPage && (
          <motion.div
            className="mill-footer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/about" className="btn-mill-about">
              Discover Our Story <ArrowRight size={18} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
