import { createStitches, ScaleValue } from "@stitches/react";

export const {
  styled,
  config,
  createTheme,
  css,
  globalCss,
  getCssText,
  theme,
  keyframes
} = createStitches({
  theme: {
    colors: {
      background_body: '#121214',
      primary: '#F9F9F9',
      secondary: '#8257E6',
      thirdy: '#3d3c42',

      hover_bg: '#3a3c4f',
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
    paddingY: (value: ScaleValue<'space'>) => ({ paddingTop: value, paddingBottom: value }),
  }
})