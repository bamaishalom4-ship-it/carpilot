import React from "react";

interface LogoProps {
  variant?: "black" | "white" | "gold" | "combined";
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

/**
 * Carpilot Official Logo Component
 * Based on Brand Manual Page 5-7
 * Two-part mark: Curved "road" shape + Square "location marker" above it.
 */
export const Logo: React.FC<LogoProps> = ({
  variant = "combined",
  className = "",
  showText = true,
  size = "md",
}) => {
  // Dimensions
  const sizes = {
    sm: { height: 28, markWidth: 32, fontSize: "text-lg" },
    md: { height: 36, markWidth: 40, fontSize: "text-2xl" },
    lg: { height: 48, markWidth: 54, fontSize: "text-3xl" },
    xl: { height: 60, markWidth: 68, fontSize: "text-4xl" },
  };

  const { height, fontSize } = sizes[size];

  // Color mappings
  // In 'combined' variant: road is black/white (depending on container context), square is Gold #C49D00
  let squareFill = "#C49D00";
  let roadFill = "#000000";
  let textFill = "text-black dark:text-white";

  if (variant === "white") {
    squareFill = "#FFFFFF";
    roadFill = "#FFFFFF";
    textFill = "text-white";
  } else if (variant === "black") {
    squareFill = "#000000";
    roadFill = "#000000";
    textFill = "text-black";
  } else if (variant === "gold") {
    squareFill = "#C49D00";
    roadFill = "#C49D00";
    textFill = "text-[#C49D00]";
  } else if (variant === "combined") {
    squareFill = "#C49D00";
    roadFill = "currentColor";
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon SVG */}
      <svg
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
        aria-label="Carpilot Logo Mark"
      >
        {/* Square Location Marker above */}
        <rect
          x="52"
          y="8"
          width="38"
          height="38"
          rx="9"
          fill={squareFill}
        />
        {/* Curved Road / Route Shape below */}
        <path
          d="M10 52 C10 74.0914 27.9086 92 50 92 L90 92 C92.2091 92 94 90.2091 94 88 L94 68 C94 65.7909 92.2091 64 90 64 L50 64 C43.3726 64 38 58.6274 38 52 C38 52 38 52 38 52 L38 52 L10 52 Z"
          fill={roadFill}
        />
      </svg>

      {/* Brand Wordmark "carpilot" */}
      {showText && (
        <span
          className={`font-sans font-extrabold tracking-tight ${fontSize} ${textFill}`}
        >
          carpilot
        </span>
      )}
    </div>
  );
};
