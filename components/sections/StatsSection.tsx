"use client";

import React, { useState, useEffect, useRef } from "react";

export const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "100%", label: "Drivers Verified Before Approval", highlight: "Zero compromise policy" },
    { value: "24/7", label: "Operational & Emergency Support", highlight: "Always on dispatch" },
    { value: "5-Tier", label: "Multiple Verification Layers", highlight: "Comprehensive vetting" },
    { value: "1", label: "Mission — Safe Professional Driver Services", highlight: "Transforming African mobility" },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-black border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-dark-card border border-white/10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-amber-200 mb-2">
                {stat.value}
              </h3>
              <p className="text-sm font-bold text-white mb-1">{stat.label}</p>
              <span className="text-xs text-gold/80 font-medium">{stat.highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
