import React from "react";
import { User, Users, Briefcase, Truck, Landmark } from "lucide-react";

export const BuiltForSection: React.FC = () => {
  const segments = [
    { title: "Individuals", icon: <User className="w-5 h-5 text-gold" />, desc: "On-demand drivers for personal errands & evening outings" },
    { title: "Families", icon: <Users className="w-5 h-5 text-gold" />, desc: "Safe, trusted transportation for school runs & family travel" },
    { title: "Businesses", icon: <Briefcase className="w-5 h-5 text-gold" />, desc: "Executive drivers for clients, meetings & daily office commutes" },
    { title: "Corporate Fleets", icon: <Truck className="w-5 h-5 text-gold" />, desc: "Flexible driver staffing for enterprise & organization vehicles" },
    { title: "Government Agencies", icon: <Landmark className="w-5 h-5 text-gold" />, desc: "Vetted protocol drivers for diplomatic & official engagements" },
  ];

  return (
    <section className="py-12 bg-dark-surface border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-grey mb-8">
          Designed & Built Specially For
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {segments.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl bg-black/50 border border-white/5 hover:border-gold/30 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="p-3 rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors mb-3">
                {item.icon}
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
              <p className="text-xs text-grey/80 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
