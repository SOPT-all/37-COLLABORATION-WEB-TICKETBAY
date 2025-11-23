import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const base = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  paddingTop: "10.9rem",
  touchAction: "none",
  pointerEvents: "none",
});

export const image = style({
  width: "27.1rem",
  height: "27.1rem",
  pointerEvents: "none",
});

export const bottomSheet = style({
  position: "fixed",
  top: "10.9rem", // Navigation(4.8rem) + Header(6.1rem)
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  borderRadius: "3rem 3rem 0 0 ",
  boxShadow: "0 -0.2rem 1.4rem 0 rgba(0, 0, 0, 0.10)",
  padding: "0 1.6rem",
  backgroundColor: themeVars.color.grayscale9,
  zIndex: themeVars.zIndex.bottomSheet,
  width: "100%",
  maxWidth: "var(--max-width)",
  minWidth: "var(--min-width)",
  transform: "translateY(27.1rem)", // IMAGE_HEIGHT
  transition: "transform 0.1s ease-out",
  pointerEvents: "auto",
  overflow: "hidden",
});

export const header = style({
  height: "2.2rem",
  padding: "1rem 0 0.8rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexShrink: 0,
  touchAction: "none",
  userSelect: "none",
  WebkitUserSelect: "none",
  cursor: "grab",
  ":active": {
    cursor: "grabbing",
  },
});

export const dragHandle = style({
  width: "3.8rem",
  height: "0.4rem",
  backgroundColor: themeVars.color.grayscale4,
  borderRadius: "2rem",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  minHeight: 0,
  overflowY: "auto",
  overflowX: "hidden",
  maxHeight: "100%",
  WebkitOverflowScrolling: "touch",
  gap: "1.2rem",
});
