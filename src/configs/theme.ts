import type { MantineThemeOverride } from "@mantine/core";

export const themeConfig: MantineThemeOverride = {
  fontFamily: "Segoe UI, sans-serif",
  primaryColor: "primary",
  focusRing: "never",
  colors: {
    primary: [
      "#e5f8ff",
      "#d0edff",
      "#9fd8fd",
      "#6cc3fb",
      "#47b1fa",
      "#33a6fa",
      "#26a1fb",
      "#188ce0",
      "#0074bc",
      "#006bb2",
    ],
  },
  components: {
    NavLink: {
      defaultProps: {
        styles: {
          root: {
            padding: "4px 8px",
          },
          label: {
            fontSize: 12,
          },
        },
      },
    },
  },
};
