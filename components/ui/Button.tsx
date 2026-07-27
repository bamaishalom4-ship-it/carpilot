import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-98";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg font-bold shadow-gold hover:shadow-gold-lg",
  };

  const variantStyles = {
    primary:
      "bg-gold text-black hover:bg-gold-light hover:scale-[1.02] shadow-gold font-bold",
    secondary:
      "bg-white text-black hover:bg-neutral-100 hover:scale-[1.02]",
    outline:
      "bg-transparent text-white border-2 border-gold/70 hover:border-gold hover:bg-gold/10 hover:text-gold",
    ghost:
      "bg-transparent text-grey hover:text-white hover:bg-white/5",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
