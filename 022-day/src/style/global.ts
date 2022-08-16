import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  ':focus': {
    outline: 'none',
    boxShadow: '',
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
    fontFamily: '$default',
    background: "$bg_body",
    '-webkit-font-smoothing': 'antialiased',
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center'
  }
});
