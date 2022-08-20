import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: `#000000`,
      secondary: `#FFFFFF`,
      tertiary: `#c87f0a`,

      bg_body: `#212121`,

      title_1: ``,
      title_2: ``,
      title_3: ``,
      title_4: ``,

      text_1: ``,

      border: ``,

      shape: `#CCCCCC`,
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

  },
  utils: {

  },
})