import React from "react";
import { Zap, Percent, BellRing, TestTube2, Crown, Sparkles } from "lucide-react";
import { Card } from "../ui/Card";

export const EarlyIncentivesSection: React.FC = () => {
  const incentives = [
    {
      icon: <Zap className="w-6 h-6 text-gold" />,
      title: "Priority Access",
      desc: "Be first in line when Carpilot launches in Abuja, avoiding initial waiting queues.",
    },
    {
      icon: <Percent className="w-6 h-6 text-gold" />,
      title: "Launch Discounts",
      desc: "Enjoy up to 30% off your initial booking packages as an early community adopter.",
    },
    {
      icon: <BellRing className="w-6 h-6 text-gold" />,
      title: "Exclusive Updates",
      desc: "Get direct insider progress reports, feature previews, and city expansion announcements.",
    },
    {
      icon: <TestTube2 className="w-6 h-6 text-gold" />,
      title: "Beta Invitations",
      desc: "Test our mobile app before public launch and provide direct feedback to our product team.",
    },
    {
      icon: <Crown className="w-6 h-6 text-gold" />,
      title: "Founding Member Badge",
      desc: "Receive permanent Founding Member status and dedicated concierge customer support.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Early Member Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Join Early?
          </h2>
          <p className="text-grey text-base sm:text-lg">
            Lock in exclusive rewards and priority privileges before our official Abuja launch.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {incentives.map((item, idx) => (
            <Card key={idx} goldBorder className="bg-dark-card text-center flex flex-col items-center">
              <div className="p-3.5 rounded-2xl bg-gold/10 border border-gold/20 mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-grey leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
