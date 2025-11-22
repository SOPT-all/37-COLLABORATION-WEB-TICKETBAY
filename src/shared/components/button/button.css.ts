import { style, styleVariants } from "@vanilla-extract/css";

import { sprinkles, themeVars } from "@shared/styles/theme.css";

// 공통 버튼 베이스 스타일
export const root = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  textAlign: "center",
  cursor: "pointer",
  selectors: {
    "&:active": {
      opacity: 0.6,
    },
  },
});

// 가로 100% 옵션
export const fullWidthStyle = style({
  width: themeVars.width.full,
});

// 색상(variant) 스타일
export const variantStyles = styleVariants({
  primary: {
    backgroundColor: themeVars.color.grayscale1,
    color: themeVars.color.grayscale9,
  },
  secondary: {
    backgroundColor: themeVars.color.grayscale8,
    color: themeVars.color.grayscale2,
  },
});

export const sizeStyles = styleVariants({
  // 구매하기 버튼
  buy: [
    sprinkles({ fontStyles: "body2_medium" }),
    {
      minHeight: "4.4rem",
      padding: "1.2rem 8.3rem",
      borderRadius: "0.8rem",
    },
  ],

  // TICKETBAY GLOBAL 버튼
  ticketbayGlobal: [
    sprinkles({ fontStyles: "body3_medium" }),
    {
      minHeight: "3.2rem",
      padding: "0.6rem 8.3rem",
      borderRadius: "6px",
    },
  ],
});

export type ButtonVariant = keyof typeof variantStyles;
export type ButtonSize = keyof typeof sizeStyles;
