import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  ':focus': {
    $$shadowColor: '$primary',
    outline: 'none',
    boxShadow: '0 0 0 2px $$shadowColor',
  },

  '::-webkit-scrollbar': {
    width: '6px',
    height: '6px',
  },

  '::-webkit-scrollbar-track': {
    background: 'transparent'
  },

  '::-webkit-scrollbar-thumb': {
    borderRadius: '3px',
    background: '$primary',
  },

  body: {
    fontFamily: '$default, sans-serif',
    '-webkit-font-smoothing': 'antialiased',
    background: '$bg_body',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})