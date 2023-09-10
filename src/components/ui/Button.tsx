import React from "react";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  onClick: () => void;
  type?: any;
  icon?: any;
  isSmall?: boolean;
  variant?: "white" | "default";
  disabled?: boolean;
  className?: string;
  ref?: any;
  children: React.ReactNode;
}

function Button({
  icon: Icon,
  onClick,
  isSmall,
  type = "button",
  variant,
  disabled,
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`
        ${className} rounded-lg my-2 shadow-lg focus:outline-none  
        focus:shadow-outline transform transition hover:scale-[1.05] duration-300 ease-in-out 
        ${variant === "white" ? "bg-white" : "bg-blue-600"} 
        ${
          variant === "white"
            ? "border border-gray-300"
            : "border border-blue-600"
        } 
        ${variant === "white" ? "text-gray-800" : "text-white"} 
        ${
          variant === "white"
            ? "hover:text-gray-500 "
            : "hover:white hover:bg-blue-800 hover:border-blue-800"
        }
        ${isSmall ? "py-2 px-3 text-sm" : "py-4 px-8"}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      {...props}
    >
      {Icon ? (
        <div className="flex items-center gap-2">
          <Icon
            size={15}
            className={`${
              variant === "white" ? "text-gray-800" : "text-white"
            }`}
          />
          {children}
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
