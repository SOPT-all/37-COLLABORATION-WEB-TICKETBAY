import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "flex",
  width: "100%",
  height: "4.8rem",
  padding: "0.2rem 1.6rem",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Icon = style({
  padding: "1rem",
  cursor: "pointer",
});

export const title = style({
  ...themeVars.fontStyles.body2_semibold,
  color: themeVars.color.grayscale1,
});
