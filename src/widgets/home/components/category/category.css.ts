import { style } from "@vanilla-extract/css";
import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "flex",
  height: "13.3rem",
  padding: "1.2rem 1rem",
  justifyContent: "center",
  alignItems: "center",
  margin: "3rem 1.5rem",
  background: themeVars.color.grayscale9,
  boxShadow: themeVars.effect.effect3,
  borderRadius: "16px",
});

export const gridContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  margin: "0 auto",
  gap: "0.8rem 2.4rem",

});
