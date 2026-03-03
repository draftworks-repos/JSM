"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Award, Shield, Star, Users } from "lucide-react";
import "./AboutContent.css";

export function AboutContent() {
  const highlights = [
    {
      icon: <Users size={24} />,
      title: "By Majid Khan",
      desc: "Visionary leadership driving architectural excellence.",
    },
    {
      icon: <Shield size={24} />,
      title: "Govt. Recognised",
      desc: "Official recognition by the Government of India.",
    },
    {
      icon: <Award size={24} />,
      title: "30+ Years",
      desc: "Three decades of mastery in timber and woodworking.",
    },
    {
      icon: <Star size={24} />,
      title: "Luxury Leader",
      desc: "The premier luxury timber merchant in Madhya Pradesh.",
    },
  ];

  return (
    <section className="about-content">
      <div className="container">
        <div className="about-highlights">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="highlight-icon">{item.icon}</div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="about-intro">
          <motion.div
            className="intro-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="company-name">JANTA SAW MILL (JSM)</h2>
            <p className="lead-text">By Majid Khan</p>
            <p className="sub-points">
              Government of India Recognised • 30+ Years of Excellence
            </p>
            <p className="description-text">
              Best Luxury Timber Merchant in MP
            </p>
            <p className="description-sub">
              Premium Teakwood Supplier • Bespoke Wooden Doors • Luxury Wood
              Interiors in Madhya Pradesh
            </p>
            <div className="content-body">
              <p>
                Founded on the principles of integrity and unparalleled
                craftsmanship, JANTA SAW MILL (JSM) has evolved into a
                cornerstone of luxury architectural woodwork in Central India.
                Under the stewardship of Majid Khan, we have spent over 30 years
                perfecting the art of timber selection and precision execution.
              </p>
              <p>
                Our facility combines traditional woodworking wisdom with
                state-of-the-art technology to deliver products that are not
                just furniture, but legacies. We specialize in the finest
                Teakwood and Sagon, ensuring that every door, wardrobe, and
                interior element we craft stands the test of time.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="intro-image"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-frame">
              <Image
                src="/4.jpeg"
                alt="JSM Workshop"
                fill
                className="about-img"
                referrerPolicy="no-referrer"
                data-lightbox
                data-gallery="about"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
