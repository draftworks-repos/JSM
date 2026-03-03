"use client";

import { Shield, Star, Award, CheckCircle } from "lucide-react";
import "./LegacyStrip.css";

export function LegacyStrip() {
  const items = [
    { text: "500+ Luxury Projects Across MP", icon: <Star size={32} /> },
    { text: "Premium Teak & Sagon Specialists", icon: <Award size={32} /> },
    { text: "Bespoke Wooden Doors", icon: <Shield size={32} /> },
    { text: "Complete Luxury Interiors", icon: <CheckCircle size={32} /> },
  ];

  // Duplicate items for seamless marquee
  const marqueeItems = [...items, ...items, ...items];

  return (
    <section className="legacy-strip-wrapper">
      <div className="container">
        <div className="legacy-marquee-container">
          <div className="legacy-marquee">
            <div className="marquee-content">
              {marqueeItems.map((item, index) => (
                <div key={index} className="marquee-item">
                  <span className="marquee-icon">{item.icon}</span>
                  <span className="marquee-text">{item.text}</span>
                  <div className="marquee-divider" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
