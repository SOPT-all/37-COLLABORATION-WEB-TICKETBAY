import { style } from "@vanilla-extract/css";
import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  padding: "1.2rem 1rem",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "1.6rem",
  margin: "10.9rem 1.5rem 0.7rem 1.5rem",
  background: themeVars.color.grayscale9,
  boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.15)",
});


export const firstRow = style({
    display: "flex",
    alignItems: "center",
    gap: "2.4rem",
    justifyContent: "center",
});

export const secondRow = style({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "2.4rem",
});
