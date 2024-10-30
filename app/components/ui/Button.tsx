import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // Button content
  size?: "default" | "small" | "medium" | "large"; // Button size options
  color?: "default" | "primary" | "secondary" | "tertiary"; // Button color options
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "default", // Default size
  color = "default", // Default color
  ...props
}) => {
  // Size and color classes for the button
  const sizeClasses = {
    default: "p-[2px_15px] text-[14px] font-regular",
    small: "px-[15px] text-[13px]",
    medium: "px-[15px] py-[5px] text-[15px] font-medium",
    large: "px-6 py-3 text-lg",
  };

  const colorClasses = {
    default:
      "bg-purple-500/40 border border-white/5 shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] hover:bg-purple-600/50 hover:border-white/25 hover:shadow-[inset_0px_0px_8px_4px_rgba(255,255,255,0.35)] transition-all duration-300",
    primary: "bg-white text-black hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    tertiary: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100",
  };

  const baseClasses =
    "box-border flex flex-row justify-center items-center gap-2.5 rounded-lg  tracking-[-0.01em] leading-[26px] focus:outline-none focus:ring-2 focus:ring-offset-2";

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
        {children} {/* Button content */}
      </button>
    </div>
  );
};

export default Button; // Exporting the Button component
