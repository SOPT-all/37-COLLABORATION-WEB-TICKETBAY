import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "9rem",
  display: "flex",
  gap: "1rem",
  overflowX: "auto",
  overflowY: "hidden",
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

