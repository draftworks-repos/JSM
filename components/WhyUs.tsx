"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import "./WhyUs.css";
import { ArrowRight } from "lucide-react";

export function WhyUs() {
  const inlineImages = {
    table:
      "https://res.cloudinary.com/dgf5ru8jw/image/upload/w_250,c_limit,q_auto,f_auto,dpr_auto,fl_lossy/v1772009688/wooden-dining-table-with-chairs-furniture-in-living-room-for-clip-art-and-element-free-png_hr5kov.webp",
    furniture:
      "https://res.cloudinary.com/dgf5ru8jw/image/upload/w_250,c_limit,q_auto,f_auto,dpr_auto,fl_lossy/v1772009674/compressed_2282e72e668176babc3ed7f284adaa3a_iuwkur.webp",
    living:
      "https://res.cloudinary.com/dgf5ru8jw/image/upload/w_250,c_limit,q_auto,f_auto,dpr_auto,fl_lossy/v1772009614/modern-wooden-living-room-furniture-set-with-wicker-accents-free-png_lmhanf.png",
    office:
      "https://res.cloudinary.com/dgf5ru8jw/image/upload/f_auto,q_auto,w_1200/v1772452824/modern-home-office-workspace-setup-with-desk-computer-chair_1_utxehm.png",
    sofa: "https://res.cloudinary.com/dgf5ru8jw/image/upload/w_250,c_limit,q_auto,f_auto,dpr_auto,fl_lossy/v1772009584/high-end-wooden-sofa-furniture-on-transparent-background-free-png_ei7sb2.png",
  };

  return (
    <section className="why-us">
      <div className="container">
        <div className="badge-wrapper">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="badge"
          >
            WHY US?
          </motion.span>
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="why-us-heading"
        >
          We are crafting
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 15,
              delay: 0.6,
            }}
            className="inline-img-wrapper"
          >
            <Image
              src={inlineImages.furniture}
              alt="Furniture"
              width={60}
              height={40}
              className="inline-img"
            />
          </motion.span>
          amazing products that
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 15,
              delay: 0.6,
            }}
            className="inline-img-wrapper"
          >
            <Image
              src={inlineImages.sofa}
              alt="Sofa"
              width={60}
              height={40}
              className="inline-img"
            />
          </motion.span>
          delight, constantly uplift the
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 15,
              delay: 0.6,
            }}
            className="inline-img-wrapper"
          >
            <Image
              src={inlineImages.living}
              alt="Living Room"
              width={60}
              height={40}
              className="inline-img"
            />
          </motion.span>
          home, office
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 15,
              delay: 0.6,
            }}
            className="inline-img-wrapper"
          >
            <Image
              src={inlineImages.office}
              alt="Living Room"
              width={60}
              height={40}
              className="inline-img"
            />
          </motion.span>
          environment
        </motion.h2>

        <div className="feature-image-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="feature-image-wrapper"
          >
            <Image
              src="/whyus.jpeg"
              alt="Feature Interior"
              fill
              className="feature-image"
              referrerPolicy="no-referrer"
            />
            <div className="feature-overlay">
              <h3 className="feature-title">
                Explore the appearance <br /> of your residence
              </h3>
              <Link href="/contact" className="header-cta">
                Get Started
                <span className="arrow-circle">
                  <ArrowRight className="btn-arrow" size={14} />
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="floating-image-card"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="floating-image-wrapper">
              <Image
                src="/mandir-2.jpg"
                alt="Floating Detail"
                fill
                className="floating-image"
                referrerPolicy="no-referrer"
                data-lightbox
                data-gallery="why-us"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
