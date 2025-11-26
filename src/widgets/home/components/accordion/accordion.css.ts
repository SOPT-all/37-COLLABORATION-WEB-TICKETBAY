import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const button = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 0.4rem 1.2rem 0.5rem",
  borderBottom: `1px solid ${themeVars.color.grayscale6}`,
});

export const text = style({
  ...themeVars.fontStyles.body3_medium,
  color: themeVars.color.grayscale1,
});
