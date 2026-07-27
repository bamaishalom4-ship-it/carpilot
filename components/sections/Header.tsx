"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onJoinWaitlistClick: (role?: "customer" | "driver") => void;
}

export const Header: React.FC<HeaderProps> = ({ onJoinWaitlistClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Why Carpilot", href: "#why-carpilot" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Safety", href: "#safety" },
    { label: "Verification", href: "#verification" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-lg border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 focus:outline-none">
            <Logo variant="combined" size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-grey hover:text-gold transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onJoinWaitlistClick("driver")}
            >
              Become a Driver
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => onJoinWaitlistClick("customer")}
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-grey hover:text-white hover:bg-white/10"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-surface border-b border-white/10 px-4 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-grey hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Button
              variant="outline"
              size="md"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinWaitlistClick("driver");
              }}
            >
              Become a Driver
            </Button>
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinWaitlistClick("customer");
              }}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
