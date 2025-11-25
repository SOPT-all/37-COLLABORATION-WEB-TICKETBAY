import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

const BACKGROUND_IMAGE_HEIGHT = "17.9rem";
const GRADIENT_HEIGHT = "7rem";
const GRADIENT_OVERLAP = "0.2rem";
const CONTAINER_MIN_HEIGHT = "24.9rem";

export const container = style({
  position: "relative",
  width: "100%",
  minWidth: "var(--min-width)",
  maxWidth: "var(--max-width)",
  minHeight: CONTAINER_MIN_HEIGHT,
  overflow: "hidden",
});

export const backgroundImage = style({
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "49.3rem",
  height: BACKGROUND_IMAGE_HEIGHT,
  zIndex: themeVars.zIndex.background,
  backgroundImage: "url(/top_background.webp)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

export const gradient = style({
  position: "absolute",
  top: `calc(${BACKGROUND_IMAGE_HEIGHT} - ${GRADIENT_OVERLAP})`,
  width: "100%",
  height: GRADIENT_HEIGHT,
  zIndex: themeVars.zIndex.background,
  background: "var(--color_black_gradient, linear-gradient(0deg, #F8F9FA 0%, #000 100%))",
});

