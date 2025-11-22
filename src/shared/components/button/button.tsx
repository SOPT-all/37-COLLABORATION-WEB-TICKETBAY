import type { ButtonHTMLAttributes, ReactNode } from "react";

import * as styles from "./button.css";

type ButtonColor = "primary" | "secondary";
type ButtonSize = "buy" | "ticketbayGlobal";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}

export const Button = ({
  color = "primary",
  size = "buy",
  fullWidth = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const composedClassName = [styles.button({ color, size, fullWidth }), className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={composedClassName} {...rest}>
      {children}
    </button>
  );
};
