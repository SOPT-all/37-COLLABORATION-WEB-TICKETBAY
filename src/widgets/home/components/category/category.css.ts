import { style } from "@vanilla-extract/css";
import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  padding: "1.2rem 1rem",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "16px",
  margin: "10.9rem 1.5rem 0.7rem 1.5rem",
  background: themeVars.color.grayscale9,
  boxShadow: themeVars.effect.effect3,
  gap: "0.8rem 2.4rem",
});
