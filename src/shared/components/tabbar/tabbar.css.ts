import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const wrapper = style({
  position: "fixed",
  bottom: 0,
  width: "100%",
  minWidth: "var(--min-width)",
  maxWidth: "var(--max-width)",
  zIndex: 99,
});

// TabBar 레이아웃
export const container = style({
  width: "100%",
  padding: "0.8rem 1.6rem 1.6rem",
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  gap: "2.3rem",
  backgroundColor: themeVars.color.grayscale8,
});

// 공통 아이템
const baseItem = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

// 활성 탭
export const itemActive = style({
  ...baseItem,
  opacity: 1,
});

// 비활성 탭
export const itemInactive = style({
  ...baseItem,
  opacity: 0.4,
});
