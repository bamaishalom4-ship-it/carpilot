import React from "react";
import { AlertTriangle, MessageSquareOff, HelpCircle, EyeOff, ShieldAlert } from "lucide-react";
import { Card } from "../ui/Card";

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      icon: <MessageSquareOff className="w-6 h-6 text-red-400" />,
      title: "WhatsApp & Referral Gambling",
      desc: "Finding a driver through word-of-mouth or casual messaging groups offers zero verification, leaving your car and loved ones at risk.",
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-amber-400" />,
      title: "Unverified Backgrounds",
      desc: "Traditional driver sourcing lacks criminal background checks, license validation, or standardized skill evaluations.",
    },
    {
      icon: <EyeOff className="w-6 h-6 text-orange-400" />,
      title: "Zero Real-Time Tracking",
      desc: "Once a driver takes your keys, you have no visibility into route choice, speed, or current location.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-rose-400" />,
      title: "No Operational Accountability",
      desc: "If an incident or delays occur, there is no central platform, emergency support, or guarantor framework to protect you.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
            <AlertTriangle className="w-4 h-4" />
            <span>The Reality of Driver Hiring Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Relying on Unchecked Referrals Creates Risk
          </h2>

          <p className="text-grey text-base sm:text-lg leading-relaxed">
            Finding a driver for your personal vehicle shouldn&apos;t feel like a leap of faith. The current informal system is broken, unmonitored, and unsafe.
          </p>
        </div>

        {/* 4 Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item, idx) => (
            <Card key={idx} className="bg-dark-card border-white/10 hover:border-red-500/40">
              <div className="p-3 w-fit rounded-xl bg-white/5 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-grey leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
