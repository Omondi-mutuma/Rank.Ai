import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "default" | "small" | "medium" | "large";
  color?: "default" | "primary" | "secondary" | "tertiary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "default",
  color = "default",
  ...props
}) => {
  const sizeClasses = {
    default:
      "px-4 py-2 text-sm font-regular sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg", // Default sizing adjusts based on screen size
    small:
      "px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm md:px-5 md:py-2 md:text-base", // Smaller padding and text for small
    medium:
      "px-5 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base md:px-7 md:py-3 md:text-lg font-medium", // Adjust medium size
    large:
      "px-6 py-3 text-base sm:px-7 sm:py-3.5 sm:text-lg md:px-8 md:py-4 md:text-xl", // Larger text and padding for large screens
  };

  const colorClasses = {
    default:
      "bg-purple-500/40 border border-white/15 shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] hover:bg-purple-600/50 hover:border-white/25 hover:shadow-[inset_0px_0px_8px_4px_rgba(255,255,255,0.35)] transition-all duration-300",
    primary:
      "bg-white text-black hover:bg-blue-600 transition-all duration-300",
    secondary:
      "bg-gray-500 text-white hover:bg-gray-600 transition-all duration-300",
    tertiary:
      "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 transition-all duration-300",
  };

  const baseClasses =
    "box-border flex flex-row justify-center items-center gap-2.5 rounded-[12px] tracking-tight leading-[26px] focus:outline-none focus:ring-2 focus:ring-offset-2";

  return (
    <div className="border border-white/15 p-[4px] rounded-[12px]">
      <button
        {...props}
        className={`
          ${baseClasses}
          ${sizeClasses[size]}
          ${colorClasses[color]}
          ${props.className || "w-full"}
        `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
