import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const floatingButton = style({
  position: "fixed",
  right: "1.8125rem",
  bottom: "8.1875rem",
  display: "flex",
  width: "2.625rem",
  height: "2.625rem",
  padding: "0.75rem",
  alignItems: "center",
  gap: "0.625rem",
  borderRadius: "20.5px",
  background: themeVars.color.grayscale1,
  aspectRatio: "1/1",
  cursor: "pointer",
  border: "none",
  transition: "opacity 0.1s ease",
  selectors: {
    "&:active": {
      opacity: 0.7,
    },
  },
});
