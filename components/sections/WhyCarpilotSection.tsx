import React from "react";
import Image from "next/image";
import { CheckCircle2, Shield, Target, Car } from "lucide-react";

export const WhyCarpilotSection: React.FC = () => {
  return (
    <section id="why-carpilot" className="py-20 md:py-28 bg-dark-surface relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Image with Gold Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-2xl group">
              <Image
                src="/images/carpilot-driver-tech.jpg"
                alt="Carpilot driver navigating with tablet in luxury vehicle"
                width={600}
                height={500}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              
              {/* Overlay Positioning Callout */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/80 backdrop-blur-md border border-gold/30">
                <div className="flex items-center gap-3 mb-2">
                  <Car className="w-6 h-6 text-gold" />
                  <h4 className="text-base font-bold text-white">Your Vehicle. Our Driver.</h4>
                </div>
                <p className="text-xs text-grey">
                  We supply top-tier professional drivers to operate your personal or company vehicles with ultimate care.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Positioning */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
              <Shield className="w-4 h-4" />
              <span>Built Differently</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A Platform Built on{" "}
              <span className="text-gold">Trust &amp; Precision</span> — Not Ride-Hailing
            </h2>

            <p className="text-grey text-base sm:text-lg leading-relaxed">
              Carpilot is explicitly <strong>NOT</strong> a ride-hailing app. We don&apos;t send random commercial taxis to pick you up. Instead, we match you with background-screened, executive-grade drivers who operate <em>your own vehicle</em> whenever you need them.
            </p>

            <div className="p-6 rounded-2xl bg-black/60 border border-gold/20 space-y-4">
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-white">Our Core Mission</h3>
                  <p className="text-sm text-grey leading-relaxed">
                    To bring absolute trust, uncompromised professionalism, and end-to-end accountability to driver services across Nigeria and Africa.
                  </p>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                "100% Background Screened",
                "Full Driver Accountability",
                "Real-Time Live Tracking",
                "Personal & Corporate Fleet Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm font-medium text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
