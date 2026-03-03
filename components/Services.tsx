"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "./Services.css";

export function Services() {
  const services = [
    {
      id: "A",
      title: "Bespoke Doors",
      href: "/services#Bespoke",
      category: "Craftsmanship",
      description:
        "Statement wooden doors handcrafted from premium teak, sagon, and hardwoods — designed to elevate luxury residences and heritage estates.",
      image: "/1.jpeg",
    },
    {
      id: "B",
      title: "Luxury Home Interiors",
      href: "/services#Interiors",
      category: "Interiors",
      description:
        "Complete wooden interiors including living spaces, bedrooms, kitchens, wardrobes, and architectural elements curated with premium materials.",
      image: "/15.jpeg",
    },
    {
      id: "C",
      title: "Mandirs & Sacred Spaces",
      href: "/services#Sacred",
      category: "Sacred",
      description:
        "Custom wooden mandirs crafted with spiritual sensitivity, traditional detailing, and superior-grade wood for timeless devotion spaces.",
      image: "/23.jpeg",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <div className="header-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="badge"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="services-title"
            >
              Services <span className="accent">Overview</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="services-subtitle"
            >
              Three Pillars of Architectural Craftsmanship
            </motion.p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-image-wrapper">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="service-img"
                  referrerPolicy="no-referrer"
                />
                <div className="service-overlay">
                  {/* <span className="service-id-badge">{service.id}</span> */}
                  <span className="service-category">{service.category}</span>
                  <Link href={service.href}>
                    <h3 className="service-card-title">{service.title}</h3>
                  </Link>
                  <p className="service-card-description">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="services-footer">
          <Link
            href="/services"
            className="btn-view-services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            View More <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
