import { createStitches, ScaleValue } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  getCssText,
  createTheme,
  keyframes,
  theme
} = createStitches({
  theme: {
    colors: {

      primary: '#353540',
      background_1: '#f6d365',
      background_2: '#fda085',
      background_3: `linear-gradient( 
        226deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.4) 35%,
        rgba(255, 255, 255, 0.2) 42%,
        rgba(255, 255, 255, 0) 60%
      )`,
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
    bp1: '(max-width: 768px)'
  },
  utils: {
    marginX: (value: ScaleValue<'space'>) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: ScaleValue<'space'>) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value: ScaleValue<'space'>) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: ScaleValue<'space'>) => ({ paddingTop: value, paddingBottom: value })
  }
})