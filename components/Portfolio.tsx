"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import "./Portfolio.css";

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Modern Living Space",
      category: "Residential",
      image: "/8.jpeg",
      featured: true,
    },
    {
      id: 2,
      title: "Contemporary Kitchen",
      category: "Residential",
      image: "/9.jpeg",
    },
    {
      id: 3,
      title: "Minimalist Dining",
      category: "Residential",
      image: "/3.jpeg",
    },
    {
      id: 4,
      title: "Executive Office",
      category: "Commercial",
      image: "/20.jpeg",
    },
    {
      id: 5,
      title: "Elegant Bedroom",
      category: "Residential",
      image: "/17.jpeg",
    },
    {
      id: 6,
      title: "Corporate Workspace",
      category: "Commercial",
      image: "/16.jpeg",
    },
  ];

  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <div className="header-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="badge"
            >
              Our Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="portfolio-title"
            >
              Spaces We’ve <span className="accent">Crafted!</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="portfolio-subtitle"
            >
              Not Just Designed — Expertly Delivered
            </motion.p>
          </div>
          <div className="header-right">
            <Link href="/gallery" className="btn-view-all text">
              View All Projects
            </Link>
            <Link href="/gallery" className="btn-view-all">
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="portfolio-grid">
          {/* Featured Large Card */}
          <motion.div
            className="grid-item featured"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-wrapper">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="project-img"
                referrerPolicy="no-referrer"
                data-lightbox
                data-gallery="portfolio"
              />
              <div className="project-overlay">
                <span className="project-category">{projects[0].category}</span>
                <h3 className="project-title">{projects[0].title}</h3>
              </div>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="grid-stack">
            {projects.slice(1, 3).map((project, index) => (
              <motion.div
                key={project.id}
                className="grid-item small"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="image-wrapper">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="project-img"
                    referrerPolicy="no-referrer"
                    data-lightbox
                    data-gallery="portfolio"
                  />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid-row">
            {projects.slice(3).map((project, index) => (
              <motion.div
                key={project.id}
                className="grid-item medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
              >
                <div className="image-wrapper">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="project-img"
                    referrerPolicy="no-referrer"
                    data-lightbox
                    data-gallery="portfolio"
                  />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="portfolio-description"
        >
          <p>
            Our portfolio reflects a commitment to design accuracy, material
            authenticity, and refined execution. Every project is delivered with
            a disciplined process and premium finish. We collaborate closely
            with architects, interior studios, and homeowners to ensure each
            space is not only aesthetic but durable, functional, & true to the
            original design intent.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
