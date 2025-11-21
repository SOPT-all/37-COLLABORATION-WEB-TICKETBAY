import type { ButtonHTMLAttributes, ReactNode } from "react";

import { root, sizeStyles, variantStyles } from "./button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  children: ReactNode;
  className?: string;
}

export const Button = ({
  variant = "primary",
  size = "buy",
  children,
  className,
  ...rest
}: ButtonProps) => {
  const classNames = [root, variantStyles[variant], sizeStyles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};
