import React from "react";
import { Button } from "../ui/Button";
import { ChevronRight, ShieldCheck, Sparkles } from "lucide-react";

interface FinalCTASectionProps {
  onJoinClick: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onJoinClick }) => {
  return (
    <section className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
      {/* Background Decorative Radial Gradient */}
      <div className="absolute inset-0 bg-gold-glow pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Box */}
        <div className="p-10 md:p-16 rounded-3xl bg-gradient-to-br from-dark-card via-black to-dark-surface border border-gold/40 text-center space-y-8 shadow-2xl shadow-gold/20 relative">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Limited Founding Slots</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Be Among the First.
          </h2>

          <p className="text-grey text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Join thousands preparing for a safer, smarter way to hire professional drivers for personal and business vehicles in Nigeria.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onJoinClick}
              className="w-full sm:w-auto shadow-gold-lg"
            >
              <span>Join the Waitlist Now</span>
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>

          <div className="pt-6 flex items-center justify-center gap-2 text-xs text-grey font-medium">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Serving Abuja First &bull; 100% Background Screened Drivers &bull; Zero Spam</span>
          </div>

        </div>

      </div>
    </section>
  );
};
