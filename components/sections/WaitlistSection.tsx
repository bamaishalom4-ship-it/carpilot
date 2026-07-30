"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, WaitlistFormData } from "@/lib/validation";
import { Button } from "../ui/Button";
import { CheckCircle2, Copy, Share2, Sparkles, AlertCircle, Loader2, User, Mail, Phone, Briefcase } from "lucide-react";

interface WaitlistSectionProps {
  initialRole?: "customer" | "driver" | "corporate";
}

export const WaitlistSection: React.FC<WaitlistSectionProps> = ({ initialRole = "customer" }) => {
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referral_code: string;
    referral_link: string;
    message: string;
  } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [referredByCode, setReferredByCode] = useState<string | null>(null);

  // Capture ?ref=CODE URL query parameter on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const refParam = urlParams.get("ref");
      if (refParam) {
        setReferredByCode(refParam.toUpperCase());
      }
    }
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      role: initialRole,
      referred_by: referredByCode,
    },
  });

  const selectedRole = watch("role");

  useEffect(() => {
    if (initialRole) {
      setValue("role", initialRole);
    }
  }, [initialRole, setValue]);

  useEffect(() => {
    if (referredByCode) {
      setValue("referred_by", referredByCode);
    }
  }, [referredByCode, setValue]);

  const onSubmit = async (data: WaitlistFormData) => {
    setSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, referred_by: referredByCode }),
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        setServerError(resData.message || "Failed to join waitlist. Please try again.");
      } else {
        setSubmittedData({
          referral_code: resData.referral_code,
          referral_link: resData.referral_link,
          message: resData.message,
        });
      }
    } catch (err) {
      setServerError("Network connection error. Please check your network and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    if (submittedData?.referral_link) {
      navigator.clipboard.writeText(submittedData.referral_link);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="waitlist-form" className="py-20 md:py-28 bg-dark-surface text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Glass Box */}
        <div className="p-8 md:p-12 rounded-3xl bg-black border border-gold/40 shadow-2xl shadow-gold/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient" />

          {/* Header */}
          <div className="text-center space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Priority Access Registration</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Join the Carpilot Launch Community
            </h2>

            <p className="text-grey text-sm sm:text-base max-w-xl mx-auto">
              Reserve your spot today to receive founding member discounts, priority driver allocation, and exclusive launch updates in Abuja.
            </p>

            {referredByCode && (
              <div className="inline-block p-2 px-4 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold">
                Attributed via referral link: <strong>{referredByCode}</strong>
              </div>
            )}
          </div>

          {/* SUCCESS STATE */}
          {submittedData ? (
            <div className="p-8 rounded-2xl bg-dark-card border border-gold/40 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto border border-gold">
                <CheckCircle2 className="w-10 h-10 text-gold" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-white">
                  Congratulations!
                </h3>
                <p className="text-sm text-grey max-w-md mx-auto leading-relaxed">
                  {submittedData.message}
                </p>
              </div>

              {/* Referral Link Box */}
              <div className="p-6 rounded-2xl bg-black border border-white/10 space-y-4 max-w-lg mx-auto">
                <div className="flex items-center justify-between text-xs text-grey">
                  <span className="font-semibold text-gold uppercase tracking-wider">Your Personal Referral Link</span>
                  <span>Code: {submittedData.referral_code}</span>
                </div>

                <div className="flex items-center gap-2 bg-dark-surface p-3 rounded-xl border border-white/15">
                  <input
                    type="text"
                    readOnly
                    value={submittedData.referral_link}
                    className="bg-transparent text-white text-xs sm:text-sm font-mono flex-1 outline-none truncate"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="px-4 py-2 bg-gold text-black font-bold text-xs rounded-lg hover:bg-gold-light transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-grey/80">
                  Share this link with friends and colleagues to earn additional founding member perks.
                </p>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSubmittedData(null)}
                className="text-xs text-grey hover:text-white"
              >
                Register another person
              </Button>
            </div>
          ) : (
            /* FORM STATE */
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {serverError && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              {/* Role Radio Group */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-grey">
                  Select Your Account Category *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "customer", label: "Vehicle Owner" },
                    { id: "driver", label: "Professional Driver" },
                    { id: "corporate", label: "Corporate Fleet" },
                  ].map((r) => {
                    const isSelected = selectedRole === r.id;
                    return (
                      <label
                        key={r.id}
                        className={`
                          p-3.5 sm:p-4 rounded-xl border text-center text-xs sm:text-sm font-extrabold cursor-pointer transition-all duration-300 block select-none relative overflow-hidden
                          ${
                            isSelected
                              ? "bg-gold text-black border-gold shadow-gold/40 ring-2 ring-gold scale-[1.02]"
                              : "bg-black/60 text-grey border-white/15 hover:border-gold/50 hover:text-white"
                          }
                        `}
                      >
                        <input
                          type="radio"
                          value={r.id}
                          {...register("role")}
                          className="sr-only"
                        />
                        <div className="flex items-center justify-center gap-1.5">
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-black shrink-0" />}
                          <span>{r.label}</span>
                        </div>
                      </label>
                    );
                  })}
                </div>
                {errors.role && (
                  <p className="text-xs text-red-400 mt-1">{errors.role.message}</p>
                )}
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-grey">Full Name *</label>
                <div className="relative">
                  <User className="w-5 h-5 text-grey absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="e.g. Amina Bello"
                    {...register("name")}
                    className={`
                      w-full bg-black/60 border rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-grey/50 outline-none transition-colors
                      ${errors.name ? "border-red-500 focus:border-red-500" : "border-white/15 focus:border-gold"}
                    `}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-grey">Email Address *</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-grey absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="e.g. amina@example.com"
                    {...register("email")}
                    className={`
                      w-full bg-black/60 border rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-grey/50 outline-none transition-colors
                      ${errors.email ? "border-red-500 focus:border-red-500" : "border-white/15 focus:border-gold"}
                    `}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-grey">Phone Number *</label>
                <div className="relative">
                  <Phone className="w-5 h-5 text-grey absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    placeholder="e.g. +234 803 123 4567"
                    {...register("phone")}
                    className={`
                      w-full bg-black/60 border rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-grey/50 outline-none transition-colors
                      ${errors.phone ? "border-red-500 focus:border-red-500" : "border-white/15 focus:border-gold"}
                    `}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-400">{errors.phone.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={submitting}
                className="mt-6"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing Registration...</span>
                  </span>
                ) : (
                  <span>Join the Waitlist Now</span>
                )}
              </Button>

              <p className="text-center text-xs text-grey/70 pt-2">
                By joining, you agree to our Privacy Policy and Terms of Service. No spam, ever.
              </p>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
