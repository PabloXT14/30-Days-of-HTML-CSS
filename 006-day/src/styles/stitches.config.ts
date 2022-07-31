import { createStitches, ScaleValue } from "@stitches/react";


export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      primary: '#8257e5',

      text: '#9A9A9A',
      
      background: '#E8E8E8',
      background_2: '#E0E0E0',
      background_3: '#49D84E',
      background_4: '#F3F3F3',
      background_5: '#E6E6E6',
      background_6: '#D2D2D2',
      
      border_1: '#DCDCDC',
      border_2: '#E0E0E0',
      border_3: '#D2D2D2',

      shadow_1: '#BEBEBE',
      shadow_2: '#FFFFFF',
      shadow_3: '#2196F3',
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