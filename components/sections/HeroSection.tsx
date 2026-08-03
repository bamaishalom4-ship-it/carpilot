"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Star, ShieldCheck, MapPin, Sparkles, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onJoinClick: (role?: "customer" | "driver") => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onJoinClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black text-white">
      {/* Background Decorative Gold Glow & Subtle Pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Launching Soon Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-gold animate-pulse" />
              <span>Launching Soon</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-white/80">Abuja, Nigeria</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Professional Drivers.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-amber-200">
                Trusted Journeys.
              </span>{" "}
              Complete Peace of Mind.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-grey font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Carpilot is the premier, technology-driven driver-on-demand platform connecting vehicle owners, families, businesses, and organizations with rigorously vetted, professional drivers in Nigeria. Not a ride-hailing app — your car, our verified professional driver.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onJoinClick("customer")}
                className="w-full sm:w-auto"
              >
                <span>Join the Waitlist</span>
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => onJoinClick("driver")}
                className="w-full sm:w-auto"
              >
                <span>Become a Driver</span>
              </Button>
            </div>

            {/* Tagline */}
            <p className="text-sm font-medium italic text-gold/90">
              &ldquo;Every journey in safe hands.&rdquo;
            </p>

            {/* Below Fold Badges: 5-Star Visual & City Coverage */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-grey">
              {/* 5-Star Rating Visual */}
              <div className="flex items-center gap-2">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-white font-bold">5.0 Vetted Standard</span>
              </div>

              <div className="h-4 w-px bg-white/20 hidden sm:block" />

              {/* Location Badge */}
              <div className="flex items-center gap-1.5 text-white/90 font-medium">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Serving Abuja first, expanding across Nigeria</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame with Glass Accent Card */}
              <div className="relative rounded-3xl overflow-hidden border border-gold/40 shadow-2xl shadow-gold/20 group">
                <Image
                  src="/images/carpilot-hero-driver.jpg"
                  alt="Carpilot Professional Executive Driver holding luxury vehicle door"
                  width={600}
                  height={750}
                  priority
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Gold Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Glass Verification Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/40">
                      <ShieldCheck className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-grey">Verification Status</p>
                      <p className="text-sm font-bold text-white">100% Background Screened</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
                    Verified
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
