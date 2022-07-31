import { globalCss } from "../../stitches.config";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  '*:focus, *:active': {
    outline: 'none',
    '-webkit-tap-highlight-color': 'transparent',
  },
  body: {
    display: 'grid',
    height: '100vh',
    width: '100%',
    fontFamily: '$default, sans-serif',
    placeItems: 'center',
    background: 'linear-gradient(315deg, $primaryLight, $primary)',
    color: '$text',
  },
  'h1, h2, h3, h4, h5, h6': {
    color: '$title',
  },
})