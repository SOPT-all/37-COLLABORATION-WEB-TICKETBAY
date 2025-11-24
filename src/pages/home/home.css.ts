import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

const TOP_BACKGROUND_IMAGE_URL = "/top_background.webp";

export const container = style({
  position: "relative",
  width: "100%",
  minWidth: "var(--min-width)",
  maxWidth: "var(--max-width)",
  minHeight: "24.9rem", 
});

export const backgroundImage = style({
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "49.3rem",
  height: "17.9rem",
  zIndex: themeVars.zIndex.background,
  backgroundImage: `url(${TOP_BACKGROUND_IMAGE_URL})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

export const gradient = style({
  position: "absolute",
  top: "17.9rem",
  width: "100%",
  height: "7rem",
  zIndex: themeVars.zIndex.background,
  background: "var(--color_black_gradient, linear-gradient(0deg, #F8F9FA 0%, #000 100%))",
});

