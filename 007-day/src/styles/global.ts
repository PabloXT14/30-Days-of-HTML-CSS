import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  '*:focus': {
    $$shadowColor: '$colors$thirdy',
    outline: 'none',
    // boxShadow: '0 0 0 2px $$shadowColor'
  },
  'body': {
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '$background_1',
    color: '$primary',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
  }
})