import React from "react";
import { X, ShieldCheck, FileText, Lock, Cookie } from "lucide-react";

export type LegalModalType = "privacy" | "terms" | "driver-policy" | "cookies" | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      icon: <Lock className="w-6 h-6 text-gold" />,
      updated: "Last Updated: June 2026",
      body: (
        <div className="space-y-4 text-grey text-sm leading-relaxed">
          <p>
            At Carpilot, your privacy and data security are foundational principles. This Privacy Policy outlines how Carpilot Technologies Limited ("Carpilot", "we", "our", or "us") collects, uses, protects, and discloses personal information when you visit our landing page, join our waitlist, or use our upcoming driver-on-demand platform in Nigeria.
          </p>

          <h4 className="text-white font-bold text-base pt-2">1. Information We Collect</h4>
          <p>
            When you join our launch waitlist or submit an inquiry, we collect:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Personal Contact Information:</strong> Full name, email address, phone number.</li>
            <li><strong>Role Category:</strong> Customer, Professional Driver, or Corporate/Fleet account.</li>
            <li><strong>Referral Data:</strong> Referral code, tracking parameters, and referrer linkage.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device info, and page interaction metrics.</li>
          </ul>

          <h4 className="text-white font-bold text-base pt-2">2. How We Use Your Data</h4>
          <p>
            We process your information strictly to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reserve your priority position on the Carpilot launch waitlist.</li>
            <li>Send launch updates, early access invitations, and exclusive founding member rewards.</li>
            <li>Verify identity and validate driver credentials during onboarding screening.</li>
            <li>Improve our mobile application UX, security protocols, and operational coverage in Abuja.</li>
          </ul>

          <h4 className="text-white font-bold text-base pt-2">3. Data Protection & Security</h4>
          <p>
            We implement enterprise-grade encryption (TLS 1.3 in transit, AES-256 at rest) and strict Row Level Security (RLS) policies on our databases. Access to personal data is restricted to authorized personnel only. We explicitly do NOT sell your data to third parties.
          </p>
        </div>
      ),
    },
    terms: {
      title: "Terms of Service",
      icon: <FileText className="w-6 h-6 text-gold" />,
      updated: "Last Updated: June 2026",
      body: (
        <div className="space-y-4 text-grey text-sm leading-relaxed">
          <p>
            Welcome to Carpilot. By accessing our landing page, registering for our waitlist, or interacting with our digital channels, you agree to comply with and be bound by these Terms of Service.
          </p>

          <h4 className="text-white font-bold text-base pt-2">1. Scope of Service</h4>
          <p>
            Carpilot is a technology-driven platform connecting vehicle owners with vetted, verified professional drivers for their own vehicles. <strong>Carpilot is explicitly NOT a ride-hailing app, taxi service, or motor carrier.</strong>
          </p>

          <h4 className="text-white font-bold text-base pt-2">2. Waitlist & Early Access</h4>
          <p>
            Joining the waitlist grants early access notification and eligibility for launch discounts in Abuja, Nigeria. Waitlist reservation does not guarantee immediate driver placement prior to commercial app launch.
          </p>

          <h4 className="text-white font-bold text-base pt-2">3. Intellectual Property</h4>
          <p>
            All logos, visual assets, software designs, copy, and brand assets displayed on this site are the exclusive property of Carpilot Technologies Limited. Unauthorized duplication or redistribution is strictly prohibited.
          </p>
        </div>
      ),
    },
    "driver-policy": {
      title: "Driver Verification Policy",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
      updated: "Last Updated: June 2026",
      body: (
        <div className="space-y-4 text-grey text-sm leading-relaxed">
          <p>
            Safety and trust are non-negotiable at Carpilot. Only drivers who pass our multi-tier verification process are admitted to our network.
          </p>

          <h4 className="text-white font-bold text-base pt-2">1. Five-Stage Screening Requirements</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Stage 1 - Identity Validation:</strong> NIN/Voters/Passport government ID verification.</li>
            <li><strong>Stage 2 - License Verification:</strong> Official FRSC driver license validity & class check.</li>
            <li><strong>Stage 3 - Background & Guarantor Screening:</strong> Comprehensive criminal record check & verified guarantor references.</li>
            <li><strong>Stage 4 - Professional Driving Assessment:</strong> Practical driving evaluation, defensive driving skills, and executive etiquette test.</li>
            <li><strong>Stage 5 - Final Review:</strong> Medical clearance, drug screening, and board approval.</li>
          </ul>

          <h4 className="text-white font-bold text-base pt-2">2. Zero Tolerance Policy</h4>
          <p>
            Carpilot enforces zero tolerance for alcohol or substance impairment, unauthorized vehicle usage, traffic violations, or failure to maintain professional standards.
          </p>
        </div>
      ),
    },
    cookies: {
      title: "Cookie Policy",
      icon: <Cookie className="w-6 h-6 text-gold" />,
      updated: "Last Updated: June 2026",
      body: (
        <div className="space-y-4 text-grey text-sm leading-relaxed">
          <p>
            Carpilot uses essential cookies and anonymous web analytics to ensure optimal functionality, security, and user experience on our platform.
          </p>

          <h4 className="text-white font-bold text-base pt-2">1. Types of Cookies We Use</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Essential Cookies:</strong> Required for secure session handling and referral code attribution.</li>
            <li><strong>Performance Analytics:</strong> Vercel Analytics (cookieless, privacy-preserving) to measure site speed and visitor interaction.</li>
          </ul>

          <h4 className="text-white font-bold text-base pt-2">2. Cookie Control</h4>
          <p>
            You can control or disable non-essential cookies via your browser settings at any time without affecting your waitlist submission.
          </p>
        </div>
      ),
    },
  };

  const activeDoc = content[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-dark-card border border-gold/30 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden">
        {/* Top Gold Bar */}
        <div className="h-1.5 bg-gold-gradient w-full" />

        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold/10 rounded-xl border border-gold/20">
              {activeDoc.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{activeDoc.title}</h3>
              <p className="text-xs text-gold font-medium">{activeDoc.updated}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-grey hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
          {activeDoc.body}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-black/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gold text-black font-bold text-sm rounded-full hover:bg-gold-light transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
