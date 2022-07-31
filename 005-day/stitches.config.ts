import { createStitches, ScaleValue } from '@stitches/react';

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
      primary: '#E1E1E6',
      primaryLight: '#FFFFFF',
      primaryDark: '#AD1E12',

      background_1: '#3b5999',
      background_2: '#46c1f6',
      background_3: '#e1306c',
      background_4: '#333333',
      background_5: '#de463b',

      text: '#2F2F33',
    },
    space: {
      '0': '0px',
      '1': '1px',
      '4': '0.25rem',
      '8': '0.5rem',
      '12': '0.75rem',
      '16': '1rem',
      '24': '1.5rem',
      '32': '2rem',
    },
    radii: {
      full: '99999px',
      round: '50%',
      default: '5px',
    },
    fonts: {
      default: 'Roboto'
    }
  },
  media: {
    bp1: '(max-width: 768px)'
  },
  utils: {
    marginX: (value: ScaleValue<'space'>) => ({ marginLeft: value, margnRight: value }),
    marginY: (value: ScaleValue<'space'>) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value: ScaleValue<'space'>) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: ScaleValue<'space'>) => ({ paddingTop: value, paddingBottom: value }),
  },
});