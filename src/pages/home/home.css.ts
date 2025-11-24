import { style } from "@vanilla-extract/css";

const TOP_BACKGROUND_IMAGE_URL = "/top_background.webp";

export const container = style({
  position: "relative",
  width: "100%",
  minWidth: "var(--min-width)",
  maxWidth: "var(--max-width)",
  minHeight: "24.9rem",
  overflow: "hidden",
});

export const backgroundImage = style({
  position: "absolute",
  top: 0,
  left: "-5.9rem",
  width: "49.3rem",
  height: "17.9rem",
  backgroundImage: `url(${TOP_BACKGROUND_IMAGE_URL})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  pointerEvents: "none",
});

export const gradient = style({
  position: "absolute",
  top: "17.9rem",
  width: "100%",
  height: "7rem",
  background: "var(--color_black_gradient, linear-gradient(0deg, #F8F9FA 0%, #000 100%))",
  pointerEvents: "none",
});

