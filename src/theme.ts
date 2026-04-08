import { Card, Container, createTheme, DEFAULT_THEME, Paper, rem, Select } from "@mantine/core";
import type { MantineThemeOverride } from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const mantineTheme: MantineThemeOverride = createTheme({

  /** Put your mantine theme override here */

  fontFamily: `Roboto, ${DEFAULT_THEME.fontFamily}`,
  fontFamilyMonospace: `Consolas, ${DEFAULT_THEME.fontFamily}`,
  headings: {
    fontFamily: `Disket Mono, ${DEFAULT_THEME.fontFamily}`,
  },

  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },

  defaultRadius: 'xs',
  
  spacing: {
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
  },
     breakpoints: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px',
    },
    colors: {
      'more-dark': [
        '#E9ECEF', // light boja
        '#CED4DA', // light hover boja
        '#909296',
        '#5C5F66',
        '#373A40',
        '#2C2E33',
        '#25262B', // primary boja // boja teksta filled b
        '#1A1B1E', // primary hover boja
        '#141517',
        '#101113',
      ],
    },
  primaryColor: "violet",
  components: {
    /** Put your mantine component override here */
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),

    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "var(--mantine-radius-default)",
        withBorder: true,
      },
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
  },
  other: {
    style: "mantine",
  },
});
