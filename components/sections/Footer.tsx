import React from "react";
import { Logo } from "../ui/Logo";
import { LegalModalType } from "../modals/LegalModal";
import { Mail, Phone, Globe, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
  onJoinClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onJoinClick }) => {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Tagline Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="combined" size="lg" />
            <p className="text-sm font-medium text-gold italic">
              &ldquo;Your journey. Our destination.&rdquo;
            </p>
            <p className="text-xs text-grey max-w-sm leading-relaxed">
              Carpilot is a premium, technology-driven platform connecting vehicle owners, families, and businesses with verified professional drivers across Nigeria.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-2 pt-2 text-xs text-grey">
              <a
                href="mailto:info@carpilotng.online"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>info@carpilotng.online</span>
              </a>
              <a
                href="tel:+2348164467963"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+234(0) 816 4467 963</span>
              </a>
              <a
                href="https://carpilotng.online"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Globe className="w-4 h-4 text-gold shrink-0" />
                <span>https://carpilotng.online</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs text-grey">
              <li><a href="#why-carpilot" className="hover:text-gold transition-colors">About Carpilot</a></li>
              <li><a href="#how-it-works" className="hover:text-gold transition-colors">How It Works</a></li>
              <li><a href="#verification" className="hover:text-gold transition-colors">Driver Verification</a></li>
              <li><a href="#waitlist-form" className="hover:text-gold transition-colors">Careers &amp; Driver Jobs</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">Contact &amp; Support</a></li>
            </ul>
          </div>

          {/* Legal Policies Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Legal &amp; Policy</h4>
            <ul className="space-y-2 text-xs text-grey">
              <li>
                <button
                  onClick={() => onOpenLegal("privacy")}
                  className="hover:text-gold transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("terms")}
                  className="hover:text-gold transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("driver-policy")}
                  className="hover:text-gold transition-colors text-left"
                >
                  Driver Screening Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("cookies")}
                  className="hover:text-gold transition-colors text-left"
                >
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links & Action */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Connect With Us</h4>
            <div className="flex items-center gap-3">
              {[
                { label: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, href: "#" },
                { label: "Instagram", icon: <Instagram className="w-4 h-4" />, href: "#" },
                { label: "Facebook", icon: <Facebook className="w-4 h-4" />, href: "#" },
                { label: "X / Twitter", icon: <Twitter className="w-4 h-4" />, href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="p-2.5 rounded-xl bg-dark-card border border-white/10 text-grey hover:text-gold hover:border-gold/40 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onJoinClick}
                className="w-full py-2.5 px-4 bg-gold/15 text-gold border border-gold/30 rounded-xl text-xs font-bold hover:bg-gold hover:text-black transition-colors"
              >
                Join Launch Waitlist
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-grey gap-4">
          <p>&copy; {new Date().getFullYear()} Carpilot Technologies Limited. All rights reserved.</p>
          <p className="text-grey/60">Designed with precision for Abuja &amp; Nigeria.</p>
        </div>

      </div>
    </footer>
  );
};
