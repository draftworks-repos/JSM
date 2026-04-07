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
      title: "Premium Sagwan Timber",
      href: "/services#Sacred",
      category: "Timber",
      description:
        "High-quality, seasoned Sagwan (Teak) wood sourced for durability and rich grain, perfect for high-end construction and bespoke carpentry.",
      image: "/sagwan.jpg",
    },
    {
      id: "B",
      title: "Teakwood Doors",
      href: "/services#Bespoke",
      category: "Craftsmanship",
      description:
        "Statement Teakwood doors handcrafted from premium teak, sagon, and hardwoods designed to elevate luxury residences and heritage estates.",
      image: "/door-4.jpeg",
    },
    {
      id: "C",
      title: "Luxury Wood Interiors",
      href: "/services#Interiors",
      category: "Interiors",
      description:
        "Complete wooden interiors including living spaces, bedrooms, kitchens, wardrobes, and architectural elements curated with premium materials.",
      image: "/interior.jpeg",
    },
    {
      id: "D",
      title: "Custom Furniture",
      href: "/services#Bespoke",
      category: "Craftsmanship",
      description:
        "Tailor-made furniture pieces that blend ergonomic design with artisanal wood carving to reflect your personal style and functional needs.",
      image: "/furniture.jpeg", // Suggested update to image path if applicable
    },
  ];

  return (
    <section className="services-section">
      <div className="overlay"></div>
      <Image
        src="/bg/bg-10.jpeg"
        alt="Background"
        fill
        priority
        className="services-bg-image"
        quality={100}
      />
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
