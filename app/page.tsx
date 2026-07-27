"use client";

import React, { useState } from "react";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { BuiltForSection } from "@/components/sections/BuiltForSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhyCarpilotSection } from "@/components/sections/WhyCarpilotSection";
import { ValuePropsSection } from "@/components/sections/ValuePropsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { SafetyGridSection } from "@/components/sections/SafetyGridSection";
import { VerificationFlowSection } from "@/components/sections/VerificationFlowSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { EarlyIncentivesSection } from "@/components/sections/EarlyIncentivesSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { FounderStorySection } from "@/components/sections/FounderStorySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/sections/Footer";
import { LegalModal, LegalModalType } from "@/components/modals/LegalModal";

export default function Home() {
  const [activeRole, setActiveRole] = useState<"customer" | "driver" | "corporate">("customer");
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);

  const scrollToWaitlist = (role?: "customer" | "driver" | "corporate") => {
    if (role) {
      setActiveRole(role);
    }
    const element = document.getElementById("waitlist-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-gold selection:text-black">
      {/* Sticky Header */}
      <Header onJoinWaitlistClick={scrollToWaitlist} />

      {/* 1. Hero Section */}
      <HeroSection onJoinClick={scrollToWaitlist} />

      {/* 2. Built For Horizontal Strip */}
      <BuiltForSection />

      {/* 3. The Problem Section */}
      <ProblemSection />

      {/* 4. Why Carpilot Positioning Statement */}
      <WhyCarpilotSection />

      {/* 5. Why People Choose Carpilot (4 Core Value Cards) */}
      <ValuePropsSection />

      {/* 6. How Carpilot Works (6-Step Timeline) */}
      <HowItWorksSection />

      {/* 7. Safety Comes First (8-Item Icon Grid) */}
      <SafetyGridSection />

      {/* 8. Our Verification Process (5-Step Vetting Flow) */}
      <VerificationFlowSection />

      {/* 9. By the Numbers (Animated Stat Blocks) */}
      <StatsSection />

      {/* 10. Who Is Carpilot For? (3 Large Persona Cards) */}
      <TargetAudienceSection onRoleSelect={scrollToWaitlist} />

      {/* 11. Why Join Early? (Early Perks List) */}
      <EarlyIncentivesSection />

      {/* 12. Interactive Waitlist Form & Referral Engine */}
      <WaitlistSection initialRole={activeRole} />

      {/* 13. Founder Story */}
      <FounderStorySection />

      {/* 14. FAQ Accordion (12 Comprehensive Questions) */}
      <FAQSection />

      {/* 15. Final High-Impact CTA */}
      <FinalCTASection onJoinClick={() => scrollToWaitlist()} />

      {/* 16. Complete Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onJoinClick={() => scrollToWaitlist()}
      />

      {/* Legal Modal Overlay */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </main>
  );
}
