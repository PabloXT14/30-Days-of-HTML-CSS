import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  ':focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px $primary',
  },
  body: {
    fontFamily: '$default, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '$background',
  },
})