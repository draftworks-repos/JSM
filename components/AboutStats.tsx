'use client';

import { motion } from 'motion/react';
import './AboutStats.css';

export function AboutStats() {
  const stats = [
    { number: '30+', label: 'Years of Mastery' },
    { number: '500+', label: 'Luxury Projects' },
    { number: '100%', label: 'Material Authenticity' },
    { number: '25+', label: 'Expert Artisans' },
  ];

  return (
    <section className="about-stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
