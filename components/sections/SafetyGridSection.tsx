import React from "react";
import {
  ShieldAlert,
  MapPin,
  Siren,
  History,
  Star,
  Lock,
  FileSpreadsheet,
  BadgeCheck,
} from "lucide-react";
import { Card } from "../ui/Card";

export const SafetyGridSection: React.FC = () => {
  const safetyFeatures = [
    {
      icon: <BadgeCheck className="w-7 h-7 text-gold" />,
      title: "Driver Verification",
      desc: "5-stage background vetting, criminal record checks, and mandatory physical guarantor verification.",
    },
    {
      icon: <MapPin className="w-7 h-7 text-gold" />,
      title: "Live GPS Tracking",
      desc: "Real-time location and trip progress monitoring accessible by account owners and emergency contacts.",
    },
    {
      icon: <Siren className="w-7 h-7 text-gold" />,
      title: "Emergency SOS",
      desc: "Instant panic button alerting our 24/7 security dispatch team and emergency responders.",
    },
    {
      icon: <History className="w-7 h-7 text-gold" />,
      title: "Trip Records",
      desc: "Complete digital log of start/end times, exact mileage, routes taken, and driver check-in photos.",
    },
    {
      icon: <Star className="w-7 h-7 text-gold" />,
      title: "Driver Ratings",
      desc: "Continuous performance evaluation maintaining strict 4.8+ minimum star rating thresholds.",
    },
    {
      icon: <Lock className="w-7 h-7 text-gold" />,
      title: "Secure Communication",
      desc: "Encrypted in-app messaging and masked phone numbers to protect customer personal privacy.",
    },
    {
      icon: <FileSpreadsheet className="w-7 h-7 text-gold" />,
      title: "Incident Reporting",
      desc: "Direct support hotline with swift claims handling and mandatory incident investigation protocols.",
    },
    {
      icon: <ShieldAlert className="w-7 h-7 text-gold" />,
      title: "Identity Validation",
      desc: "Biometric and government ID validation prior to every single driver assignment.",
    },
  ];

  return (
    <section id="safety" className="py-20 md:py-28 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
            <ShieldAlert className="w-4 h-4" />
            <span>Uncompromising Security</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Safety Comes First
          </h2>
          <p className="text-grey text-base sm:text-lg">
            An 8-tier safety matrix designed to safeguard your vehicle, privacy, and personal peace of mind.
          </p>
        </div>

        {/* 8 Item Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyFeatures.map((item, idx) => (
            <Card key={idx} className="bg-dark-card border-white/10 hover:border-gold/50">
              <div className="p-3 w-fit rounded-xl bg-gold/10 border border-gold/20 mb-4">
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
