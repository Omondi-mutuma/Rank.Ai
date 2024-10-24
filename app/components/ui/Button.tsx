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
    default: "p-[2px_15px]",
    small: "p-[1px_15px] text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const colorClasses = {
    default:
      "bg-purple-500/40 border border-white/15 shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] hover:bg-purple-600/50 hover:border-white/25 hover:shadow-[inset_0px_0px_8px_4px_rgba(255,255,255,0.35)] transition-all duration-300",
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    tertiary: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100",
  };

  const baseClasses =
    "box-border flex flex-row justify-center items-center gap-2.5 rounded-lg font-regular text-[14px] tracking-[-0.01em] leading-[26px] focus:outline-none focus:ring-2 focus:ring-offset-2";

  return (
    <div className="border border-white border-opacity-15 w-max p-[4px] rounded-[12px]">
      <button
        {...props}
        className={`
          ${baseClasses}
          ${sizeClasses[size]}
          ${colorClasses[color]}
          ${props.className || ""}
        `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
