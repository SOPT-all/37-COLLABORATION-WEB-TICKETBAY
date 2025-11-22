import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@shared/styles/theme.css";

export const icon = recipe({
  base: {},
  variants: {
    isChecked: {
      true: {
        color: themeVars.color.grayscale1,
      },
      false: {
        stroke: themeVars.color.grayscale5,
        color: themeVars.color.grayscale5,
      },
    },
  },
});
