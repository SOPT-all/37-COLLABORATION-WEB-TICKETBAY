import { recipe } from "@vanilla-extract/recipes";

import { sprinkles, themeVars } from "@shared/styles/theme.css";

// 버튼 스타일 통합
export const button = recipe({
  base: {
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
  },
  variants: {
    color: {
      default: {
        backgroundColor: themeVars.color.grayscale1,
        color: themeVars.color.grayscale9,
      },
      subtle: {
        backgroundColor: themeVars.color.grayscale8,
        color: themeVars.color.grayscale2,
      },
    },
    size: {
      buy: [
        sprinkles({ fontStyles: "body2_medium" }),
        {
          minHeight: "4.4rem",
          padding: "1.2rem 8.3rem",
          borderRadius: "0.8rem",
        },
      ],
      ticketbayGlobal: [
        sprinkles({ fontStyles: "body3_medium" }),
        {
          minHeight: "3.2rem",
          padding: "0.6rem 8.3rem",
          borderRadius: "6px",
        },
      ],
    },
    fullWidth: {
      true: { width: themeVars.width.full },
      false: {},
    },
  },
  defaultVariants: {
    color: "default",
    size: "buy",
    fullWidth: false,
  },
});
