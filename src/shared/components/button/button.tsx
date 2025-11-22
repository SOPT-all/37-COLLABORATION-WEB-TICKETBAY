import type { ButtonHTMLAttributes, ReactNode } from "react";

import * as styles from "./button.css";

type ButtonColor = "primary" | "secondary";
type ButtonSize = "buy" | "ticketbayGlobal";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor?: ButtonColor;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}

export const Button = ({
  buttonColor = "primary",
  size = "buy",
  fullWidth = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const classNames = [
    styles.root,
    styles.variantStyles[buttonColor],
    styles.sizeStyles[size],
    fullWidth && styles.fullWidthStyle,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} type="button" {...rest}>
      {children}
    </button>
  );
};
