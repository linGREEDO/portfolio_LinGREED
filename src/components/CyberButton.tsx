
import React from "react";
import { cn } from "@/lib/utils";

interface CyberButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
}

const CyberButton = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  ...props
}: CyberButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseStyles = "inline-flex items-center justify-center font-mono uppercase tracking-wider transition-all relative group overflow-hidden pixel-corners focus:outline-none";
  
  const variantStyles = {
    primary: "bg-cyber-red text-white hover:bg-cyber-red/90 border border-cyber-red shadow-[0_0_15px_rgba(234,56,76,0.5)]",
    secondary: "bg-cyber-yellow text-cyber-black hover:bg-cyber-yellow/90 border border-cyber-yellow shadow-[0_0_15px_rgba(245,237,27,0.5)]",
    outline: "bg-transparent border border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow/10",
    ghost: "bg-transparent text-cyber-red hover:bg-cyber-red/10",
  };
  
  const sizeStyles = {
    sm: "text-xs py-1.5 px-3",
    md: "text-sm py-2 px-4",
    lg: "text-base py-2.5 px-5",
  };

  const buttonContent = (
    <>
      {children}
      <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-10 transition-opacity"></span>
    </>
  );

  const buttonClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={onClick}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {buttonContent}
    </button>
  );
};

export default CyberButton;
