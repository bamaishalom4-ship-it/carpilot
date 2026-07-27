import React from "react";
import { UserCheck, Navigation, Award, FileCheck2 } from "lucide-react";
import { Card } from "../ui/Card";

export const ValuePropsSection: React.FC = () => {
  const cards = [
    {
      icon: <UserCheck className="w-8 h-8 text-gold" />,
      title: "Verified Drivers",
      desc: "Every driver undergoes rigorous 5-stage background checks, NIN validation, FRSC license verification, and physical guarantor screening.",
    },
    {
      icon: <Navigation className="w-8 h-8 text-gold" />,
      title: "Live Trip Tracking",
      desc: "Monitor your vehicle in real time with automated route oversight, live GPS updates, and instant emergency notification triggers.",
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "Professional Standards",
      desc: "Extensively trained in executive etiquette, defensive driving, route optimization, and luxury vehicle handling.",
    },
    {
      icon: <FileCheck2 className="w-8 h-8 text-gold" />,
      title: "Complete Accountability",
      desc: "End-to-end trip records, digital check-in inspection, transparent rating system, and dedicated 24/7 support oversight.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">The Carpilot Standard</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why People Choose Carpilot
          </h2>
          <p className="text-grey text-base sm:text-lg">
            We eliminate risk and hassle so you can enjoy every journey with absolute confidence.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <Card key={idx} goldBorder className="flex flex-col justify-between">
              <div>
                <div className="p-3.5 w-fit rounded-2xl bg-gold/10 border border-gold/20 mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-grey leading-relaxed">{card.desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-gold font-semibold">
                <span>Standardized Quality</span>
                <span>0{idx + 1}</span>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
