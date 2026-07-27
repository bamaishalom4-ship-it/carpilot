import React from "react";
import { UserCheck, Car, Building2, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

interface TargetAudienceSectionProps {
  onRoleSelect: (role: "customer" | "driver" | "corporate") => void;
}

export const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({ onRoleSelect }) => {
  const audiences = [
    {
      role: "customer" as const,
      icon: <UserCheck className="w-8 h-8 text-gold" />,
      title: "Individual & Family Vehicle Owners",
      cta: "Need a professional driver? Join today.",
      desc: "Hire a vetted driver to take you to work, chauffeur your family, handle weekend errands, or drive you home safely after night events.",
      bullets: ["On-demand & full-day hire", "Complete vehicle safety", "Live GPS tracking for peace of mind"],
    },
    {
      role: "driver" as const,
      icon: <Car className="w-8 h-8 text-gold" />,
      title: "Professional Drivers",
      cta: "Want better opportunities? Join our network.",
      desc: "Earn competitive income operating premium vehicles for respectful clients. Enjoy flexible hours, structured payouts, and career support.",
      bullets: ["Fair compensation & bonuses", "Dignified work environment", "Dedicated driver safety support"],
    },
    {
      role: "corporate" as const,
      icon: <Building2 className="w-8 h-8 text-gold" />,
      title: "Businesses & Organizations",
      cta: "Manage transportation with trusted drivers.",
      desc: "Streamline executive travel and corporate fleet staffing with pre-screened, protocol-trained drivers for your company vehicles.",
      bullets: ["Centralized corporate billing", "Dedicated fleet managers", "Flexible short/long term contracts"],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-dark-surface text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
            Tailored Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Who Is Carpilot For?
          </h2>
          <p className="text-grey text-base sm:text-lg">
            Whether you own a personal vehicle, drive professionally, or manage corporate transportation, Carpilot delivers peace of mind.
          </p>
        </div>

        {/* 3 Large Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((aud) => (
            <div
              key={aud.role}
              className="p-8 rounded-3xl bg-black border border-white/10 hover:border-gold/60 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="p-4 w-fit rounded-2xl bg-gold/10 border border-gold/20 mb-6 group-hover:scale-110 transition-transform">
                  {aud.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{aud.title}</h3>
                <p className="text-sm text-grey leading-relaxed mb-6">{aud.desc}</p>

                <ul className="space-y-2 mb-8">
                  {aud.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant="outline"
                size="md"
                fullWidth
                onClick={() => onRoleSelect(aud.role)}
                className="group-hover:bg-gold group-hover:text-black group-hover:border-gold"
              >
                <span>{aud.cta}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
