import { style } from "@vanilla-extract/css";
import { keyframes } from "@vanilla-extract/css";
import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";
import { zIndex } from "@shared/styles/token/z-index.css";

const slideIn = keyframes({
  from: {
    transform: "translateX(100%)",
  },
  to: {
    transform: "translateX(0)",
  },
});

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const sidebarDim = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: "70vw",
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  zIndex: zIndex.sidebar,
  animation: `${fadeIn} 0.3s ease-out`,
  "@media": {
    "(min-width: 430px)": {
      left: "calc((100vw - 430px) / 2)",
      right: "calc((100vw - 430px) / 2 + 26.4rem)",
    },
  },
});

export const sidebarContainer = style({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: "70vw",
  minWidth: "26.4rem",
  backgroundColor: color.grayscale8,
  zIndex: zIndex.sidebar,
  boxShadow: "-0.2rem 0 1.4rem 0 rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  animation: `${slideIn} 0.2s ease-out`,
  overflow: "hidden",
  isolation: "isolate",
  "@media": {
    "(min-width: 430px)": {
      right: "calc((100vw - 430px) / 2)",
      maxWidth: "26.4rem",
      width: "26.4rem",
    },
  },
});

export const sidebarHeader = style({
  width: "100%",
  height: "4.4rem",
  padding: "0 1.6rem",
  borderBottom: `1px solid ${color.grayscale7}`,
  backgroundColor: color.grayscale9,
  display: "flex",
  alignItems: "center",
});

export const sidebarLogo = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  color: color.grayscale1,
});

export const sidebarItemContainer = style({
  height: "39.8rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  backgroundColor: color.grayscale9,
});

export const loginMenuItem = style({
  display: "flex",
  alignItems: "center",
  height: "7.2rem",
  padding: "0 2.4rem",
  border: "none",
  cursor: "pointer",
  width: "100%",
  ...fontStyles.body1_medium,
  color: color.grayscale1,
});

export const menuItem = style({
  display: "flex",
  alignItems: "center",
  height: "4.8rem",
  padding: "0 2.4rem",
  border: "none",
  cursor: "pointer",
  width: "100%",
  ...fontStyles.body1_medium,
  color: color.grayscale1,
});

