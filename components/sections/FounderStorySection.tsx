import React from "react";
import { Quote, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

export const FounderStorySection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container */}
        <div className="p-8 md:p-14 rounded-3xl bg-dark-card border border-gold/30 shadow-2xl relative overflow-hidden">
          
          {/* Background Decorative Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
                <Quote className="w-4 h-4" />
                <span>Why We Built Carpilot</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                &ldquo;Trust Should Never Be Optional When Choosing Someone to Operate Your Vehicle.&rdquo;
              </h2>

              <div className="space-y-4 text-grey text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Every day in Nigeria, thousands of car owners face a familiar dilemma: how do you find a dependable, professional driver you can trust with your vehicle, your family, or your business schedule?
                </p>
                <p>
                  For decades, people have relied on informal WhatsApp broadcasts, unverified referrals, or random hires. This lack of structure leads to constant anxiety over background checks, driving competence, and accountability.
                </p>
                <p className="text-white font-medium">
                  We built Carpilot to raise the standard of professional driver services across Africa through technology, rigorous verification, and unyielding operational accountability.
                </p>
              </div>

              {/* Signature Line */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white">The Carpilot Leadership Team</h4>
                  <p className="text-xs text-gold font-medium">Building the Future Infrastructure for Driver Services in Africa</p>
                </div>
                <div className="flex items-center gap-2 text-gold">
                  <HeartHandshake className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Right Graphic Badge Column */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-6 rounded-2xl bg-black border border-white/10 text-center space-y-3">
                <ShieldCheck className="w-10 h-10 text-gold mx-auto" />
                <h4 className="text-base font-bold text-white">Uncompromised Trust</h4>
                <p className="text-xs text-grey">
                  Every driver is identity-checked, background-screened, and practically evaluated before joining our platform.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-white/10 text-center space-y-3">
                <Sparkles className="w-10 h-10 text-gold mx-auto" />
                <h4 className="text-base font-bold text-white">Technology Driven</h4>
                <p className="text-xs text-grey">
                  Combining real-time GPS tracking, automated matching, and digital trip logs for seamless peace of mind.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
