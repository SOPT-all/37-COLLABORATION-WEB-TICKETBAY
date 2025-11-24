import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "flex",
  position: "fixed",
  top: "0.7rem",
  zIndex: themeVars.zIndex.header,
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  width: "100%",
  minWidth: "var(--min-width)",
  maxWidth: "var(--max-width)",
  height: "4.4rem",
  padding: "0 1.5rem",
});

export const logo = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const rightSection = style({
  display: "flex",
  alignItems: "center",
  
});

export const iconButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "4.8rem",
  height: "4.8rem",
  border: "none",
  backgroundColor: "transparent",
  color: themeVars.color.grayscale9,
  cursor: "pointer",
  selectors: {
    "&:active": {
      opacity: 0.7,
    },
  },
});


