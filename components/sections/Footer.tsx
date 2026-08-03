import React from "react";
import { Logo } from "../ui/Logo";
import { LegalModalType } from "../modals/LegalModal";
import { Mail, Phone, Globe, Instagram, Facebook, Twitter } from "lucide-react";

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
              &ldquo;Every journey in safe hands.&rdquo;
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
                {
                  label: "Facebook",
                  icon: <Facebook className="w-4 h-4" />,
                  href: "https://www.facebook.com/share/1BUKPw68MR/?mibextid=wwXIfr",
                },
                {
                  label: "Instagram",
                  icon: <Instagram className="w-4 h-4" />,
                  href: "https://www.instagram.com/carpilot__ng",
                },
                {
                  label: "X / Twitter",
                  icon: <Twitter className="w-4 h-4" />,
                  href: "https://x.com/carpilot__ng",
                },
                {
                  label: "TikTok",
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.63a6.34 6.34 0 1 0 6.34 6.34V9.07a8.16 8.16 0 0 0 4.77 1.52v-3.9a4.85 4.85 0 0 1-1-.002z" />
                    </svg>
                  ),
                  href: "https://www.tiktok.com/@carpilot__ng",
                },
                {
                  label: "WhatsApp",
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                    </svg>
                  ),
                  href: "https://wa.me/message/OIG6CSUCFJRLF1",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
