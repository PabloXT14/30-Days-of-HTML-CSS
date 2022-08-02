import { createStitches, ScaleValue } from "@stitches/react";

export const {
  styled, 
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: '#e5e5e5',
      secondary: '#7288a2',
      thirdy: '#03b5d2',

      background_1: '#121214',

      text_1: '#e5e5e5',

      border_1: '#e5e5e5',
      border_2: '#03b5d2',
    },
    space: {
      0: '0px',
      1: '1px',
      4: '0.25rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      24: '1.5rem',
      32: '2rem',
    },
    fontSizes: {
      0: '0px',
      1: '1px',
      4: '0.25rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      24: '1.5rem',
      32: '2rem',
    },
    fonts: {
      default: 'Roboto',
    },
    radii: {
      default: '5px',
      full: '9999px',
      round: '50%',
    },
  },
  media: {
    bp1: '(max-width: 768px)',
  },
  utils: {
    marginX: (value: ScaleValue<'space'>) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: ScaleValue<'space'>) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value: ScaleValue<'space'>) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: ScaleValue<'space'>) => ({ paddingTop: value, paddingBottom: value }),
    widthPxToRem: (value: number) => ({ width: `${value / 16}rem` }),
    heightPxToRem: (value: number) => ({ height: `${value / 16}rem` }),
    fontSizePxToRem: (value: number) => ({ fontSize: `${value / 16}rem` }),
  }
})