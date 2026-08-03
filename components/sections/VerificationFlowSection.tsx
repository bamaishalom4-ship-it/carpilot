import React from "react";
import { UserCheck, FileCheck, ShieldCheck, Award, CheckCircle2, Lock } from "lucide-react";

export const VerificationFlowSection: React.FC = () => {
  const steps = [
    {
      num: "1",
      title: "Identity Verification",
      desc: "NIN, Voter's Card, or Passport validation against national database databases.",
      icon: <UserCheck className="w-6 h-6 text-gold" />,
    },
    {
      num: "2",
      title: "Driver's License Validation",
      desc: "FRSC license validity, class endorsement, and points history verification.",
      icon: <FileCheck className="w-6 h-6 text-gold" />,
    },
    {
      num: "3",
      title: "Background Screening",
      desc: "Criminal record check, address verification, and double physical guarantor vetting.",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
    },
    {
      num: "4",
      title: "Professional Assessment",
      desc: "Practical driving test, executive road etiquette examination, and vehicle safety check.",
      icon: <Award className="w-6 h-6 text-gold" />,
    },
    {
      num: "5",
      title: "Final Approval",
      desc: "Medical clearance, drug screen pass, and official Carpilot network badge issuance.",
      icon: <CheckCircle2 className="w-6 h-6 text-gold" />,
    },
  ];

  return (
    <section id="verification" className="py-20 md:py-28 bg-dark-surface text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
            <Lock className="w-4 h-4" />
            <span>Multi-Layer Vetting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Verification Process
          </h2>
          <p className="text-grey text-base sm:text-lg">
            We reject 92% of driver applicants to ensure only the highest standard of professionals operate your vehicle.
          </p>
        </div>

        {/* 5-Step Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-black border border-white/10 hover:border-gold/50 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-gold text-black font-extrabold text-sm flex items-center justify-center">
                    {item.num}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5">{item.icon}</div>
                </div>

                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-grey leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-right">
                <span className="text-[10px] text-gold font-semibold uppercase tracking-wider">
                  Passed Check 0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border border-gold/40 text-center">
          <p className="text-lg sm:text-xl font-bold text-white">
            &ldquo;Only qualified drivers can be carpilots&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
};
