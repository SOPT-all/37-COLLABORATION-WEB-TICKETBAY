import type { ButtonHTMLAttributes, ReactNode } from "react";

import { fullWidthStyle, root, sizeStyles, variantStyles } from "./button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}

export const Button = ({
  variant = "primary",
  size = "buy",
  fullWidth = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const classNames = [
    root,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && fullWidthStyle,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} {...rest} type="button">
      {children}
    </button>
  );
};
