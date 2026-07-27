import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  goldBorder?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverEffect = true,
  goldBorder = false,
}) => {
  return (
    <div
      className={`
        bg-dark-card border rounded-3xl p-6 md:p-8 backdrop-blur-md transition-all duration-300 relative overflow-hidden
        ${goldBorder ? "border-gold/40 shadow-gold/10" : "border-white/10"}
        ${hoverEffect ? "hover:border-gold/60 hover:shadow-card hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      {/* Decorative top gold gradient accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
      {children}
    </div>
  );
};
