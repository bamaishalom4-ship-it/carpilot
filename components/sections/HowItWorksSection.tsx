import React from "react";
import { CalendarCheck, UserCheck2, CarFront, ShieldCheck, CheckCircle, FileText } from "lucide-react";

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Book",
      desc: "Schedule a driver on-demand for a single trip, full day, or recurring schedule.",
      icon: <CalendarCheck className="w-6 h-6 text-gold" />,
    },
    {
      step: "02",
      title: "We Match You",
      desc: "Our platform pairs your vehicle with a verified professional driver nearby.",
      icon: <UserCheck2 className="w-6 h-6 text-gold" />,
    },
    {
      step: "03",
      title: "Driver Arrives",
      desc: "Your uniformed driver completes identity verification and vehicle check-in.",
      icon: <CarFront className="w-6 h-6 text-gold" />,
    },
    {
      step: "04",
      title: "Drive Begins",
      desc: "Relax or work in your backseat with real-time GPS monitoring & emergency SOS protection.",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
    },
    {
      step: "05",
      title: "Trip Completed",
      desc: "Your vehicle is safely parked and handed over back to you with complete care.",
      icon: <CheckCircle className="w-6 h-6 text-gold" />,
    },
    {
      step: "06",
      title: "Trip Summary",
      desc: "Receive digital receipt, mileage records, and rate your professional driver.",
      icon: <FileText className="w-6 h-6 text-gold" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-dark-surface text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
            Simple 6-Step Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Carpilot Works
          </h2>
          <p className="text-grey text-base sm:text-lg">
            From booking to arrival, every step is designed for ease, safety, and operational excellence.
          </p>
        </div>

        {/* Timeline Desktop Grid / Mobile Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
          
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-black border border-white/10 hover:border-gold/50 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Top Step Pill & Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-gold bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20">
                    Step {item.step}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 group-hover:bg-gold/20 transition-colors">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-grey leading-relaxed">{item.desc}</p>
              </div>

              {/* Connecting Line Indicator */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-end">
                <span className="text-[10px] text-grey/60 font-mono uppercase tracking-wider">
                  Phase 0{idx + 1}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
