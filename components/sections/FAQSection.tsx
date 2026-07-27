"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Carpilot?",
      a: "Carpilot is a premium, technology-driven platform that connects vehicle owners, families, and corporate organizations with verified, professional drivers to operate their own vehicles on-demand. Carpilot is explicitly NOT a ride-hailing app — we do not supply taxis; we provide background-screened drivers for your vehicle.",
    },
    {
      q: "How are Carpilot drivers verified?",
      a: "Drivers undergo a rigorous 5-stage vetting protocol including Government ID validation (NIN/Voter's card/Passport), official FRSC driver's license checks, criminal background screening, physical guarantor verification, and executive road safety & etiquette assessments.",
    },
    {
      q: "Which cities are you launching in first?",
      a: "Carpilot will launch in Abuja first, followed by rapid expansion across major urban commercial hubs in Nigeria including Lagos, Port Harcourt, and Kano.",
    },
    {
      q: "How does business & corporate registration work?",
      a: "Corporate accounts allow companies to request protocol drivers for executive travel, manage daily employee transportation, and access centralized monthly billing with dedicated account management support.",
    },
    {
      q: "How does pricing work?",
      a: "Pricing is transparent and flexible based on duration (hourly, full-day, multi-day) and driver classification. Detailed rate cards will be published prior to public launch in Abuja with early waitlist member discounts.",
    },
    {
      q: "How can professional drivers sign up?",
      a: "Drivers can apply by selecting the 'Professional Driver' option in our waitlist form. Once screening opens, shortlisted candidates will be invited for physical verification, interviews, and driving assessments.",
    },
    {
      q: "When will the mobile app be available?",
      a: "The Carpilot iOS and Android mobile apps will launch initially to waitlist members for closed beta testing, followed by public app store release shortly thereafter.",
    },
    {
      q: "How does live trip tracking work?",
      a: "Once a driver begins a trip in your vehicle, live GPS tracking enables you (or designated emergency contacts) to monitor location, speed, route progress, and estimated time of arrival in real time.",
    },
    {
      q: "How do you protect my data and vehicle safety?",
      a: "We enforce strict Row Level Security on all customer records, encrypted data transmission, masked phone numbers, and compulsory vehicle check-in inspections before any drive commences.",
    },
    {
      q: "What happens if an incident or emergency occurs?",
      a: "Every trip includes an integrated Emergency SOS panic trigger, 24/7 security hotline dispatch, and structured incident investigation procedures to protect both vehicle owner and driver.",
    },
    {
      q: "Can I request a recurring driver for daily school or work runs?",
      a: "Yes! Carpilot offers scheduled recurring matching for individuals and families needing dedicated daily or weekly driver support.",
    },
    {
      q: "Why should I join the waitlist early?",
      a: "Early waitlist members lock in priority launch access, founding member discounts, exclusive progress updates, and a unique referral link to earn bonus perks.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-dark-surface text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-grey text-base sm:text-lg">
            Everything you need to know about Carpilot, driver verification, and launch timing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-black border border-white/10 overflow-hidden transition-colors hover:border-gold/30"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-gold transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-grey leading-relaxed border-t border-white/5 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
