"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./FounderStory.css";

export function FounderStory() {
  return (
    <section className="founder-story">
      <div className="container">
        <div className="founder-grid">
          <motion.div
            className="founder-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-stack">
              <div className="main-img-wrapper">
                <Image
                  src="/about/mill.jpeg"
                  alt="Majid Khan's Legacy"
                  fill
                  className="founder-img"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="floating-badge">
                <span className="years">40+</span>
                <span className="label">Years of Mastery</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="founder-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge-wrapper">
              <span className="badge">Founder Story</span>
            </div>
            <h2 className="founder-title">
              The Vision of <span>Majid Khan</span>
            </h2>
            <div className="story-text">
              <p>
                Founded by Mr. Majid Khan, Janta Saw Mill (JSM) began its
                journey more than 40 years ago in 1975 with a simple yet
                powerful vision — to bring the finest quality teakwood to homes,
                craftsmen, and builders who believe that true quality never
                fades with time.
              </p>
              <p>
                Majid Khan began with the trading of premium raw teakwood,
                carefully selecting timber that met the highest standards of
                strength and quality. What distinguished Janta Saw Mill from the
                beginning was not just the timber — but the integrity and trust
                behind every piece of wood supplied.
              </p>
              <p className="quote">
                "Janta Saw Mill is not just a business — it is the story of a
                man who believed that honesty, dedication, and quality would
                always stand strong, just like the wood he worked with."
              </p>
              <p>
                Through decades of commitment, Majid Khan did not simply build a
                saw mill — he built a heritage of trust and excellence in
                teakwood manufacturing. Today, JSM stands as a testament to that
                vision, delivering luxury wooden craftsmanship that is measured
                in generations.
              </p>
            </div>
            <div className="founder-footer">
              <div className="signature">
                <p className="name">Majid Khan</p>
                <p className="role">Founder, Janta Saw Mill</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
