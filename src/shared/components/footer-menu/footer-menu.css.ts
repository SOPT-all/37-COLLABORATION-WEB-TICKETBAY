import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  paddingLeft: "0.6rem",
  borderTop: `1px solid ${themeVars.color.grayscale6}`,
  borderBottom: `1px solid ${themeVars.color.grayscale6}`,
});

export const ul = style({
  display: "flex",
});

export const li = style({
  display: "flex",
  alignItems: "center",
});

export const button = style({
  ...themeVars.fontStyles.caption1_medium,
  padding: "1.5rem 1rem",
});

export const divider = style({
  width: "1px",
  height: "11px",
  background: themeVars.color.grayscale6,
});
