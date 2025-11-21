import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

const baseButton = style({
  position: "absolute",
  right: "2.9rem", 
  display: "flex",
  width: "2.625rem",
  height: "2.625rem",
  padding: "1.2rem", 
  alignItems: "center",
  justifyContent: "center",
  gap: "0.625rem",
  borderRadius: "20.5px",
  aspectRatio: "1/1",
  cursor: "pointer",
  border: "none",
  transition: "opacity 0.1s ease",
  boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.15)",
  selectors: {
    "&:active": {
      opacity: 0.7,
    },
  },
});

export const floatingButtonTop = style([
  baseButton,
  {
    bottom: "9.2rem",
    background: themeVars.color.grayscale9,
    color: themeVars.color.grayscale1,
  },
]);

export const floatingButtonHelp = style([
  baseButton,
  {
    bottom: "9.2rem", 
    background: themeVars.color.grayscale1,
    color: themeVars.color.grayscale9,
  },
]);


export const floatingButtonContainer = style({
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  maxWidth: "var(--max-width)",
  minWidth: "var(--min-width)",
  height: "100dvh",
  pointerEvents: "none",
  zIndex: 50,
});

export const icon = style({
  width: "17px",
  height: "17px",
  flexShrink: 0,
});

