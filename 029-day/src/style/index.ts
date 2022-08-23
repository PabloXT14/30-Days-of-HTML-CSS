import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      primary: `#ff0057`,
      secondary: `#FFFFFF`,
      tertiary: `#111111`,

      bg_body: `#333333`,

      title_1: ``,

      text_1: `#555555`,

      border: ``,

      shape: `#DDDDDD`,
    },
    space: {
      '0': `0px`,
      '1': `1px`,
      '4': `0.25rem`,
      '8': `0.5rem`,
      '10': `0.625rem`,
      '12': `0.75rem`,
      '16': `1rem`,
      '24': `1.5rem`,
      '32': `2rem`,
    },
    sizes: {
      '0': `0px`,
      '1': `1px`,
      '4': `0.25rem`,
      '8': `0.5rem`,
      '10': `0.625rem`,
      '12': `0.75rem`,
      '16': `1rem`,
      '24': `1.5rem`,
      '32': `2rem`,
    },
    fonts: {
      default: 'Roboto'
    },
    fontSizes: {
      '0': `0px`,
      '1': `1px`,
      '4': `0.25rem`,
      '8': `0.5rem`,
      '10': `0.625rem`,
      '12': `0.75rem`,
      '16': `1rem`,
      '24': `1.5rem`,
      '32': `2rem`,
    },
    radii: {
      full: '99999px',
      default: '5px',
    }
  },
  media: {
    bp1: "(max-width: 768px)"
  },
  utils: {

  }
}) 