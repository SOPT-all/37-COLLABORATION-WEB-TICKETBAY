import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "5.4rem 1.5rem 0 1.5rem",
  height: "3.6rem",
  padding: "0 1.6rem 0 1.7rem",
  zIndex: themeVars.zIndex.content, 
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  border: "1px solid rgba(255, 255, 255, 1)",
  borderRadius: "30px",
  backdropFilter: "blur(2px)",
});

export const input = style({
  flex: 1,
  ...themeVars.fontStyles.body3_regular,
  color: themeVars.color.grayscale9,
  backgroundColor: "transparent",
  outline: "none",
  selectors: {
    "&::placeholder": {
      color: themeVars.color.grayscale9,
    },
    "&:focus::placeholder": {
      opacity: 0,
    },
  },
});

export const searchButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  gap: "1rem",
  backgroundColor: "transparent",
  border: "none",
  color: themeVars.color.grayscale9,
  cursor: "pointer"
});

