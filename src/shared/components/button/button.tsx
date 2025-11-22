import type { ButtonHTMLAttributes, ReactNode } from "react";

import * as styles from "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof styles.variantStyles;
  size?: keyof typeof styles.sizeStyles;
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
    styles.root,
    styles.variantStyles[variant],
    styles.sizeStyles[size],
    fullWidth && styles.fullWidthStyle,
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
