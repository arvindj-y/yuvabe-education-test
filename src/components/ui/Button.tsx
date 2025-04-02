import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string; 
  target?: "_blank" | "_self"; 
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  href,
  target = "_self",
}) => {
  const baseStyles =
    "bg-[#592AC7] text-white px-6 py-3  rounded-[15px] transition hover:bg-[#4c23a5] active:scale-95";

  if (href) {
    return (
      <Link href={href} target={target} className={`${baseStyles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
